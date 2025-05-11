import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex text-black md:flex-row min-h-screen items-center flex-col">
        <div className="md:w-1/2 md:text-[72px] text-[48px] md:pt-0 pt-40 h-1/2">
          {t("hero.greeting")}
          <br />
          {t("hero.introduction.0")}{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
            {t("hero.introduction.1")}
          </span>
          {t("hero.introduction.2")}
        </div>
        <div className="md:w-1/2 p-10 md:h-screen flex flex-col">
          <div className="text-gray-700 items-center md:h-1/2 flex">
            <div>
              {t("hero.description.0")}
              <br />
              {t("hero.description.1")}
              <br />
              {t("hero.description.2")}
              {t("hero.description.3")}{" "}
            </div>
          </div>
          <div className="text-gray-700 items-center justify-center md:h-1/2 flex">
            <img src="./Hero_program.png" />
          </div>
        </div>
      </div>
      {/* <div className="flex sm:hidden text-black flex flex-col  min-h-screen align-bottom pt-[60px] ">
        <div className="w-full items-center text-[72px] p-10 ">
          <h1 className="">
            {t("hero.greeting")}
            <br />
            {t("hero.introduction.0")}{" "}
            <span className=" text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {t("hero.introduction.1")}
            </span>
            {t("hero.introduction.2")}
          </h1>
        </div>
        <div className="w-full items-center p-10 ">
          <span className="text-gray-600">
            {t("hero.description.0")}
            <br />
            {t("hero.description.1")}
            <br />
            {t("hero.description.2")}
            <br />
            {t("hero.description.3")}
          </span>
        </div>
      </div> */}
    </>
  );
};
export default Hero;
