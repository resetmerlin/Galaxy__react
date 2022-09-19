import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>September 19th 2022</div>
      <div className="expense-item__description">
        <h2>Montly pay</h2>
        <div className="expense-item__price"> Amount</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
