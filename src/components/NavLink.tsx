"use client";
import useIsActiveLink from "@/utils/useIsActiveLink";
import Link from "next/link";
import React from "react";
import NavIcon from "./NavIcon";
import Image from "next/image";

function NavLink({
  name,
  path,
  icon,
  label,
}: {
  name: string;
  path: string;
  icon: string;
  label: string;
}) {
  const isActive = useIsActiveLink(name);
  return (
    <Link
      href={path}
      className={`flex gap-2 px-3 py-2.5 items-center rounded-md transition-colors ${
        isActive ? "bg-neutral-100" : null
      }`}
      data-testid={"nav-link"}
    >
      <NavIcon src={icon} height={20} width={20} name={name} alt={name} />
      <span className="flex-1" data-testid={"nav-label"}>
        {label}
      </span>
      {isActive && (
        <Image
          src={"/icon-chevron-right.svg"}
          height={48}
          width={24}
          alt="right arrow"
          data-testid="nav-right-arrow"
        />
      )}
    </Link>
  );
}
export default NavLink;
