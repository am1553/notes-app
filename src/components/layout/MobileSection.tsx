import React from "react";

function MobileSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-5 md:py-6 md:px-8 pt-0 md:pt-0 gap-4 bg-white rounded-t-lg lg:hidden">
      {children}
    </div>
  );
}

export default MobileSection;
