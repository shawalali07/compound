import { useState, useEffect } from "react";
import { useForm as useFormData } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useForm = (
  id,
  useInfo = () => ({}),
  useAdd = () => ({}),
  useUpdate = () => ({}),
  schema,
) => {
  const { data } = useInfo(id);
  const { mutate: add } = useAdd();
  const { mutate: update } = useUpdate();
  const [formValues, setFormValues] = useState({});

  const form = useFormData({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSave = () => {
    if (id) {
      update(formValues);
    } else {
      add(formValues);
    }
  };

  useEffect(() => {
    if (data) {
      setFormValues(data);
      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });
    }
  }, [data, setValue]);

  return {
    form: {
      formValues,
      onChange,
      onSave,
      handleSubmit,
      register,
      errors,
    },
  };
};
