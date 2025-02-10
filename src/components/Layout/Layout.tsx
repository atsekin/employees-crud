import { AppBar, Box, Button, Container, Toolbar, Typography, styled } from '@mui/material';

import { Employees } from '../Employees/Employees';

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
  color: '#109CF1',
});

const LogoutButton = styled(Button)({
  borderColor: '#109CF1',
  color: '#109CF1',
  textTransform: 'none',
  '&:hover': {
    borderColor: '#0D8BD8',
    backgroundColor: 'rgba(16, 156, 241, 0.1)',
  },
});

const MainContainer = styled(Box)({
  backgroundColor: '#F5F6F8',
  height: '100%',
  minHeight: 'calc(100vh - 60px)',
  width: '100%'
});

export const Layout = () => {
  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '60px' }}>
          <Title>Employees</Title>
          <LogoutButton variant="outlined">Log out</LogoutButton>
        </Toolbar>
      </AppBar>

      <MainContainer>
        <Container sx={{ width: '1082px', padding: '30px 0' }}>
          <Employees />
        </Container>
      </MainContainer>
    </Box>
  );
};