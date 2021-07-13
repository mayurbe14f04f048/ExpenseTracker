import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filter, setFilter] = useState("2020");
  const filterHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() ===filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} onChangeYear={filterHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
       
        
      </Card>
    </div>
  );
}

export default Expense;
