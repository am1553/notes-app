import MenuBar from "@/components/MenuBar";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="lg:grid lg:grid-cols-[272px_1fr] h-full">
      <MenuBar />
      {children}
    </main>
  );
}

export default AppLayout;
