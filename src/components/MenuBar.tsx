import React from "react";
import MenuItem from "./MenuItem";
const ROUTES = [
  {
    name: "home",
    path: "/app",
    icon: "/icon-home.svg",
    label: "Home",
  },
  {
    name: "search",
    path: "/app",
    icon: "/icon-search.svg",
    label: "Search",
  },
  {
    name: "archived",
    path: "/app",
    icon: "/icon-archive.svg",
    label: "Archived",
  },
  {
    name: "tags",
    path: "/app",
    icon: "/icon-tag.svg",
    label: "Tags",
  },
  {
    name: "settings",
    path: "/app",
    icon: "/icon-settings.svg",
    label: "Settings",
  },
];
function MenuBar() {
  return (
    <nav className="flex justify-evenly px-4 md:px-8 h-14 md:h-20 items-center lg:hidden border-t bg-white">
      {ROUTES.map((route, i) => {
        return (
          <div key={route.name} className="w-full flex justify-around">
            <MenuItem route={route} />
            {i < ROUTES.length - 1 ? (
              <div className="w-[1px] bg-neutral-100 h-full max-md:hidden"></div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}

export default MenuBar;
