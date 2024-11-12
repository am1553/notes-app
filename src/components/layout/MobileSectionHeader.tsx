import React from "react";

function MobileSectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white py-5 md:py-6 flex flex-col gap-2">
      <h1 className="text-preset-1 font-bold ">{title}</h1>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default MobileSectionHeader;
