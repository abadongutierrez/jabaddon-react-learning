import ExpenseItem from './ExpenseItem';
import Card from '../../common/components/Card';
import './Expenses.css';

// using arrow functions
const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expenseItem) => 
            <ExpenseItem date={expenseItem.date} description={expenseItem.description} price={expenseItem.price} />)}
    </Card>
  );
}

export default Expenses;