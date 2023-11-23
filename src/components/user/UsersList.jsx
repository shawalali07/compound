import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Button } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { useAddUser, useUpdateUser, useUserInfo } from "../../hooks/useUsers";
import { useUsers } from "../../hooks/useUsers";
import { AddEditCustom } from "./AddEditCustom";
import UserForm from "./UserForm";

export const UsersList = () => {
  const [open, setOpen] = useState(false);
  const { data: users } = useUsers();
  const [id, setId] = useState("");

  const onClose = () => {
    setId("");
    setOpen(false);
  };

  const handleEdit = (id) => {
    setId(id);
    setOpen(true);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 180, editable: true },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 80,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "role",
      headerName: "Department",
      width: 220,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Market", "Finance", "Development"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label='Edit'
            className='textPrimary'
            color='inherit'
            onClick={() => handleEdit(id)}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label='Delete'
            color='inherit'
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        pt: "100px",
        margin: "auto",
        height: 500,
        width: "70%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid rows={users} columns={columns} />
      {/* {open && <AddEditCustom id={id} open={open} onClose={handleClose} />} */}
      {open && (
        <UserForm
          open={open}
          onClose={onClose}
          id={id}
          useUserInfo={useUserInfo}
          useAddUser={useAddUser}
          useUpdateUser={useUpdateUser}
        />
      )}
    </Box>
  );
};
