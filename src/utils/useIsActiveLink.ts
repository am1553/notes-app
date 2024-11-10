import { usePathname } from "next/navigation";

export default function useIsActiveLink(name: string) {
  const pathname = usePathname();
  const currentPath =
    pathname?.split("/")[2] === undefined ? "home" : pathname.split("/")[2];

  return currentPath === name ? true : false;
}
