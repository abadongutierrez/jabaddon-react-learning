import './App.css';
import ExpenseItem from './modules/expenses/components/ExpenseItem';

function App() {
  const expenses = [
    {
      date: new Date(2024, 1, 1),
      description: 'Description 1',
      price: 12.01
    },
    {
      date: new Date(2024, 1, 2),
      description: 'Description 2',
      price: 78.90
    }
  ];
  return (
    <div className="App">
      <div>
        {expenses.map((e) => 
            <ExpenseItem date={e.date} description={e.description} price={e.price} />)}
      </div>
    </div>
  );
}

export default App;
