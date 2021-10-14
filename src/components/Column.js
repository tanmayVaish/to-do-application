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
              props.column.card.map((card, cardI)=>(
                <Card
                  key={card.time}
                  card={card}
                  cardList={props.column}
                  columns={props.columns}
                  deleteCard={props.deleteCard}
                  setColumns={props.setColumns}
                  toggleOpen={toggleOpen}

                  columnI={props.columnI}
                  cardI={cardI}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Column;