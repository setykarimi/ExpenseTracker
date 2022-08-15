import { useState } from "react";
import OverViewComponent from "./OverViewComponents";
import TransactionComponent from "./TransactionComponent";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions, setTransactions] = useState([])
    return (
        <section>
            <OverViewComponent expense={expense} income={income}/>
            <TransactionComponent transactions={transactions} />

        </section>
    );
}

export default ExpenseApp;