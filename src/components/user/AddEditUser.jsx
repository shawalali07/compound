import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { addUser, getUserInfo, updateUser } from "../../api/users";

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

export default function AddEditUser({ id, open, onClose }) {
  const [formValues, setFormValues] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSave = () => {
    if (id) {
      updateUser(id, formValues);
    } else {
      addUser(formValues);
    }
  };

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getUserInfo(id);
        setFormValues(data);
      }
    })();
  }, []);

  const dialogue = {
    title: id ? "Edit User" : "Add User",
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography variant='h5' sx={{ mb: "10px" }}>
            {dialogue.title}
          </Typography>
          <div className='form'>
            <div className='field'>
              <label className='label'>Name</label>
              <input
                name='name'
                onChange={onChange}
                value={formValues?.name}
                className='input'
              />
            </div>
            <div className='field'>
              <label className='label'>Age</label>
              <input
                name='age'
                onChange={onChange}
                value={formValues?.age}
                className='input'
              />
            </div>
            <div className='field'>
              <label className='label'>Role</label>
              <input
                name='role'
                onChange={onChange}
                value={formValues?.role}
                className='input'
              />
            </div>
          </div>
          <Button onClick={handleSave} sx={{ mt: "10px" }} variant='contained'>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
