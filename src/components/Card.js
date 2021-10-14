import './styles/Card.scss';
import {useRef, useState} from "react";

const Card = (props) => {

  const [edit, setEdit] = useState(true);
  const [title, setTitle] = useState(props.card.title);
  const [description, setDescription] = useState(props.card.description);
  const [due, setDue] = useState(props.card.due);
  const [start, setStart] = useState(props.card.start);
  const [dragging, setDragging] = useState(false);

  const dragCard = useRef();
  const dragNode = useRef();

  console.log('1',props.cardList.card);
  console.log(props.card)

  const saveEditing = () => {
    if (title === "" || description === "" || start === "" || due === "") {
      return
    }
    setEdit(!edit);
    props.cardList.card.map(card => {
      if (card === props.card) {
        card.title = title
        card.description = description
        card.start = start
        card.due = due
      }
    })
    props.toggleOpen(false);
  }
  const deleteEditing = () => {
    props.cardList.card.map(card => {
      if (card === props.card) {
        props.deleteCard(card, props.coloumI);
      }
    })
    props.toggleOpen(false);
  }

  // Drag

  const startDrag = (e, card) => {
    console.log(e, card);
    dragCard.current = card;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', endDrag);
    setDragging(true);
  }
  const endDrag = () => {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', endDrag)
    dragCard.current = null;
    dragNode.current = null;
  }
  const enterDrag = (e) => {
    // console.log("Drag Over...");
  }




  return (
    <div
      draggable={true}
      onDragStart={(e)=>{
        startDrag(e, props.card);
      }}
      onDragOver={(e)=>enterDrag(e)}
      id={'card'}>
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
                saveEditing();
              }}>Add
              </div>
              <div className={'buttonCardStyle'} onClick={() => {
                deleteEditing();
              }}>Delete
              </div>
            </div>
          </div>
        ) : (
          <div className={dragging?'dragging backCard':'backCard'}>
            <div className={'contentCard'}>
              <div className={'contentCardTitle'}>{props.card.title}</div>
              <div className={'contentCardDescription'}>{props.card.description}</div>
              <div><span className={'contentCardStart'}>Start :</span> {props.card.start}</div>
              <div><span className={'contentCardDue'}>End :</span> {props.card.due}</div>
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