const Amount = (props) => {
    const amount = props.amount

    return(
        <div className="expense-item__price">{amount}</div>
    );
}

export default Amount;