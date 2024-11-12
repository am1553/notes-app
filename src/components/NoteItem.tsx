import moment from "moment";
import Link from "next/link";
import React from "react";

function NoteItem({ note, path }: { note: Note; path: string }) {
  const fdate = moment(note.lastEdited).format("DD MMM YYYY");
  return (
    <div className="flex flex-col gap-3 p-2">
      <Link href={`/app/${path}`}>
        <h3 className="text-preset-3 font-semibold">{note.title}</h3>
      </Link>
      <div className="flex items-center gap-1">
        {note.tags.map((tag) => (
          <label
            key={tag.toLowerCase()}
            className="text-preset-6 bg-neutral-200 rounded-md px-1.5 py-0.5"
          >
            {tag}
          </label>
        ))}
      </div>
      <span className="text-neutral-700 text-preset-6">{fdate}</span>
    </div>
  );
}

export default NoteItem;
