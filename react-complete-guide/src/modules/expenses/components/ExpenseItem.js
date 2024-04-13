import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 24th 2024</div>
            <div className="expense-item__description">
                <h2>Expense item</h2>
                <div className="expense-item__price">$ 12.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;