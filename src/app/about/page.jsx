import Image from "next/image";

const About = () => {
  return (
    <div className="flex gap-24 flex-col text-lg   xl:flex-row lg:gap-10">
      <div className="text flex flex-1 flex-col gap-11 justify-between ">
        <h2 className="text-[#3673fd]">About Us</h2>
        <h1 className="text-[54px] leading-none font-serif">
          We are one step away to Make your vacation Better.
        </h1>
        <p className=" xl:text-[20px] text-[20px] font-serif">
          The Outhouse is a oasis of peace located in the kalatop wildlife
          sanctuary in chamba himachal pradesh. it provides you the oeace you
          need away from the city's chaos and you'll thrive in the lap of dark
          rain forest.
        </p>
        <div className="boxes flex  items-center justify-between">
          <div className="box flex flex-col gap-3 font-serif">
            <h1 className="text-[#3673fd] text-xl font-bold ">7+</h1>
            <p>Years of experience</p>
          </div>
          <div className="box flex flex-col gap-3 font-serif">
            <h1 className="text-[#3673fd] text-xl font-bold">Peace</h1>
            <p>Peaceful locality</p>
          </div>
          <div className="box flex flex-col gap-3 font-serif">
            <h1 className="text-[#3673fd] text-xl font-bold">Staff</h1>
            <p>Trained Staff</p>
          </div>
        </div>
      </div>
      <div className="img flex flex-1 relative ">
        <Image
          src="/about.jpg"
          alt=""
          width={600}
          height={500}
          className="rounded-xl object-contain"
        />
      </div>
    </div>
  );
};

export default About;
