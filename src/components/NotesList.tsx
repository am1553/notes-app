import React from "react";
import data from "@/data.json";
import { v4 as uuidv4 } from "uuid";
import NoteItem from "./NoteItem";
function NotesList() {
  const notes = data.notes.map((note) => ({ ...note, id: uuidv4() }));
  return (
    <ul className="">
      {notes.map((note, i) => (
        <li key={note.id}>
          <NoteItem note={note} />
          {i < notes.length - 1 ? <hr className="my-1" /> : null}
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
