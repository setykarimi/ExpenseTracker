import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
    const [formValues, setFormValues] = useState({
        type: "income",
        desc: "",
        amount: ""
    })

    const Changehandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addTransaction(formValues)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" value={formValues.desc} onChange={Changehandler} />
            <input type="number" name="amount" value={formValues.amount} onChange={Changehandler} />

            <div>
                <input
                    type="radio"
                    value="expense"
                    name="type"
                    onChange={Changehandler}
                    checked={formValues.type === 'expense'}
                    />
                <label>expense</label>
                <input
                    type="radio"
                    value="income"
                    name="type"
                    onChange={Changehandler}
                    checked={formValues.type === 'income'}
                    />
                <label>income</label>
            </div>
            <button type="submit">Add Transaction</button>
        </form>);
}

export default TransactionForm;