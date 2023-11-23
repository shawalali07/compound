import { useEffect, useState } from "react";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = (
  Component,
  useQuery,
  useSave,
  resourceName,
  id,
) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    const { data: response } = useQuery(id);
    const { mutateAsync } = useSave(id);

    useEffect(() => {
      setOriginalData(response);
      setData(response);
    }, [response]);

    const isAddingUser = !id;

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      if (isAddingUser) {
        const response = await mutateAsync({ [resourceName]: data });
      } else {
        const response = await mutateAsync({ [resourceName]: data });
        setOriginalData(response?.data);
        setData(response?.data);
      }
    };

    const onReset = () => {
      if (isAddingUser) {
        setData(null);
      } else {
        setData(originalData);
      }
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
