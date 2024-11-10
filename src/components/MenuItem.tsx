"use client";
import Link from "next/link";
import React from "react";
import NavIcon from "./NavIcon";
import useIsActiveLink from "@/utils/useIsActiveLink";

function MenuItem({
  route,
}: {
  route: {
    name: string;
    path: string;
    icon: string;
    label: string;
  };
}) {
  const isActive = useIsActiveLink(route.name);
  return (
    <Link
      href={route.path}
      className={`w-full md:w-20 flex-center flex-col py-1 rounded-md ${
        isActive ? "bg-blue-50" : null
      }`}
    >
      <NavIcon
        src={route.icon}
        height={24}
        width={24}
        alt={route.name}
        name={route.name}
      />
      <span className="max-md:hidden text-preset-6 text-neutral-600">
        {route.label}
      </span>
    </Link>
  );
}

export default MenuItem;
