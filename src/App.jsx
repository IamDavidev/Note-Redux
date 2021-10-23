//imports libreari
import { useReducer } from 'react';
// import logo from './logo.svg';
import {
  NoteReducer,
  createNote,
  toggleImportant,
} from './Reducers/NoteReducer';
import { useSelector, useDispatch } from 'react-redux';
// import styles 
import './app.css'

function App() {
  // const state = $store.getState()
  const noteImportants = useSelector(state => state.filter(note => note.important))
  // const [state, dispatch] = useReducer(NoteReducer, []);

  //use redux
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(useSelector(state => state = []));
  console.log(state);

  //events buttons
  const addNote = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const content = target.note.value;
    target.note.value = ' ';
    dispatch(createNote(content));
  };

 const handleImportant = (id) => {
    dispatch(toggleImportant(id));
  };


  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <button className="btn__submit">add note</button>
      </form>
      <ul>
        {state.map((i) => {
          return (
            <div key={i.id}>
              {i.important === true ? (
                <li style={{ color: '#0ff' }}>{i.content} </li>
              ) : (
                <li>{i.content}</li>
              )}
              <button onClick={() => handleImportant(i.id)}>!color</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
