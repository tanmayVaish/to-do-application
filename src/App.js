import './App.scss';
import Column from "./components/Column";
import {useState} from "react";

function App() {

  const [todoList, updateTodoList] = useState([]);

  const addCard = (card) => {
    updateTodoList([card, ...todoList]);
  }

  const deleteCard = (card) => {
    updateTodoList(todoList.filter(trash => trash !== card));
  }

  return (
      <div id={'app'}>
        <div className={'head'}>
          <div className={'title'}>TO-DO LIST 📋</div>
        </div>
        <div className={'columnContainer'}>
          <Column
            todoList={todoList}
            addCard={addCard}
            deleteCard={deleteCard}
            updateTodoList={updateTodoList}
          />
        </div>
      </div>
  );
}

export default App;
