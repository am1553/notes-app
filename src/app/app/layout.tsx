import MenuBar from "@/components/MenuBar";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="overflow-hidden flex flex-col lg:grid lg:grid-cols-[272px_1fr] h-full max-lg:bg-neutral-100">
      <Sidebar />
      <MobileHeader />
      <section className="flex-1 overflow-y-auto">{children}</section>
      <MenuBar />
    </main>
  );
}

export default AppLayout;
