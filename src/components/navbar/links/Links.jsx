"use client";
import { useState } from "react";
import NavLink from "./navLinks/navLink";

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
const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = false;

  return (
    <div className="container">
      <div className=" hidden md:flex items-center gap-3 ml-5 ">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="logout p-2 cursor-pointer font-bold border-[#f1f1f1bf] border-b-[1px] text-white  ml-2">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className="block right-0 md:hidden cursor-pointer bg-white text-black p-3 rounded-xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className="bg-slate-600 right-0 h-[calc(100vh_-_100px)] flex flex-col items-center justify-center gap-2 absolute top-24 right-70 w-[50%] md:hidden">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
