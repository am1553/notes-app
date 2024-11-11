import NotesList from "@/components/NotesList";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function SecondarySidebar() {
  return (
    <div className="max-lg:hidden flex flex-col gap-4 pl-8 pr-4 py-5 border-r overflow-y-auto">
      <Button className="sticky">
        <Image src={"/icon-plus.svg"} height={12} width={12} alt="plus" />
        <span>Create New Note</span>
      </Button>
      <NotesList />
    </div>
  );
}

function AllNotesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="lg:grid lg:grid-cols-[290px_1fr_290px] h-full flex flex-col">
      <SecondarySidebar />
      {children}
      <div className="flex flex-col gap-2 border-l px-4 py-5 max-lg:hidden">
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
      </div>
    </div>
  );
}

export default AllNotesLayout;
