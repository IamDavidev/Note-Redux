import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { NoteReducer } from './Reducers/NoteReducer';
const $root = document.getElementById('root');


const store = createStore(NoteReducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);
