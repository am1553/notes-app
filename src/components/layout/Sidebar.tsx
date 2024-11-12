import React from "react";
import Logo from "../Logo";
import NavLink from "../NavLink";
import Link from "next/link";
import Image from "next/image";
const ROUTES = [
  { name: "home", path: "/app", icon: "/icon-home.svg", label: "All Notes" },
  {
    name: "archived-notes",
    path: "/app/archived-notes",
    icon: "/icon-archive.svg",
    label: "Archived Notes",
  },
];
function Sidebar() {
  const tags = [
    "Cooking",
    "Dev",
    "Fitness",
    "Health",
    "Personal",
    "React",
    "Recipes",
    "Shopping",
    "Travel",
    "TypeScript",
  ];
  return (
    <aside className="border-r py-3 px-4 max-lg:hidden h-screen flex flex-col row-span-2">
      <div className="py-3 mb-4">
        <Logo />
      </div>
      <nav className="flex flex-col gap-1">
        {ROUTES.map((route) => (
          <NavLink
            key={route.name}
            name={route.name}
            path={route.path}
            icon={route.icon}
            label={route.label}
          />
        ))}
      </nav>
      <hr className="my-2" />
      <span className="text-neutral-500">Tags</span>
      <ul className="flex flex-col gap-1 overflow-y-auto">
        {tags.map((tag) => (
          <Link
            href={"/app"}
            key={tag.toLowerCase()}
            className="flex items-center px-3 py-2.5 gap-2"
          >
            <Image src={"/icon-tag.svg"} height={20} width={20} alt="tag" />
            <span>{tag}</span>
          </Link>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
