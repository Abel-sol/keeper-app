import React from "react";

const title = "This is a note Title";
const component = "This is a note content";

function Note(){
  return <div className="note"><h1>{title}</h1><p>{component}</p></div> ;
}

export default Note;