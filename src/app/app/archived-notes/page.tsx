import { MobileSection, MobileSectionHeader } from "@/components/layout";
import React from "react";
import data from "@/data.json";
import NoteItem from "@/components/NoteItem";
function Archive() {
  const { notes } = data;
  return (
    <>
      <MobileSection>
        <MobileSectionHeader
          title="Archived Notes"
          description="All your archived notes are stored here. You can restore or delete them anytime."
        />
        {notes.map((note: Note, i: number) => (
          <li key={i}>
            <NoteItem
              path={`archived-notes/${note.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
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

export default Archive;
