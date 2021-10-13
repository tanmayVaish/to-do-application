import './styles/Column.scss'
import Card from "./Card";
import {useState} from "react";

const Column = (props) => {

  const [open, toggleOpen] = useState(false);
  return (
    <div id={'columns'}>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>To-Do🤔</span>
          <div className={'buttonColumn'}
               onClick={() => {
                 if (!open) {
                   props.addCard({
                     time: Date.now(),
                     title: "",
                     description: "",
                     start: "",
                     due: ""
                   })
                   toggleOpen(true);
                 }
               }}
          >Add
          </div>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
            {
              props.todoList.map(todo => (
                <Card
                  key={todo.time}
                  todo={todo}
                  todoList={props.todoList}
                  deleteCard={props.deleteCard}
                  updateTodoList={props.updateTodoList}
                  toggleOpen={toggleOpen}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>In-Progress⏳</span>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
          </div>
        </div>
      </div>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>Done😌</span>
          <div className={'buttonColumn'}>Flush</div>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Column;