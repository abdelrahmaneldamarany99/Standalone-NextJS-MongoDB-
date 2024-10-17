"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type LinkType = {
  id: number;
  name: string;
  href: string;
};

const navLinks: LinkType[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Add Customer", href: "/add-customer" },
  { id: 2, name: "Remove All Customers", href: "/remove-all-customers" },
  { id: 3, name: "Sign In", href: "/sign-in" },
  { id: 3, name: "Sign Up", href: "/sign-up" },
];

const Header = () => {
  const pathName = usePathname();
  return (
    <header>
      {navLinks.map((link: LinkType) => {
        const isActive = pathName === link.href;
        console.log("pathName", pathName);
        return (
          <Link
            key={link.id}
            href={link.href}
            className={isActive ? "font-bold mr-5" : "mr-5"}
          >
            {link.name}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
