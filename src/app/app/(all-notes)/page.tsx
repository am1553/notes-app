import React from "react";
import MobilePanel from "@/components/MobilePanel";
import NotesList from "@/components/NotesList";
function AllNotes() {
  return (
    <div>
      <MobilePanel className="lg:hidden relative pt-0 md:pt-0">
        <div className="sticky top-0 left-0 right-0 bg-white py-5 md:py-6">
          <h1 className="text-preset-1 font-bold ">All Notes</h1>
        </div>
        <NotesList />
      </MobilePanel>
    </div>
  );
}

export default AllNotes;
