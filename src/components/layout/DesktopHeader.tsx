"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

function DesktopHeader() {
  const pathname = usePathname();
  const current =
    pathname.split("/")[2] === "archived-notes"
      ? pathname.split("/")[2].replace("-", " ")
      : "All Notes";
  return (
    <header className="flex items-center justify-between px-8 h-20 border-b max-lg:hidden col-start-2">
      <h1 className="text-preset-1 font-bold capitalize">{current}</h1>

      <div className="flex gap-4">
        <div className="relative h-fit w-fit">
          <input
            type="text"
            className="pl-11 pr-1.5 border py-3 rounded-md w-80"
            placeholder="Search by title, content or tags..."
          />
          <Image
            src={"/icon-search.svg"}
            height={20}
            width={20}
            alt="search"
            className="absolute top-2/4 left-4 -translate-y-2/4 "
          />
        </div>

        <Button variant={"ghost"}>
          <Image
            src={"/icon-settings.svg"}
            width={20}
            height={20}
            alt="settings"
          />
        </Button>
      </div>
    </header>
  );
}

export default DesktopHeader;
