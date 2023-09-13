
import './App.css';
import Header from './conponents/Header';
import CreateArea from './conponents/CreateArea';
import { useState } from 'react';
import Note from './conponents/Note';
import Footer from './conponents/Footer';
function App() {
  const [notes, setNotes] = useState([]);
    function addNote (newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }

    function deleteNote (id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index!==id;
        })
      })
    }
  return (
    <div className="App">
     <Header />
     <CreateArea onAdd={addNote}/>
     {notes.map( (noteItem, index) => {
      return (
        <Note 
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
      );
     })}
     <Footer />
    </div>
  );
}

export default App;
