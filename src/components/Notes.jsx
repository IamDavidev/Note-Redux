//#region imports
import { useDispatch, useSelector } from 'react-redux';
import { toggleImportant } from '../helpers/EventsReducer';
// import MapNotes from '../helpers/HelpMap';
//#endregion
//#region MapNotes
function MapNotes({ i, handleImportant }) {
  console.log(i + ': ' + handleImportant);
  return (
    <div key={i.id}>
      {i.important === true ? (
        <li style={{ color: '#0ff' }}>{i.description} </li>
      ) : (
        <li>{i.description}</li>
      )}
      {/* <button onClick={() => handleImportant(i.id)}>!color</button> */}
    </div>
  );
}

//#endregion
const Notes = () => {
  //react - redux
  const state = useSelector((state) => state.NoteReducer);
  const dispatch = useDispatch();
  console.log(state);

  //evt
  const handleImportant = (id) => {
    // console.log(dispatch(toggleImportant(id)));
    dispatch(toggleImportant(id));
  };

  // render the notes
  return (
    <div>
      {state.map((i) => (
        // <MapNotes i={i} handleImportant={handleImportant} />
        <ul key={i.id}>
          {i.important === true ? (
            <li style={{ color: '#0ff' }}>
              <strong>{i.description}</strong>
            </li>
          ) : (
            <li>
              <strong>{i.description}</strong>
            </li>
          )}
          <button onClick={() => handleImportant(i.id)}>!color</button>
        </ul>
      ))}
    </div>
  );
};

export default Notes;
