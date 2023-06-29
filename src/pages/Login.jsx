import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { theme } from '../styles/styles';
import ProfileCover from '../assets/profile-cover.png';
import { loginUser } from '../features/userSlice';
import { saveToken } from '../services/authStorage';
import { setToken } from '../services/api';

// focused outline color styles
const fieldStyle = {
  marginInline: 'auto',
  '& label.Mui-focused': {
    color: theme.palette.custom.main,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.custom.main,
    },
  },
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user.loggedIn && user.token) {
      saveToken(user.token);
      setToken(user.token);
      navigate('/');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginInline: 'auto',
        height: '100vh',
      }}
    >
      <Link to="/">
        <IconButton style={{ placeSelf: 'start start' }}>
          <HomeIcon
            fontSize="large"
            sx={{ color: theme.palette.custom.light }}
          />
        </IconButton>
      </Link>
      <div style={{ maxWidth: 750, placeSelf: 'center center' }}>
        <img src={ProfileCover} alt="logo" />
      </div>
      <div
        style={{
          placeSelf: 'center center',
          width: 'min(80ch, 100% - 2rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '10px',
          mt: '8px',
          padding: 2,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            required
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={fieldStyle}
          ></TextField>
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={fieldStyle}
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 3 }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
