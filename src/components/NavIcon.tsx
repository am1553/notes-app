"use client";
import useIsActiveLink from "@/utils/useIsActiveLink";
import Image from "next/image";
import React from "react";

type NavIconType = {
  src: string;
  height: number;
  width: number;
  alt: string;
  name: string;
};

function NavIcon({ src, height, width, alt, name }: NavIconType) {
  const isActive = useIsActiveLink(name);
  return (
    <Image
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={`${isActive ? "active-icon" : null}`}
      data-testid={"nav-icon"}
    />
  );
}

export default NavIcon;
