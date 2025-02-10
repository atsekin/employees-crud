import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from '@mui/material';

export const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#109CF1',
});

export const StyledLogoutButton = styled(Button)({
  borderColor: '#109CF1',
  color: '#109CF1',
  textTransform: 'none',
  '&:hover': {
    borderColor: '#0D8BD8',
    backgroundColor: 'rgba(16, 156, 241, 0.1)',
  },
});

export const StyledMainContainer = styled(Box)({
  backgroundColor: '#F5F6F8',
  height: '100%',
  minHeight: 'calc(100vh - 60px)',
  width: '100%'
});

export const StyledAppBar = styled(AppBar)(() => ({
  borderBottom: '1px solid #ddd',
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