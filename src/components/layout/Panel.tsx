import React from "react";

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white h-full py-5 px-4 md:px-8 md:py-6 rounded-t-lg flex flex-col gap-3">
      {children}
    </div>
  );
}

export default Panel;
