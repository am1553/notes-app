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
    <div className="lg:grid lg:grid-cols-[290px_1fr_290px] h-full">
      <SecondarySidebar />
      {children}
      <div className=""></div>
    </div>
  );
}

export default AllNotesLayout;
