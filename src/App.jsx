// import { useReducer } from 'react';
// import logo from './logo.svg';
import {
  NoteReducer,
  createNote,
  toggleImportant,
} from './Reducers/NoteReducer';

// import { useDispatch, useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const state = $store.getState()
  const state = useSelector((state) => state);
  // const noteImportants = useSelector(state => state.filter(note => note.important))
  const dispatch = useDispatch();
  // const [state, dispatch] = useReducer(NoteReducer, []);
  console.log(state);

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
