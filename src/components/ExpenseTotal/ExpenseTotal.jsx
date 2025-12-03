import styles from "./ExpenseTotal.module.css";

function ExpenseTotal({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <h2 className={styles.total}>Total: ${total}</h2>
  );
}

export default ExpenseTotal;
