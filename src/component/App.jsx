import React  from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import notes from "../notes";
import CreateNote from "../component/CreateNote";

function App(){
  return <div>
    <Header /> 
     <CreateNote/>
    {notes.map( note => (
    <Note
     key = {note.key}
     title = {note.title} 
     content = {note.content}
     />)
  )} <Footer /></div>
}

export default App;