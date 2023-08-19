import React, { useState }  from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
// import notes from "../notes";
import CreateNote from "../component/CreateNote";

function App(){

  const [notes, setNote] = useState([]);

  function addNote(inputNote){
    setNote( prevNote =>{
      return [...prevNote, inputNote];
    })
  }

  return <div>
    <Header /> 
     <CreateNote  add = {addNote}/>
    {notes.map( ( inNote, index ) => (
    <Note
     key = {index}
     id = {index}
     title = {inNote.title} 
     content = {inNote.content}
     />)
  )} <Footer /></div>
}

export default App;