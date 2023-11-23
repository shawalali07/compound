import { Modal } from "@mui/material";

export const ModalCustom = ({ children, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};
