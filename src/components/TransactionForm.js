import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


const TransactionForm = ({ addTransaction, setIsShow }) => {
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
        if(formValues.desc ===  "" || formValues.amount === ""){
            toast.warn("Please fill all the blanks");
            return
        }
        
        addTransaction(formValues)
        setIsShow(false)
    }

    return (
        <form onSubmit={submitHandler} className="transaction-form">
            <div className="transaction-form__inputs">
                <input
                    type="text"
                    name="desc"
                    value={formValues.desc}
                    onChange={Changehandler}
                    placeholder="Type Description here ..."
                />
                <input
                    type="number"
                    name="amount"
                    value={formValues.amount}
                    onChange={Changehandler}
                    placeholder="Expense/Income $ ..."
                />
            </div>

            <div className="transaction-form__radio">

                <div className="transaction-form__radio-expense">
                    <input
                        type="radio"
                        value="expense"
                        name="type"
                        onChange={Changehandler}
                        checked={formValues.type === 'expense'}
                        id="expense"
                    />
                    <label>expense</label>
                    <span>{formValues.type === 'expense'}</span>
                </div>
                <div className="transaction-form__radio-income">
                    <input
                        type="radio"
                        value="income"
                        name="type"
                        onChange={Changehandler}
                        checked={formValues.type === 'income'}
                        id="income"
                    />
                    <label>income</label>
                    <span></span>
                </div>
            </div>
            <button type="submit" className="transaction-form__button">Add Transaction</button>
            <ToastContainer />
        </form>);
}

export default TransactionForm;