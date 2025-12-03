import { useState } from "react";
import styles from "./ExpenseForm.module.css";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    const expense = {
      id: Date.now(),
      title,
      amount: Number(amount)
    };

    addExpense(expense);
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
