import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.string().required("Age is required"),
  role: yup.string().required("Role is required"),
});
export const rolesSchema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.string().required("Age is required"),
  role: yup.string().required("Role is required"),
});
