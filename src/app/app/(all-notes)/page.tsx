import React from "react";
import NotesList from "@/components/NotesList";

function AllNotes() {
  return (
    <div className="px-4 py-5 md:py-6 md:px-8 pt-0 md:pt-0 gap-4 bg-white rounded-t-lg lg:hidden">
      <div className="sticky top-0 left-0 right-0 bg-white py-5 md:py-6">
        <h1 className="text-preset-1 font-bold ">All Notes</h1>
      </div>
      <NotesList />
    </div>
  );
}

export default AllNotes;
