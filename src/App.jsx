import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal/ExpenseTotal";
import styles from "./App.module.css";


function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div className={styles.container} style={{ padding: 20 }}>
      <h1 className={styles.title}>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <ExpenseTotal expenses={expenses} />
    </div>
  );
}

export default App;
