import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';
import React, { useState } from "react";

function CreateNote( props ){
  const [ note ,setNote ] = useState( {
     title : "",
     content : ""
    } );
 const [zoomIn, setZoomIn] = useState( false );
  
  function handleChange( event ) {
    const { name, value } = event.target;
    setNote( prevNote => {
      return {
        ...prevNote,
        [ name ] : value
      };
    });
  }
  
  function sendNoteToApp( event ){
    props.add( note );
    setNote( {
      title : "",
      content : "" } );
    event.preventDefault( );
  }
  return ( <div>
    <form className="create-note">
      { zoomIn && (
        <input 
         onChange = { handleChange } 
         name = "title" 
         placeholder = "Title" 
         value = { note.title }/>
        ) }
      <textarea 
        name="content"
        onClick={()=>setZoomIn(true)}
        onChange={ handleChange }
        value={ note.content }
        placeholder="Take a note..."
        rows={zoomIn? "3": "0"} />
      <Zoom in={ zoomIn }>

      <Fab onClick={ sendNoteToApp } className="add-btn">
        <AddIcon />
       </Fab>

      </Zoom>
    </form>
  </div> )
}

export default CreateNote;