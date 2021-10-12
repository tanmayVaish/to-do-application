import './App.scss';
import Column from "./components/Column";
import {Provider} from "react-redux";
import configureStore from "./redux/Store";


function App() {
  return (
    <Provider store={configureStore}>
      <div id={'app'}>
        <div className={'head'}>
          <div className={'title'}>TO-DO LIST</div>
        </div>
        <div className={'columnContainer'}>
          <Column/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
