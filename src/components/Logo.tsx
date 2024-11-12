import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({ isNav = false }: { isNav?: boolean }) {
  return isNav ? (
    <Link href={"/app"} className="flex items-center gap-1">
      <Image height={28} width={28} src={"/logo.svg"} alt="logo" />
      <span data-testid={"logo-text"} className="font-pacifico text-xl">
        Notes
      </span>
    </Link>
  ) : (
    <div className="flex items-center gap-1">
      <Image height={28} width={28} src={"/logo.svg"} alt="logo" />
      <span data-testid={"logo-text"} className="font-pacifico text-xl">
        Notes
      </span>
    </div>
  );
}

export default Logo;
