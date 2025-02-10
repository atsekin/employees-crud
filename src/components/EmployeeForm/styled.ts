import { Avatar, Box, Button, styled } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  maxWidth: 400,
  mx: 'auto',
  padding: '16px 0',
}));

export const StyledImgBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: 2,
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: 80,
  height: 80,
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  textTransform: 'none',
}));