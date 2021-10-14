import './App.scss';
import Column from "./components/Column";
import {useState} from "react";

function App() {

  const [todoList, updateTodoList] = useState([]);
  const [progressList, updateProgressList] = useState([]);
  const [doneList, updateDoneList] = useState([]);
  //
  // const [columns, setColumns] = useState([
  //   {title: "To-Do", data: todoList},
  //   {title: "Progress", data: progressList},
  //   {title: "Done", data: doneList}
  // ])

  const addCard = (card) => {
    updateTodoList([card, ...todoList]);
    console.log('adding card...')

  }
  const deleteCard = (card) => {
    updateTodoList(todoList.filter(trash => trash !== card));
    console.log('deleting card...')
  }

  return (
    <div id={'app'}>
      <div className={'head'}>
        <div className={'title'}>TO-DO LIST 📋</div>
      </div>
      <div className={'columnContainer'}>
        <Column
          todoList={todoList}
          progressList={progressList}
          doneList={doneList}

          updateTodoList={updateTodoList}
          updateProgressList={updateProgressList}
          updateDoneList={updateDoneList}

          addCard={addCard}
          deleteCard={deleteCard}

        />
      </div>
    </div>
  );
}

export default App;
