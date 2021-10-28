//#region imports LANGUAGE
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
//#endregion

const $root = document.getElementById('root');


// reder the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);


