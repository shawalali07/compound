import { useForm } from "../hooks/useForm";
import { userSchema } from "../../schema/schema";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserForm = ({
  open,
  onClose,
  id,
  useUserInfo,
  useAddUser,
  useUpdateUser,
}) => {
  const { form } = useForm(
    id,
    useUserInfo,
    useAddUser,
    useUpdateUser,
    userSchema,
  );

  const { formValues, onChange, onSave, handleSubmit, errors, register } = form;

  const dialog = {
    title: id ? "Edit" : "Add",
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h5' sx={{ mb: "10px" }}>
            {dialog.title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form className='form' onSubmit={handleSubmit(onSave)} noValidate>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              value={formValues?.name || ""}
              className='input'
              {...register("name", { onChange })}
            />
            {errors?.name && (
              <span className='error'>{errors.name.message}</span>
            )}
          </div>
          <div className='field'>
            <label className='label'>Age</label>
            <input
              value={formValues?.age || ""}
              className='input'
              {...register("age", { onChange })}
            />
            {errors?.age && <span className='error'>{errors.age.message}</span>}
          </div>
          <div className='field'>
            <label className='label'>Role</label>
            <input
              value={formValues?.role || ""}
              className='input'
              {...register("role", { onChange })}
            />
            {errors?.role && (
              <span className='error'>{errors.role.message}</span>
            )}
          </div>
          <Button type='submit' sx={{ mt: "10px" }} variant='contained'>
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserForm;
