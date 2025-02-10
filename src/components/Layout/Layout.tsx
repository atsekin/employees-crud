import { Box } from '@mui/material';

import { Employees } from '../Employees/Employees';
import { StyledTitle, StyledLogoutButton, StyledMainContainer, StyledAppBar, StyledToolbar, StyledContainer } from './styled';

export const Layout = () => {
  return (
    <Box>
      <StyledAppBar elevation={0}>
        <StyledToolbar>
          <StyledTitle>Employees</StyledTitle>
          <StyledLogoutButton variant="outlined">Log out</StyledLogoutButton>
        </StyledToolbar>
      </StyledAppBar>

      <StyledMainContainer>
        <StyledContainer>
          <Employees />
        </StyledContainer>
      </StyledMainContainer>
    </Box>
  );
};