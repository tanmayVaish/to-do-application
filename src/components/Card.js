import './styles/Card.scss'

const Card = () =>{
  return(
    <div id={'card'}>
      <textarea className={'inputCard'}/>
      <div className={'buttonCard'}>
        <div className={'buttonCardStyle'}>Add</div>
        <div className={'buttonCardStyle'}>Cancel</div>
      </div>
    </div>
  )
}

export default Card;