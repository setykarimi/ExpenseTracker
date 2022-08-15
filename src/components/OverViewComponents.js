import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverViewComponent = ({ income, expense }) => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div>
            <div>
                <p>Balance: {income - expense}</p>
                <button onClick={() => setIsShow((prevState) => !prevState)}>
                    {isShow ? "Cancel" : "Add"}</button>
            </div>
            {isShow && <TransactionForm />}
            <div>
                <div>Expense: {expense}</div>
                <div>Income: {income}</div>
            </div>
        </div>
    );
}

export default OverViewComponent;