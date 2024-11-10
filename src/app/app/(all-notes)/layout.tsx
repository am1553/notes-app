import MobilePanel from "@/components/MobilePanel";
import NotesList from "@/components/NotesList";
import React from "react";

function AllNotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="lg:grid lg:grid-cols-[290px_1fr]">
      <MobilePanel className={"max-lg:hidden relative"}>
        <h1 className="text-preset-1 font-bold">All Notes</h1>
        <NotesList />
      </MobilePanel>
      {children}
    </div>
  );
}

export default AllNotesLayout;
