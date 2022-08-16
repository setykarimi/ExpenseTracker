const TransactionComponent = ({transactions}) => {
    return ( <section>
        {transactions.map((t) =>
         <div key={t.idb}>
            <p>{t.desc}</p>
            <p>{t.amount}</p>
            <p>{t.type}</p>
        </div>)}
    </section> );
}
 
export default TransactionComponent;