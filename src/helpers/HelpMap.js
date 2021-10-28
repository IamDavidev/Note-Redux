export default function MapNotes({ i, handleImportant }) {
    console.log(i + ': ' + handleImportant);
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

