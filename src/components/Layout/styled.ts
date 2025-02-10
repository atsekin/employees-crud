import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from '@mui/material';

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '24px',
  fontFamily: '"Open Sans", sans-serif',
  color: theme.palette.primary.main,
}));

export const StyledLogoutButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  textTransform: 'none',
  '&:hover': {
    borderColor: '#0D8BD8',
    backgroundColor: 'rgba(16, 156, 241, 0.1)',
  },
}));

export const StyledMainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  minHeight: 'calc(100vh - 60px)',
  width: '100%'
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'transparent',
  position: 'static',
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '60px',
}));

export const StyledContainer = styled(Container)(() => ({
  width: '1082px',
  padding: '30px 0',
}));