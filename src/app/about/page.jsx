import Image from "next/image";

const About = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="img flex">
        <Image
          src="/about.jpg"
          alt=""
          width={600}
          height={500}
          className="rounded-xl"
        />
      </div>
      <div className="text flex flex-col gap-5 justify-between items-center ">
        <h1 className="text-3xl">About Us</h1>
        <p className="w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus
          numquam iure exercitationem eveniet consequatur repudiandae! Id,
          adipisci, nemo nulla, laboriosam corrupti quis modi hic veniam
          repudiandae at ex et?
        </p>
      </div>
    </div>
  );
};

export default About;
