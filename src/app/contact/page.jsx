import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex items-center gap-24">
      <div className="img  flex-1 relative h-[500px]">
        <Image src="/mount.jpg" fill className="object-contain" alt="" />
      </div>
      <div className="form  flex-1 ">
        <form action="" className="flex flex-col gap-5">
          <input
            className="p-3 rounded-md border-[1px] outline-none focus:ring-slate-500 focus:border-slate-500  bg-[#3e5a7f44]"
            placeholder="Name and Surname"
          />
          <input
            className="p-3 rounded-md border-[1px] outline-none bg-[#3e5a7f44]"
            placeholder="Email Address"
          />
          <input
            className="p-3 rounded-md border-[1px] outline-none bg-[#3e5a7f44]"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className="p-3 rounded-md border-[1px] outline-none bg-[#3e5a7f44]"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Query"
          ></textarea>
          <button className="p-5 bg-[#3673fd] rounded-md font-bold ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
