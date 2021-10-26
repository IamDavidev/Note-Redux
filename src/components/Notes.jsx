//#region imports 
import { useDispatch, useSelector } from 'react-redux';
import { toggleImportant } from '../helpers/EventsReducer';
//#endregion
// export default 
function MapNotes({ i, handleImportant }) {
  return (
    <div key={i.id}>
      {i.important === true ? (
        <li style={{ color: '#0ff' }}>{i.description} </li>
      ) : (
        <li>{i.description}</li>
      )}
      <button onClick={() => handleImportant(i.id)}>!color</button>
    </div>
  );
}


const Notes = () => {
  //react - redux
  const state = useSelector((state) => state.NoteReducer);
  const dispatch = useDispatch();
  console.log(state);

  //evt
  const handleImportant = (id) => {
    dispatch(toggleImportant(id));
  };
  
  // render the notes
  return <ul>{state.map((i) => <MapNotes i={i} key={i.id} handleImportant={handleImportant} />)}</ul>;
};

export default Notes;
