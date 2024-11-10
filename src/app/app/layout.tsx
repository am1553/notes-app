import DesktopHeader from "@/components/DesktopHeader";
import MenuBar from "@/components/MenuBar";
import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col h-screen lg:grid lg:grid-cols-[272px_1fr] lg:grid-rows-[80px_1fr] max-lg:bg-neutral-100">
      <Sidebar />
      <MobileHeader />
      <DesktopHeader />
      <section className="lg:col-start-2 lg:row-start-2 overflow-hidden max-lg:overflow-y-auto">
        {children}
      </section>
      <MenuBar />
    </main>
  );
}

export default AppLayout;
