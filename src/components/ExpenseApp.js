import { useState } from "react";
import TransactionComponent from "./TransactionComponent";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions,setTransactions] = useState([])
    return (
        <section>
            <div>
                <p>Balance: {income - expense}</p>
                <button>Add</button>
            </div>

            <div>
                <div>Expense: {expense}</div>
                <div>Income: {income}</div>
                <TransactionComponent transactions={transactions}/>
            </div>
        </section>
    );
}

export default ExpenseApp;