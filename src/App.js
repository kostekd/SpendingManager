import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Car show", amount: 22.3, date: new Date(2021, 2, 22) },
  { id: "e2", title: "Car show1", amount: 222.3, date: new Date(2021, 2, 22) },
  { id: "e3", title: "Car show2", amount: 22.3, date: new Date(2021, 2, 22) },
  { id: "e4", title: "Car show3", amount: 22.13, date: new Date(2020, 5, 11) }
]

function App() {

  const [array, setArray] = useState(DUMMY_EXPENSES);

  const onSaveNewExpenseHandler = (expense) => {
    setArray([...array, expense]);
  }

  return (
    <div>
      <NewExpense onSaveNewExpense={onSaveNewExpenseHandler} />
      <Expenses elements={array} />
    </div>
  );
}

export default App;
