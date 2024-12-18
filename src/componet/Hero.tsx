const Hero = () => {
  return (
    <div className="font-poppins font-semibold">
      <div className="hidden sm:flex text-black flex flex-row  min-h-screen align-bottom">
        <div className=" w-1/2 h-full items-center md:text-[72px] text-[48px] p-10 pt-[200px]">
          <h1>
            Hello!
            <br />
            I'm{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
              Chiu
            </span>
            !
          </h1>
        </div>
        <div className="w-auto h-full items-center p-10 pt-[225px]">
          <div className="text-gray-600 h-full">
            Thank you for reaching me.
            <br />
            I'm full-stack engineer.
            <br />
            And enquiped skill set for C#, .Net, MySql, SqlServer, AWS, Azure.{" "}
          </div>
          <div className="justify-end">
            <div>
              <img src="/Hero_program.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden text-black flex flex-col  min-h-screen align-bottom pt-[60px] ">
        <div className="w-full items-center text-[72px] p-10 ">
          <h1 className="">
            Hello!
            <br />
            I'm{" "}
            <span className=" text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Chiu
            </span>
            !
          </h1>
        </div>
        <div className="w-full items-center p-10 ">
          <span className="text-gray-600">
            Thank you for reaching me.
            <br />
            I'm full-stack engineer.
            <br />
            And enquiped skill set for C#, .Net,
            <br /> MySql, SqlServer, AWS, Azure.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
