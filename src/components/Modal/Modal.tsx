import { Modal as MuiModal, Box, Fade, Backdrop } from "@mui/material";

type ModalProps = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  open,
  handleClose,
  children,
}: ModalProps) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
};