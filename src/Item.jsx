/* eslint-disable react/prop-types */
import styles from "./general.module.css";
export default function Item({ item, remove }) {
  return (
    <li
      style={{
        padding: 10,
        borderBottom: "1px solid #ddd",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <span>
        {item.content} - <b>{item.name}</b>
      </span>
      <button onClick={() => remove(item.id)} className={styles.delete}>Delete</button>
    </li>
  );
}
