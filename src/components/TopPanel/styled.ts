import { Button, Divider, FormControl, InputLabel, Select, Stack, styled, TextField } from '@mui/material';

export const StyledCreateButton = styled(Button)(() => ({
  textTransform: 'none',
  width: '160px',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: '#109CF1',
}));

export const StyledStack = styled(Stack)(() => ({
  width: '100%',
  backgroundColor: '#fff',
}));

export const StyledTextField = styled(TextField)(() => ({
  width: '100%',
  marginBottom: 0,
  '& .MuiOutlinedInput-root fieldset': { border: 'none' },
}));

export const StyledDivider = styled(Divider)(() => ({
  height: '24px',
  alignSelf: 'center',
  color: '#DEDEDE'
}));

export const StyledSelectControl = styled(FormControl)(() => ({
  marginBottom: 0,
  minWidth: 200,
}));

export const StyledSelectLabel = styled(InputLabel)(() => ({
  color: '#6A707E',
  '&.MuiFormLabel-filled, &.Mui-focused.MuiInputLabel-formControl': {
    display: 'none',
  },
}));

export const StyledSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root fieldset': { border: 'none' },
}));