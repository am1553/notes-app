import { DesktopHeader, MenuBar, MobileHeader } from "@/components/layout";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col h-screen lg:grid lg:grid-cols-[272px_1fr] lg:grid-rows-[80px_1fr] max-lg:bg-neutral-100">
      <Sidebar />
      <MobileHeader />
      <DesktopHeader />
      <section className="lg:col-start-2 lg:row-start-2 overflow-hidden max-lg:overflow-y-auto h-full max-h-[calc(100vh-7rem)] md:max-h-[calc(100vh-10rem)] lg:max-h-[calc(100vh-5rem)]">
        {children}
      </section>
      <MenuBar />
    </main>
  );
}

export default AppLayout;
