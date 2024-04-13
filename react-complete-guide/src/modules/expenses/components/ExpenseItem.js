import './ExpenseItem.css';

function ExpenseItem({ date, description, price }) {
    const formattedDate = date.toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'});

    return (
        <div className="expense-item">
            <div>{formattedDate}</div>
            <div className="expense-item__description">
                <h2>{description}</h2>
                <div className="expense-item__price">$ {price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;