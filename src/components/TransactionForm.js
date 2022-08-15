const TransactionForm = () => {
    return ( <form>
        <input type="text" name="desc" />
        <input type="number" name="amount" />
        <div>
            <input type="radio" value="expense" name="expense"></input>
            <label for="expense">expense</label>
            <input type="radio" value="income" name="income"></input>
            <label for="income">income</label>
        </div>
    </form> );
}
 
export default TransactionForm;