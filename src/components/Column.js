import './styles/Column.scss'
import Card from "./Card";

const Column = () => {
  return (
    <div id={'columns'}>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>To-Do</span>
          <div className={'buttonColumn'}>Add</div>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
            <Card done={true}/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>In-Progress</span>
          <div className={'buttonColumn'}>Add</div>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
            <Card done={true}/>
          </div>
        </div>
      </div>
      <div className={'column'}>
        <div className={'upperPartColumn'}>
          <span className={"titleColumn"}>Done</span>
          <div className={'buttonColumn'}>Add</div>
        </div>
        <div className={'lowerPartColumn'}>
          <div className={'cardColumn'}>
            <Card done={true}/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Column;