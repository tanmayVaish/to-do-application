import './styles/Card.scss';
import {useState} from "react";

const Card = (props) => {

  const [edit, setEdit] = useState(true);
  const [title, setTitle] = useState(props.todo.title);
  const [description, setDescription] = useState(props.todo.description);
  const [due, setDue] = useState(props.todo.due);
  const [start, setStart] = useState(props.todo.start);

  const saveEditing = () => {
    if (title === "" || description === "" || start === "" || due === "") {
      return
    }
    setEdit(!edit);
    props.todoList.map(card => {
      if (card === props.todo) {
        card.title = title
        card.description = description
        card.start = start
        card.due = due
      }
    })
    props.updateTodoList(props.todoList);
  }

  return (
    <div id={'card'}>
      {
        edit ? (
          <div className={'frontCard'}>
            <div className={'fieldsCard'}>
              <div className={'inputFieldCard'}>
                <input
                  className={'inputCardTitle'}
                  placeholder={'Title'}
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <textarea
                  className={'inputCardInput'}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                  placeholder={'Whatcha doing??'}/>

              </div>
              <div className={'dateFieldCard'}>
                <input value={start} className={'dateFieldInput'}
                       placeholder={'Start Time'}
                       onChange={(e) => {
                         setStart(e.target.value)
                       }}
                />
                <input value={due} className={'dateFieldInput'}
                       placeholder={'End Time'}
                       onChange={(e) => {
                         setDue(e.target.value)
                       }}
                />
              </div>
            </div>
            <div className={'buttonCards'}>
              <div className={'buttonCardStyle'} onClick={() => {
                props.toggleOpen(false);
                saveEditing();
              }}>Add
              </div>
              <div className={'buttonCardStyle'} onClick={() => {
                props.toggleOpen(false);
              }}>Cancel
              </div>
            </div>
          </div>
        ) : (
          <div className={'backCard'}>
            <div className={'contentCard'}>
              <div className={'contentCardTitle'}>{props.todo.title}</div>
              <pre className={'contentCardDescription'}>{props.todo.description}</pre>
              <div><span className={'contentCardStart'}>Start :</span> {props.todo.start}</div>
              <div><span className={'contentCardDue'}>End :</span> {props.todo.due}</div>
            </div>
            <div className={'buttonCard'}>
              <div className={'buttonCardStyle'} onClick={() => setEdit(!edit)}>Edit</div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Card;