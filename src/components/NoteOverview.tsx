import Image from "next/image";
import React from "react";

function NoteOverview({
  showTags,
  showStatus,
  showLastEdited,
}: {
  showTags?: boolean;
  showStatus?: boolean;
  showLastEdited?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-preset-1 font-bold">
        React Performance Optimization
      </h1>
      <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 text-preset-6 md:text-preset-4">
        {showTags && (
          <>
            <label className="flex items-center gap-1.5">
              <Image src={"/icon-tag.svg"} width={12} height={12} alt="tag" />
              Tag
            </label>
            <div className="inline">
              <label>Dev, React</label>
            </div>
          </>
        )}
        {showStatus && (
          <>
            <label className="flex items-center gap-1.5">
              <Image
                src={"/icon-status.svg"}
                width={12}
                height={12}
                alt="status"
              />
              Status
            </label>
            <div className="inline">
              <label>Archived</label>
            </div>
          </>
        )}
        {showLastEdited && (
          <>
            <label className="flex items-center gap-1.5">
              <Image src={"/icon-clock.svg"} width={12} height={12} alt="tag" />
              Last Edited
            </label>
            <div className="inline">
              <label>29 Oct 2024</label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NoteOverview;
