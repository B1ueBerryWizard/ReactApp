import React, { useState } from 'react';

import Date from './Date';
import Description from './Description';
import Amount from './Amount';
import Card from '../../UI/Card/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const handleClick = () => {
        setTitle('Hello');
    };

    return (
        <Card className="expense-item">
            <Date date={props.date} />
            <div className="expense-item__description">
                <Description description={title} />
                <Amount amount={props.amount} />
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;