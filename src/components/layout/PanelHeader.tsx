import Image from "next/image";
import Link from "next/link";
import React from "react";

function PanelHeader() {
  return (
    <header className="text-preset-4 flex justify-between lg:hidden">
      <Link href={"/app"} className="flex items-center">
        <Image
          src={"/icon-arrow-left.svg"}
          height={18}
          width={18}
          alt="right arrow"
        />
        <span>Go Back</span>
      </Link>

      <div className="flex items-center gap-4">
        <button type="button">
          <Image
            src={"/icon-delete.svg"}
            height={18}
            width={18}
            alt="right arrow"
          />
        </button>
        <button type="button">
          <Image
            src={"/icon-archive.svg"}
            height={18}
            width={18}
            alt="right arrow"
          />
        </button>
        <button>Cancel</button>
        <button className="text-blue-500">Save Note</button>
      </div>
    </header>
  );
}

export default PanelHeader;
