import styles from "./ExpenseItem.module.css";

function ExpenseItem({ item }) {
  return (
    <li className={styles.item} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
      <span>{item.title}</span>
      <strong>₹{item.amount}</strong>
    </li>
  );
}

export default ExpenseItem;
