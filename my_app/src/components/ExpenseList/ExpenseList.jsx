import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./ExpenseList.module.css";

function ExpenseList({ expenses }) {
   if (expenses.length === 0) {
    return <p className={styles.empty}>No expenses yet</p>;
  }

  return (
    <ul className={styles.list}>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ExpenseList;
