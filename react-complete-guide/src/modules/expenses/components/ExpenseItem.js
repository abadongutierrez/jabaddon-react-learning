import ExpenseDate from './ExpenseDate';
import Card from '../../common/components/Card';
import './ExpenseItem.css';

function ExpenseItem({ date, description, price }) {
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{description}</h2>
                <div className="expense-item__price">$ {price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;