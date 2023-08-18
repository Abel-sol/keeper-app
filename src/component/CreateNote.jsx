import React from "react";

function CreateNote(){
  return (<div>
    <form>
      <input name="title" placeholder="Title"/>
      <textarea name="content" row="4" placeholder="Take a note..."/>

      <button>add</button>
    </form>
  </div>)
}