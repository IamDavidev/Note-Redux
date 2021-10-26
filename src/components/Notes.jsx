import { useDispatch, useSelector } from 'react-redux';
import { toggleImportant } from '../Reducers/NoteReducer';
const Notes = () => {
  const state = useSelector((state) => (state = []));

  console.log(state);
  const handleImportant = (id) => {
    useDispatch(toggleImportant(id));
  };

  return (
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
  );
};

export default Notes;
