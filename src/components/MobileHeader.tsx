import React from "react";
import Logo from "./Logo";

function MobileHeader() {
  return (
    <header className="px-4 h-14 md:h-20 flex items-center bg-neutral-100 lg:hidden">
      <Logo />
    </header>
  );
}

export default MobileHeader;
