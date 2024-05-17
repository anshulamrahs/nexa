"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${`min-h-[10px] p-2  font-[500] text-center font-serif`} ${
        pathName === item.path &&
        `border-b-[1px] border-[#f1f1f1bf] text-white p-3 font-serif  font-[500]`
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
