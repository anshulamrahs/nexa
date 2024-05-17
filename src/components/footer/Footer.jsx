import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container flex justify-between items-center h-[100px] text-gray-500">
      <div className="left">
        <Link href="/">
          <Image
            src="/bgr.png"
            alt=""
            width={200}
            height={50}
            className="filter grayscale"
          />
        </Link>
      </div>
      <div className="text font-serif">
        OutHill Hospitality &#169; All rights Reserved
      </div>
    </div>
  );
};

export default Footer;
