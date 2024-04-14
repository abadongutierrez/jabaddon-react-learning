import './ExpenseDate.css';

export default function ExpenseDate({ date }) {
    const month = date.toLocaleString('es-MX', { month: 'long' });
    const day = date.toLocaleString('es-MX', { day: '2-digit', });
    const year = date.toLocaleString('es-MX', {year: 'numeric' });
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}