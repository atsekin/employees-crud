import { createTheme, Shadows } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#109CF1',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F2994A',
    },
    background: {
      default: '#F5F6F8',
    },
    text: {
      primary: '#192A3E',
      secondary: '#6A707E',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    '0px 6px 15px rgba(174, 174, 174, 0.5)',
    '0px 6px 15px rgba(16, 156, 241, 0.5)',
    ...(new Array(20).fill('none')),
  ] as Shadows,
});