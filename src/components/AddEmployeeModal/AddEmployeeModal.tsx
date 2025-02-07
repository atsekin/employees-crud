import { Typography } from '@mui/material';
import { Modal } from '../Modal/Modal.tsx';
import EmployeeForm from '../EmployeeForm/EmployeeForm.tsx';

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
      <Typography variant="h6">Create Employee</Typography>
      <EmployeeForm onSuccess={handleClose} />
    </Modal>
  )
}