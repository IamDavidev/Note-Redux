export default function MapNotes({ i, handleImportant }) {
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
