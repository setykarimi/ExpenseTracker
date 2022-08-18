import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponents";
import TransactionComponent from "./TransactionComponent";

const ExpenseApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transactions, setTransactions] = useState([])
    
    const AddTransaction = (formValues) => {
        setTransactions([...transactions, { ...formValues, id: Date.now() }])
    }

    const deleteHandler = (id) => {
        const filteredTransaction = transactions.filter(t => t.id !== id)
        setTransactions(filteredTransaction)
    }

    useEffect(() => {
        let expense = 0;
        let income = 0;
        transactions.forEach(t => t.type === "expense" ? expense = expense + parseFloat(t.amount) : income = income + parseFloat(t.amount))
        setExpense(expense)
        setIncome(income)
    }, [transactions])


    return (
        <section className="expense-app">
            <OverViewComponent
                expense={expense}
                income={income}
                addTransaction={AddTransaction}
            />

            <TransactionComponent
                transactions={transactions}
                onDelete={deleteHandler}
            />

        </section>
    );
}

export default ExpenseApp;