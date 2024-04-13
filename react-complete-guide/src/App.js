import logo from './logo.svg';
import './App.css';
import ExpenseItem from './modules/expenses/components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <div>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
