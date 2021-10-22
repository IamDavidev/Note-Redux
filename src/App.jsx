import { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteReducer from './Reducers/NoteReducer';

function App() {
  const [state, dispatch] = useReducer(NoteReducer, []);

  const addNote = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const content = target.note.value;
    target.note.value = ' ';
    dispatch({
      type: '@note/add',
      payload: {
        content,
        id: content,
        important: true,
      },
    });
  };

  const handleImportant = (id) => {
    dispatch({
      type: '@note/important',
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <button>add note</button>
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
