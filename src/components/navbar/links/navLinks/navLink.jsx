"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${`min-h[100px] p-3 rounded-xl, font-[500] text-center`} ${
        pathName === item.path &&
        `bg-white text-black p-3 rounded-xl font-[500]`
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
