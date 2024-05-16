import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" h-24 flex items-center justify-between ">
      <div className="logo text-[30px] font-bold">
        <Image src="/logobg.png" alt="" width={200} height={50} />
      </div>
      <div className="links">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
