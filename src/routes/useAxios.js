
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './../store/authSlice';

const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
  const { authTokens } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const axiosInstance = axios.create({
    baseURL,
    headers: { 
      Authorization: `Bearer ${authTokens?.access}`
    }
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const { payload: newTokens } = await dispatch(refreshToken());
    req.headers.Authorization = `Bearer ${newTokens.access}`;
    return req;
  });

  return axiosInstance;
};

export default useAxios;
