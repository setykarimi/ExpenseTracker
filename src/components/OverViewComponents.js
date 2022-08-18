import { useState } from "react";
import TransactionForm from "./TransactionForm";
import { BsPlusLg } from "react-icons/bs";

const OverViewComponent = ({ income, expense, addTransaction }) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <div className="header">
                <p>Balance: <span className="bold">{income - expense}</span></p>
                <button onClick={() => setIsShow((prevState) => !prevState)} className={isShow ? "cancel" : "add"}>
                    {isShow ? "Cancel" : <span>Add <BsPlusLg /></span>}</button>
            </div>
            {isShow && <TransactionForm
             addTransaction={addTransaction}
                setIsShow={setIsShow}
             />}
            <div className="my-transactions">
                <div>Expense: <span className="bold red">{expense}$</span></div>
                <div>Income: <span className="bold green">{income}$</span></div>
            </div>
        </>
    );
}

export default OverViewComponent;