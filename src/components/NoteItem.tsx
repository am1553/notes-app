import moment from "moment";
import React from "react";

type NoteType = {
  id: string;
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

function NoteItem({ note }: { note: NoteType }) {
  const fdate = moment(note.lastEdited).format("DD MMM YYYY");
  return (
    <div className="flex flex-col gap-3 p-2">
      <h3 className="text-preset-3 font-semibold">{note.title}</h3>
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
