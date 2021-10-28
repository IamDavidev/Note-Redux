import { useDispatch } from 'react-redux';
import { createNote } from '../helpers/EventsReducer';


const NewNote = () => {
  const dispatch = useDispatch();

  const addNote = (evt) => {
    evt.preventDefault();
    const { target } = evt;
    const description = target.note.value;
    target.note.value = ' ';
    dispatch(createNote(description));
  };

  return (
    <div className="new-note">
      <form onSubmit={addNote}>
        <input type="text" name="note" placeholder="Description" />
        <button className="btn__submit">Add</button>
      </form>
    </div>
  );
};

export default NewNote;
