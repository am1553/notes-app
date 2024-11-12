import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

type Btn = {
  text: string;
  icon: string;
  height: number;
  width: number;
  alt: string;
};

function SectionSidebarChildren({
  children,
  btn,
  description,
}: {
  children: React.ReactNode;
  btn: Btn | undefined;
  description?: string | undefined;
}) {
  return (
    <>
      <div className="sticky top-0 w-full bg-white pt-5 pb-4 flex flex-col gap-4">
        {btn ? (
          <Button>
            <Image
              src={btn.icon}
              height={btn.height}
              width={btn.width}
              alt={btn.alt}
            />
            <span>{btn.text}</span>
          </Button>
        ) : null}
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </>
  );
}

export default SectionSidebarChildren;
