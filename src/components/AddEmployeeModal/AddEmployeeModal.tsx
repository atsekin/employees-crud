import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Modal } from '../Modal/Modal';
import EmployeeForm from '../EmployeeForm/EmployeeForm';

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
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Typography variant="h6">Create Employee</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <EmployeeForm onSuccess={handleClose} />
    </Modal>
  )
}