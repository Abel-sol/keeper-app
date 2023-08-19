import React, { useState } from "react";

function CreateNote(props){
  const [note ,setNote] = useState({
     title : "",
     content : ""
    });
  
  function handleChange(event){
    const {name, value} = event.target;
    setNote( prevNote =>{
      return {
        ...prevNote,
        [name] : value
      };
    });
  }
  
  function sendNoteToApp( event ){
    props.add( note );
    setNote( {
      title : "",
      content : "" });
    event.preventDefault();
  }
  return (<div>
    <form>
      <input  onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
      <textarea name="content" onChange={handleChange} value={note.content}  placeholder="Take a note..." rows="3" />

      <button onClick={sendNoteToApp}> add </button>
    </form>
  </div>)
}

export default CreateNote;