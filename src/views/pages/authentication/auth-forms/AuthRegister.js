import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery
} from '@mui/material';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { registerUser } from './../../../../store/authSlice';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const googleHandler = async () => {
    console.error('Register');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setErrors({});

    if (password !== password2) {
      setErrors({ submit: 'Passwords do not match' });
      setSubmitting(false);
      return;
    }

    try {
      const resultAction = await dispatch(registerUser({ email, username, password, password2 }));
      if (registerUser.fulfilled.match(resultAction)) {
        if (scriptedRef.current) {
          navigate('/login'); // Redirect to login page on successful registration
        }
      } else {
        if (scriptedRef.current) {
          setErrors({ submit: resultAction.payload });
        }
      }
    } catch (err) {
      if (scriptedRef.current) {
        setErrors({ submit: err.message });
      }
    } finally {
      if (scriptedRef.current) {
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              OR
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign up with Email address</Typography>
          </Box>
        </Grid>
      </Grid>

      <form noValidate onSubmit={handleSubmit} {...others}>
        <FormControl fullWidth error={Boolean(errors.email)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-register"
            type="email"
            value={email}
            name="email"
            onBlur={(e) => setEmail(e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
          />
          {errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-register">
              {errors.email}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors.username)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-username-register">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username-register"
            type="text"
            value={username}
            name="username"
            onBlur={(e) => setUsername(e.target.value)}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />
          {errors.username && (
            <FormHelperText error id="standard-weight-helper-text-username-register">
              {errors.username}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors.password)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-register"
            type={showPassword ? 'text' : 'password'}
            value={password}
            name="password"
            onBlur={(e) => {
              setPassword(e.target.value);
              changePassword(e.target.value);
            }}
            onChange={(e) => {
              setPassword(e.target.value);
              changePassword(e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <FormHelperText error id="standard-weight-helper-text-password-register">
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl fullWidth error={Boolean(errors.password2)} sx={{ ...theme.typography.customInput }}>
          <InputLabel htmlFor="outlined-adornment-password2-register">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password2-register"
            type={showPassword ? 'text' : 'password'}
            value={password2}
            name="password2"
            onBlur={(e) => setPassword2(e.target.value)}
            onChange={(e) => setPassword2(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
          {errors.password2 && (
            <FormHelperText error id="standard-weight-helper-text-password2-register">
              {errors.password2}
            </FormHelperText>
          )}
        </FormControl>

        {strength !== 0 && (
          <FormControl fullWidth>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </FormControl>
        )}

        
        {errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{errors.submit}</FormHelperText>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button disableElevation disabled={submitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
              Sign up
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default FirebaseRegister;
