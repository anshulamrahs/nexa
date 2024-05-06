import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center justify-between ">
      <div className="logo text-[30px] font-bold">Logo</div>
      <div className="links">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
