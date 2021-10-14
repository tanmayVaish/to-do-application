import './styles/Column.scss'
import Card from "./Card";
import {useState} from "react";

const Column = (props) => {

  const [open, toggleOpen] = useState(false);

  // console.log(props.column.card)
  return (
    <div id={'columns'}>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>{props.columnTitle}</span>
          <div className={'buttonColumn'}
               onClick={() => {
                 if (!open) {
                   props.addCard({
                     time: Date.now(),
                     title: "",
                     description: "",
                     start: "",
                     due: ""
                   }, props.columnI)
                   toggleOpen(true);
                 }
               }}
          >Add
          </div>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
            {
              props.column.card.map((card)=>(
                <Card
                  key={card.time}
                  card={card}
                  cardList={props.column}
                  columns={props.columns}
                  deleteCard={props.deleteCard}
                  setColumns={props.setColumns}
                  toggleOpen={toggleOpen}
                  coloumI={props.columnI}
                />
              ))
            }
          </div>
        </div>
      </div>
      {/*<div className={'column'}>*/}
      {/*  <div className={'upperPartColumn'}>*/}
      {/*    <span className={"titleColumn"}>In Progress</span>*/}
      {/*  </div>*/}
      {/*  <div className={'lowerPartColumn'}>*/}
      {/*    <div className={'cardColumn'}>*/}
      {/*      {*/}
      {/*        props.progressList.map((progress)=>(*/}
      {/*          <Card*/}
      {/*            key={progress.time}*/}
      {/*            todo={progress}*/}
      {/*            todoList={props.todoList}*/}
      {/*            deleteCard={props.deleteCard}*/}
      {/*            updateTodoList={props.updateTodoList}*/}
      {/*            toggleOpen={toggleOpen}*/}
      {/*            buffer={buffer}*/}
      {/*          />*/}
      {/*        ))*/}
      {/*      }*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className={'column'}>*/}
      {/*  <div className={'upperPartColumn'}>*/}
      {/*    <span className={"titleColumn"}>Done</span>*/}
      {/*    <div className={'buttonColumn'}>Flush</div>*/}
      {/*  </div>*/}
      {/*  <div className={'lowerPartColumn'}>*/}
      {/*    <div className={'cardColumn'}>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Column;