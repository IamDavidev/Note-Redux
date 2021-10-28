//#region imports
import { NoteReducer } from './Reducers/NoteReducer';
import NoteFilter from './Reducers/NoteFilter';
import { combineReducers, createStore } from 'redux';
//#endregion

const reducer = combineReducers({
  NoteReducer,
  NoteFilter,
});
const store = createStore(reducer);


export default store;
