"use client";

// import {
//   UserGroupIcon,
//   HomeIcon,
//   InboxIcon,
// } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function NavLinks() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  //   const links: any[] = [
  //     { name: "name1", href: "" },
  //     { name: "name2", href: "" },
  //     { name: "name3", href: "" }
  //   ];

  return (
    <>
      {/* {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })} */}

      <Link
        href=""
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-sky-100 text-blue-600": pathname === "/ui/dashboard",
          }
        )}
      >
        <p className="hidden md:block">Test</p>
      </Link>
      <Link
        href=""
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-sky-100 text-blue-600": pathname !== "/ui/dashboard",
          }
        )}
      >
        <p className="hidden md:block">Test</p>
      </Link>
    </>
  );
}

export default NavLinks;
