import { useDispatch } from 'react-redux';
import { createNote } from '../Reducers/NoteReducer';

const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const content = target.note.value;
    target.note.value = ' ';
    dispatch(createNote(content));
  };

  return (
    <div className="new-note">
      <form onSubmit={addNote}>
        <input type="text" name="note" placeholder="Title" />
        <textarea placeholder="Note"></textarea>
        <button className="btn__submit">Add</button>
      </form>
    </div>
  );
};

export default NewNote;
