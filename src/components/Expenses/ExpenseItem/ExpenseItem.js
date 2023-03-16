import Date from './Date';
import Description from './Description';
import Amount from './Amount';
import Card from '../../UI/Card/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <Date date={props.date} />
            <div className="expense-item__description">
                <Description description={props.title} />
                <Amount amount={props.amount} />
            </div>
        </Card>
    );
}

export default ExpenseItem;