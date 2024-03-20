import React, { useState } from "react";
import CreateNote from "../component/CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Notes";

function App(){

  const [ notes, setNote ] = useState( [] );

  function addNote( inputNote ){
    setNote( prevNote =>{
      return [ ...prevNote, inputNote ];
    });
  }

  function deleteNote( id ){
    setNote( prevNote =>{
     return  prevNote.filter( ( noteitem, index ) => {
        return index !== id;
      });
    });
  }

  return <div>
      <Header /> 
      <CreateNote  add = {addNote}/>
      {notes.map( ( inNote, index ) => (
        <Note
        key = { index }
        id = { index }
        title = { inNote.title } 
        content = { inNote.content }
        delete = { deleteNote }
        />)
      )} 
    <Footer />
  </div>
}

export default App;