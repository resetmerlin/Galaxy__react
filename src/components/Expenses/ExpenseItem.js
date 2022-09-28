import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
import "./ExpenseItem.css";
// 그래서 리액트에게 다시 실행하라고 말하려면  리액트 라이브러리에서 임포트할 것이 있습니다
import React, { useState } from "react";

const ExpenseItem = (props) => {
  // in React, we add an event listener

  // by going to the JSX element, like this button.

  // And there we add a special prop.

  const [title, setTitle] = useState(props.title);
  // 그리고 이 훅, useState는 항상 두 개의 요소가 있는 배열을 반환합니다

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

// So if we called setTitle

// and we assign a new title,

// that leads to this component being called again

// and therefore, this new title, this updated title

// is fetched from React, which manages the State for us.
