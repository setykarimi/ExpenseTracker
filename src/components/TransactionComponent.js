import { useEffect, useState } from "react";
import { BsArrowDown, BsArrowUp, BsFillTrashFill } from "react-icons/bs";


const TransactionComponent = ({ transactions, onDelete }) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(transactions);

    const filterTransaction = (search) => {

        if (search === "") {
            setFilteredTnx(transactions)
            return
        }


        const filteredList = transactions.filter((t) => t.desc.toLowerCase().includes(search.toLowerCase()));
        setFilteredTnx(filteredList)
    }

    const changeHandler = (e) => {
        setSearchItem(e.target.value)
        filterTransaction(e.target.value)
    }

    const selectHandler = (e) => {
        if (e.target.value === "all") {
            setFilteredTnx(transactions)
            console.log('all');
            return
        }

        const filteredItems = transactions.filter(t => t.type === e.target.value);
        setFilteredTnx(filteredItems)
    }

    useEffect(() => {
        filterTransaction(searchItem)
    }, [transactions])


    return (
        <section className="transaction-list">
        <div className="filterd-row">
            <input
                type="text"
                value={searchItem}
                onChange={changeHandler}
                placeholder="Search ..."
            />

            <select onChange={selectHandler}>
                <option value="all">all</option>
                <option value="expense">expense</option>
                <option value="income">income</option>
            </select>
            </div>
           
            <div className={`${filteredTnx.length > 3 && "transaction-height"}`}>
                {filteredTnx.length ?
                    filteredTnx.map((t, index) =>
                        <div key={index} className={`transaction-list__item ${t.type == "expense" ? "expense-transaction" : "income-transaction"}`}>
                            <div>
                                <span className="bold">{t.desc}</span>
                                <span className="amount">{t.amount}$</span>
                            </div>
                            <div className="transaction-list__item-details">
                                <span>{t.type == "expense" ? <BsArrowDown className="red icon" /> : <BsArrowUp className="green icon" />}</span>
                                <button
                                    onClick={() => onDelete(t.id)}
                                    className="delete-button">
                                    <BsFillTrashFill className="red" />
                                </button>
                            </div>
                        </div>) :
                    <div className="no-transaction">No transaction find ...</div>}
            </div>
        </section>);
}

export default TransactionComponent;