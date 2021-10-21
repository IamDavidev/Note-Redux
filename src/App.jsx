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
  };
  return (
    <div>
      <form onSumbit={addNote}>
        <input type="text" name="note" />
        <button>add note</button>
      </form>
      <ul>
        {state.map((i) => {
          return <li key={i.id}>{i.note}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
