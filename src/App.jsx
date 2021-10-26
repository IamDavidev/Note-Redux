//#region exports
import './app.css';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import FilterNotes from './components/FilterNotes';
// render the app 
function App() {
  return (
    <div>
      <NewNote />
      <FilterNotes />
      <Notes />
    </div>
  );
}

export default App;
