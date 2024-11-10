import React from "react";

function MobilePanel({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div
      className={`border-t-md px-4 py-5 md:py-6 md:px-8 flex flex-col gap-4 bg-white rounded-t-lg border-t-red-500 ${className}`}
    >
      {children}
    </div>
  );
}

export default MobilePanel;
