import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between ">
      <div className="logo text-[30px] font-bold flex">
        <Link href="/">
          <Image src="/bgr.png" alt="" width={200} height={50} />
        </Link>
      </div>
      <div className="links">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
