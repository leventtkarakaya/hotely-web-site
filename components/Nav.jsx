"use client";
import Link from "next/link";
import React, { useState } from "react";
const links = [
  {
    path: "/",
    pathName: "Anasayfa",
  },
  {
    path: "/",
    pathName: "Bul Hotel",
  },
  {
    path: "/",
    pathName: "Hakkımızda",
  },
  {
    path: "/",
    pathName: "Bize Ulaşın",
  },
];

const Nav = ({ containerStyle, listStyle }) => {
  const [active, setActive] = useState("");
  return (
    <nav className={`${containerStyle}`}>
      <ul className={`${listStyle}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathName}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
