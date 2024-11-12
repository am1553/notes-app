import React from "react";
import { MobileSection, MobileSectionHeader } from "@/components/layout";
import data from "@/data.json";
import NoteItem from "@/components/NoteItem";
function AllNotes() {
  const { notes } = data;
  return (
    <>
      <MobileSection>
        <MobileSectionHeader title="All Notes" />
        {notes.map((note: Note, i: number) => (
          <li key={i}>
            <NoteItem
              path={note.title.toLowerCase().replaceAll(" ", "-")}
              note={note}
            />
            {i < notes.length - 1 ? <hr className="my-1" /> : null}
          </li>
        ))}
      </MobileSection>
      <div className="max-lg:hidden px-4 py-5">No note selected</div>
    </>
  );
}

export default AllNotes;
