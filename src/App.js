import './App.scss';
import Column from "./components/Column";
import {useState} from "react";

function App() {

  const newCard = {
    time: Date.now(),
    title: "",
    description: "",
    start: "",
    due: ""
  }

  const [columns, setColumns] = useState([
    {title: "To-Do", card: [{
        time: Date.now(),
        title: "sdf",
        description: "df",
        start: "df",
        due: "fd"
      }]},
    {title: "Progress", card: [{
        time: Date.now(),
        title: "f",
        description: "d",
        start: "d",
        due: "sd"
      }]},
    {title: "Done", card: [{
        time: Date.now(),
        title: "ds",
        description: "d",
        start: "s",
        due: "asd"
      }]}
  ])

  const addCard = (card, columnI) => {
    let temp = columns;
    temp[columnI].card.push(card);
    setColumns(temp);
    console.log('adding card...');
  }

  const deleteCard = (card,columnI) => {
    let temp = columns;
    temp[columnI].card.filter(trash => trash !== card);
    setColumns(temp);
    console.log('deleting card...')
  }

  return (
    <div id={'app'}>
      <div className={'head'}>
        <div className={'title'}>TO-DO LIST 📋</div>
      </div>
      <div className={'columnContainer'}>
        {
          columns.map((column, columnI) => (
            <Column

              key={columnI}
              column={column}
              columnTitle={column.title}
              columnI={columnI}

              setColumns={setColumns}
              columns={columns}

              addCard={addCard}
              deleteCard={deleteCard}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
