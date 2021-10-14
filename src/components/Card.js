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


  // console.log('1',props.cardList.card);
  // console.log(props.card)

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
        props.deleteCard(card, props.columnI);
      }
    })
    props.toggleOpen(false);
  }

  // Drag
  const startDrag = (e, params) => {
    // console.log("Drag start...",params);
    dragCard.current = params;
    dragNode.current = e.target;
    // console.log(dragNode.current)
    dragNode.current.addEventListener('dragend', endDrag);
    setTimeout(() => {
      setDragging(true);
    }, 0)
  }
  const endDrag = () => {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', endDrag)
    dragCard.current = null;
    dragNode.current = null;
  }
  const enterDrag = (e, params) => {
    const currentCard = dragCard.current;
    console.log(dragNode.current, e.target);
    if (e.target !== dragNode.current) {
      console.log('TARGET IS NOT THE SAME')
      props.setColumns(oldColumns => {
        let newColumns = JSON.parse(JSON.stringify(oldColumns));
        console.log(newColumns);
        newColumns[params.columnI].card.splice(params.cardI, 0, newColumns[currentCard.columnI].card.splice(currentCard.cardI, 1, [0]));
        dragCard.current = params;
        return newColumns;
      })
    }
  }


  const getStyles = (params) => {
    const currentCard = dragCard.current;
    // console.log("IMP: ",currentCard.columnI);
    if (currentCard.columnI === params.columnI && currentCard.cardI === params.cardI) {
      return 'dragging backCard'
    }
    return 'backCard'
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
          <div
            draggable={true}
            onDragStart={(e) => {
              startDrag(e, {columnI: props.columnI, cardI: props.cardI});
            }}
            onDragEnter={dragging ? (e) => {
              enterDrag(e, {columnI: props.columnI, cardI: props.cardI})
            } : null}
            className={dragging ? getStyles({columnI: props.columnI, cardI: props.cardI}) : null}
            className={'backCard'}>
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