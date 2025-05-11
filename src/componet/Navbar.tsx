import { FC, useState } from "react";
import { NavBarType } from "../types/NavBar";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Languages, Menu, X } from "lucide-react";
type NavBarProp = {
  navBarPar: NavBarType;
};
const Navbar: FC<NavBarProp> = ({ navBarPar }) => {
  const { t } = useTranslation();
  //const [active, setActive] = useState("Home");
  const { heroRef, projRef, skillRef, contactRef } = navBarPar;
  const [isOpen, setIsOpen] = useState(0);
  const ScrollToHome = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView();
      // setActive("Home");
    }
  };
  const ScrollToProject = () => {
    if (projRef.current) {
      projRef.current.scrollIntoView();
      //setActive("Project");
    }
  };
  const ScrollToSkill = () => {
    if (skillRef.current) {
      skillRef.current.scrollIntoView();
      //setActive("Skill");
    }
  };
  const ScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView();
      //setActive("Contact");
    }
  };
  const LanguageComponent: FC<any> = ({ changeLanguage }) => {
    return (
      <>
        <button className="pr-4" onClick={() => setIsOpen(isOpen != 2 ? 2 : 0)}>
          {isOpen != 2 ? <Languages size={24} /> : <X size={24} />}
        </button>
        <ul
          className={`absolute bg-white w-full left-0 top-16 flex-col items-center space-y-4 p-4 transition-all duration-300 ${
            isOpen == 2 ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="#"
              className="text-black hover:underline"
              onClick={() => {
                setIsOpen(0);
                changeLanguage("ja");
              }}
            >
              日本語
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:underline"
              onClick={() => {
                setIsOpen(0);
                changeLanguage("en");
              }}
            >
              English
            </a>
          </li>
        </ul>
      </>
    );
  };
  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-screen z-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-black text-xl font-bold"></a>
        <span className="md:hidden">
          <LanguageComponent changeLanguage={changeLanguage} />
          <button className=" text-black" onClick={() => setIsOpen(isOpen != 1 ? 1 : 0)}>
            {isOpen == 1 ? <X size={24} /> : <Menu size={24} />}
          </button>
        </span>

        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-white w-full left-0 top-16 md:w-auto md:flex-row flex-col items-center space-y-4 md:space-y-0 p-4 md:p-0 transition-all duration-300 ${
            isOpen == 1 ? "block" : "hidden"
          }`}
        >
          <li className="md:flex hidden">
            <LanguageComponent changeLanguage={changeLanguage} />
          </li>
          <li>
            <a href="#" className="text-black hover:underline" onClick={ScrollToHome}>
              {t("app.hero")}
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:underline" onClick={ScrollToProject}>
              {t("app.project")}
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:underline" onClick={ScrollToSkill}>
              {t("app.profile")}
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:underline" onClick={ScrollToContact}>
              {t("app.contact")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
