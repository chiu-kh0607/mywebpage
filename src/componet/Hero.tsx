import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="font-poppins font-semibold">
      <div className="hidden sm:flex text-black flex flex-row  min-h-screen align-bottom">
        <div className=" w-1/2 h-full items-center md:text-[72px] text-[48px] p-10 pt-[200px]">
          <h1>
            {t("hero.greeting")}
            <br />
            {t("hero.introduction.0")}{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
              {t("hero.introduction.1")}
            </span>
            {t("hero.introduction.2")}
          </h1>
        </div>
        <div className="w-auto h-full items-center p-10 pt-[225px]">
          <div className="text-gray-600 h-full">
            {t("hero.description.0")}
            <br />
            {t("hero.description.1")}
            <br />
            {t("hero.description.2")}
            {t("hero.description.3")}{" "}
          </div>
          <div className="justify-end">
            <div>
              <img src="./Hero_program.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden text-black flex flex-col  min-h-screen align-bottom pt-[60px] ">
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
      </div>
    </div>
  );
};
export default Hero;
