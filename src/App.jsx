//#region exports
import './app.css';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
// render the app 
function App() {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;
