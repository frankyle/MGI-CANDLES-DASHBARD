// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const baseURL = "http://127.0.0.1:8000/api";

const initialState = {
  user: localStorage.getItem('authTokens') ? jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access) : null,
  authTokens: localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post(`${baseURL}/token/`, { email, password });
    const data = response.data;
    localStorage.setItem('authTokens', JSON.stringify(data));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, username, password, password2 }, thunkAPI) => {
  try {
    const response = await axios.post(`${baseURL}/register/`, { email, username, password, password2 });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const refresh = state.auth.authTokens.refresh;
  try {
    const response = await axios.post(`${baseURL}/token/refresh/`, { refresh });
    const data = response.data;
    localStorage.setItem('authTokens', JSON.stringify(data));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.authTokens = null;
      localStorage.removeItem('authTokens');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authTokens = action.payload;
        state.user = jwtDecode(action.payload.access);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.authTokens = action.payload;
        state.user = jwtDecode(action.payload.access);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
