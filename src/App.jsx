import { QueryClient, QueryClientProvider } from "react-query";
import { UsersList } from "./components/user/UsersList";
import { Button } from "@mui/material";
import { useState } from "react";
import { AddEditCustom } from "./components/user/AddEditCustom";
import UserForm from "./components/user/UserForm";
import ComplexUserForm from "./components/user/ComplexUserForm";
import Design from "./Design";
import Compound from "./components/compound/Compound";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const product = {
    id: 1,
    image: "https://iili.io/HCURIHU.jpg",
    title: "Viston Earl Grey Tea",
    category: "Black Tea",
    rating: { stars: 4, reviews: 4 },
    price: 8.95,
  };
  return (
    <QueryClientProvider client={client}>
      {/* <Button
        onClick={() => setOpen(true)}
        sx={{ mb: "10px" }}
        variant='contained'
      >
        Add User
      </Button>
      <UsersList />

      <ComplexUserForm open={open} onClose={onClose} /> */}
      {/* <UserForm open={open} onClose={onClose} /> */}
      {/* <Design /> */}
      <Compound>
        <Compound.Title>{product.title}</Compound.Title>
        {/* <Compound.Price>{product.price}</Compound.Price> */}
        <Compound.Image>{product.image}</Compound.Image>
        <Compound.Category>{product.category}</Compound.Category>
      </Compound>
    </QueryClientProvider>
  );
}

export default App;
