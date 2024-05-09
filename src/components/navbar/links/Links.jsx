"use client";
import { useState } from "react";
import NavLink from "./navLinks/navLink";

const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="flex items-center gap-3 xs:hidden sm:hidden md:flex  xl:flex lg:flex">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-3 cursor-pointer font-bold">Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>Menu</button>
      {open && (
        <div className="hidden sm:absolute sm:top-[100px] sm:right-0 sm:w-[30%] sm:h-[calc(100vh-100px)] sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:bg-red-200 sm:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
