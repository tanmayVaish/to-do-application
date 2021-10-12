import './styles/Card.scss';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch} from "react-redux";
import {saveTodo} from '../redux/Slice';
import {useState} from "react";

const Card = (props) => {

  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState();

  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding todo ${input}`);

    dispatch(saveTodo({
      id: Date.now(),
      title: title,
      description: input,
      status: false,
      created_at: Date.now(),
      updated_at: Date.now(),
      due_date: Date.now()
    }))
  }

  const handleCheck = () => {

  }

  return (
    <div id={'card'}>
      <div className={'frontCard'}>
        <div className={'inputFieldCard'}>
          <input
            className={'inputCardTitle'}
            placeholder={'Title'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            onChange={(e) => setInput(e.target.value)}
            className={'inputCardInput'}
            value={input}
            placeholder={'Whatcha doing??'}/>
        </div>
        <div className={'buttonCard'} onClick={addTodo}>
          <div className={'buttonCardStyle'}>Add</div>
          <div className={'buttonCardStyle'}>Cancel</div>
        </div>
      </div>
      <div className={'backCard'}>

        <Checkbox
          checked={props.done}
          onChange={handleCheck}
          inputProps={{"aria-label": "secondary checkbox"}}
        />

        <div className={'contentCard'}>Wash your clothes with Nirma! It is going to be a long week!</div>
        <div className={'buttonCard'}>
          <div className={'buttonCardStyle'}>Edit</div>
        </div>
      </div>
    </div>
  )
}

export default Card;