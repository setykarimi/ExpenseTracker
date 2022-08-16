import { useState } from "react";
import OverViewComponent from "./OverViewComponents";
import TransactionComponent from "./TransactionComponent";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions, setTransactions] = useState([])
    const AddTransaction = (formValues) => {
        console.log(formValues);
        setTransactions([...transactions,{...formValues , id: Date.now()}])
    }
    return (
        <section>
            <OverViewComponent
             expense={expense} 
             income={income}
              addTransaction={AddTransaction} />
            <TransactionComponent transactions={transactions} />

        </section>
    );
}

export default ExpenseApp;