import { useState } from "react";
import Item from "./Item";
import List from "./List";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const remove = (id) => {
    ``;
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <List>
        {!!data.length &&
          data.map((item) => (
            <Item key={item.id} item={item} remove={remove} />
          ))}
        {!data.length && <p style={{ textAlign: "center" }}>No Item(s)</p>}
      </List>
    </div>
  );
}
