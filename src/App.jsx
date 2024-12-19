import { useState } from "react";

import { Box, Container } from "@mui/material";

import Item from "./components/Item";
import Form from "./components/Form";
import { useApp } from "./ThemedApp";
import Header from "./components/Header";

export default function App() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);

  const remove = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setGlobalMsg('An item deleted.')
  };

  const add = (content, name) => {
    // const id = data[data.length - 1].id + 1;
    const id = Math.floor(Math.random() * 10000)
    setData((prevData) => [{ id, content, name }, ...prevData,]);
    setGlobalMsg('An item added.')
  };

  console.log(data)

  return (
    <Box>
      <Header />
      <Container
        maxWidth="sm"
        sx={{ mt: 4 }}
      >
        {showForm && <Form add={add} />}

        {data.map(item => (<Item key={item.id} item={item} remove={remove} />))}
      </Container>
    </Box>
  );
}
