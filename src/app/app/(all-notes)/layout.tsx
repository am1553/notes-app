import {
  SectionActionBar,
  SectionLayout,
  SectionSidebar,
  SectionSidebarChildren,
} from "@/components/layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import data from "@/data.json";
import NoteItem from "@/components/NoteItem";
function AllNotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { notes } = data;
  return (
    <SectionLayout>
      <SectionSidebar>
        <SectionSidebarChildren
          btn={{
            text: "Create New Note",
            height: 12,
            width: 12,
            icon: "/icon-plus.svg",
            alt: "add",
          }}
        >
          {notes.map((note: Note, i: number) => (
            <li key={i}>
              <NoteItem
                path={note.title.toLowerCase().replaceAll(" ", "-")}
                note={note}
              />
              {i < notes.length - 1 ? <hr className="my-1" /> : null}
            </li>
          ))}
        </SectionSidebarChildren>
      </SectionSidebar>
      {children}
      <SectionActionBar>
        <Button variant={"secondary"} className="justify-start">
          <Image
            src={"/icon-archive.svg"}
            height={18}
            width={18}
            alt="archive"
          />
          <span>Archive Note</span>
        </Button>
        <Button variant={"secondary"} className="justify-start">
          <Image
            src={"/icon-archive.svg"}
            height={18}
            width={18}
            alt="archive"
          />
          <span>Delete Note</span>
        </Button>
      </SectionActionBar>
    </SectionLayout>
  );
}

export default AllNotesLayout;
