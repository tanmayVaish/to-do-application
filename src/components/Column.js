import './styles/Column.scss'
import Card from "./Card";

const Column = () => {
  return (
    <div id={'column'}>
      <div className={'upperPartColumn'}>
        <span className={"titleColumn"}>To-Do</span>
        <div className={'buttonColumn'}>Add</div>
      </div>
      <div className={'lowerPartColumn'}>
        <div className={'cardColumn'}>
          <Card done={true}/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Column;