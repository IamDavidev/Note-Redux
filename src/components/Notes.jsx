import { useDispatch, useSelector } from 'react-redux';
import { toggleImportant } from '../Reducers/NoteReducer';

//#region conteiner component
function MapNotes({ i, handleImportant }) {
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
}
//#endregion
const Notes = () => {
  //react - redux
  const state = useSelector((state) => (state));
  const dispatch = useDispatch();

  console.log(state);
  //evt
  const handleImportant = (id) => {
    dispatch(toggleImportant(id));
  };

  // render the notes
  return <ul>{state.map((i) => <MapNotes i={i} handleImportant={handleImportant} />)}</ul>;
};

export default Notes;
