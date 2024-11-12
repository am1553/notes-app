import React from "react";
import { MobileSection, MobileSectionHeader } from "@/components/layout";
import NoteItem from "@/components/NoteItem";
import apiService from "@/config/axios";

async function AllNotes() {
  const notes = await apiService
    .get("/notes")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  console.log(notes);
  return (
    <>
      <MobileSection>
        <MobileSectionHeader title="All Notes" />
        {notes.map((note: Note, i: number) => (
          <li key={note.id}>
            <NoteItem path={note.id} note={note} />
            {i < notes.length - 1 ? <hr className="my-1" /> : null}
          </li>
        ))}
      </MobileSection>
      <div className="max-lg:hidden px-4 py-5"></div>
    </>
  );
}

export default AllNotes;
