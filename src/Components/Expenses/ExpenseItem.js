
import './ExpenseItem.css';
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate';

const ExpenseItem =(props) =>{
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item__description">
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick ={()=> {console.log('clicked')}}>Change Title</button>
    </Card>);
}

export default ExpenseItem;