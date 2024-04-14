
import Expenses from './modules/expenses/components/Expenses';

function App() {
  const expenses = [
    {
      date: new Date(2024, 3, 12),
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
    <div>
      <h2>Let's get started</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
