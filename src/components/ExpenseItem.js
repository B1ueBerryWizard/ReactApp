import './ExpenseItem.css';
import Date from './ExpItemComponents/Date';
import Description from './ExpItemComponents/Description';
import Amount from './ExpItemComponents/Amount';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <Date date={props.date} />
            <div className="expense-item__description">
                <Description description={props.title} />
                <Amount amount={props.amount} className="expense-item__price" />
            </div>
        </div>
    );
}

export default ExpenseItem;