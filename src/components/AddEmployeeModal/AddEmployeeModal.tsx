import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Modal } from '../Modal/Modal';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

import { StyledBox } from './styled';

type AddEmployeeModalProps = {
  open: boolean;
  handleClose: () => void;
}

export const AddEmployeeModal = ({
  open,
  handleClose,
}: AddEmployeeModalProps) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      <StyledBox>
        <Typography variant="h6">Create Employee</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </StyledBox>
      <EmployeeForm onSuccess={handleClose} />
    </Modal>
  )
}