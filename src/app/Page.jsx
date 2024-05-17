import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="text flex flex-1 flex-col gap-[50px]">
        <h1 className="text-[70px] leading-none font-serif ">
          Serenity Unveiled Here.
        </h1>
        <p className="text-[20px] font-serif">
          "Retreat to tranquility at our peaceful haven, where serenity meets
          hospitality."
        </p>
        <div className="bt flex gap-[20px]">
          <button className="font-serif p-[20px] min-w-[20px] cursor-pointer border-none rounded-xl bg-[#3673fd]">
            Learn More
          </button>
          <button className="font-serif p-[20px] min-w-[20px] cursor-pointer border-none rounded-xl bg-[#e5e5e5] text-black">
            Contact
          </button>
        </div>
        <div className="brands ">
          <Image
            src="/brands.png"
            alt=""
            className="filter grayscale"
            width={500}
            height={50}
          />
        </div>
      </div>
      <div className="img flex-1 relative">
        <Image
          src="/snow.jpeg"
          alt=""
          fill
          className="hidden md:block md:h-[300px] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Home;
