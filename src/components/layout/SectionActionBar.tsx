import React from "react";

function SectionActionBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 border-l pl-4 pr-8 py-5 max-lg:hidden">
      {children}
    </div>
  );
}

export default SectionActionBar;
