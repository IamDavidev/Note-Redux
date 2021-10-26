//#region imports LANGUAGE
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  {NoteReducer}  from './Reducers/NoteReducer';
//#endregion

// redux store
const $root = document.getElementById('root');
const store = createStore(NoteReducer);

// reder the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
