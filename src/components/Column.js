import './styles/Column.scss'

const Column = () =>{
  return(
    <div id={'column'}>
      <div className={'upperPartColumn'}>
        <span className={"titleColumn"}>To-Do</span>
        <div className={'buttonColumn'}>Add</div>
      </div>
    </div>
  )
}

export default Column;