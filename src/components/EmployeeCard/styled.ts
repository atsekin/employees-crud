import { Avatar, Box, Card, CardContent, Select, styled } from '@mui/material';

export const StyledCard = styled(Card)({
  width: '320px',
  transition: '0.3s',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0px 6px 15px rgba(174, 174, 174, 0.5)',
  '&:hover': {
    boxShadow: '0px 6px 15px rgba(16, 156, 241, 0.5)',
  },
});

export const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  padding: '24px 20px',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: 120,
  height: 120,
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '24px',
  width: '100%',
}));

export const StyledSelect = styled(Select)(() => ({
  marginTop: 1,
  fontSize: 12
}));
