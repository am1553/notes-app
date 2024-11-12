import React from "react";

function SectionSidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-lg:hidden flex flex-col gap-4 pl-8 pr-4 pb-5 border-r overflow-y-auto">
      {children}
    </div>
  );
}

export default SectionSidebar;
