import React from "react";
function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-[290px_1fr_290px] h-full flex flex-col">
      {children}
    </div>
  );
}

export default SectionLayout;
