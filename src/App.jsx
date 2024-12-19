import { useState } from "react";

import { Box, Container } from "@mui/material";

import Item from "./components/Item";
import Form from "./components/Form";
import { useApp } from "./ThemedApp";
import Header from "./components/Header";

export default function App() {
  const { showForm } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);

  const remove = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData((prevData) => [{ id, content, name }, ...prevData,]);
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
