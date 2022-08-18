import { useEffect, useState } from "react";

const TransactionComponent = ({transactions}) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(transactions);

    const filterTransaction = (search) => {
        
        if(search === ""){
            setFilteredTnx(transactions)
            return
        }
    

        const filteredList =  transactions.filter((t) => t.desc.toLowerCase().includes(search.toLowerCase()));
        setFilteredTnx(filteredList)
    }

    const changeHandler = (e) => {
        setSearchItem(e.target.value)
        filterTransaction(e.target.value)
    }

    useEffect(() => {
        filterTransaction(searchItem)
    }, [transactions])


    return (
        <section>
            <input type="text"
             value={searchItem} 
             onChange={changeHandler} 
             />
            {filteredTnx.length ?  filteredTnx.map((t,index) =>
                <div key={index}>
                    <p>{t.desc}</p>
                    <p>{t.amount}</p>
                    <p>{t.type}</p>
                </div>) : "no transaction finds"}
        </section>);
}

export default TransactionComponent;