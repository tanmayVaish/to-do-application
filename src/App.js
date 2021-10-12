import './App.scss';
import Column from "./components/Column";
import {Provider} from "react-redux";
import configureStore from "./redux/Store";



function App() {
  return (
    <Provider store={configureStore}>
      <div id={'app'}>
        <Column/>
      </div>
    </Provider>
  );
}

export default App;
