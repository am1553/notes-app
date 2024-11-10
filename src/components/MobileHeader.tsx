import React from "react";
import Logo from "./Logo";

function MobileHeader() {
  return (
    <header className="px-4 py-3 bg-neutral-100 lg:hidden">
      <Logo />
    </header>
  );
}

export default MobileHeader;
