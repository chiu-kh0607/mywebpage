import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavBarType } from "../types/NavBar";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Languages, Menu, X } from "lucide-react";
type NavBarProp = {
  navBarPar: NavBarType;
};
const Navbar: FC<NavBarProp> = ({ navBarPar }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { heroRef, projRef, skillRef, contactRef } = navBarPar;
  const [isOpen, setIsOpen] = useState(0);
  const ScrollToHome = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView();
      setActive("Home");
    }
  };
  const ScrollToProject = () => {
    if (projRef.current) {
      projRef.current.scrollIntoView();
      setActive("Project");
    }
  };
  const ScrollToSkill = () => {
    if (skillRef.current) {
      skillRef.current.scrollIntoView();
      setActive("Skill");
    }
  };
  const ScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView();
      setActive("Contact");
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
  // return (
  //   <div className="flex fixed top-0 left-0 bg-white z-50 p-6 w-screen justify-end">
  //     <nav className=" justify-between items-center top-0 right-0">
  //       <ul className="list-none sm:flex hidden justify-end items-center flex-100 ">
  //         <li>
  //           <LanguageComponent changeLanguage={changeLanguage} />
  //         </li>
  //         <li
  //           key="Home"
  //           className={`font-poppins font-normal cursor-pointer text-[16px] ${
  //             active === "Home" ? "text-black" : "text-gray-500"
  //           } mr-10`}
  //           onClick={ScrollToHome}
  //         >
  //           <a>{t("app.hero")}</a>
  //         </li>
  //         <li
  //           key="Project"
  //           className={`font-poppins font-normal cursor-pointer text-[16px] ${
  //             active === "Project" ? "text-black" : "text-gray-500"
  //           } mr-10`}
  //           onClick={ScrollToProject}
  //         >
  //           <a>{t("app.project")}</a>
  //         </li>
  //         <li
  //           key="Skill"
  //           className={`font-poppins font-normal cursor-pointer text-[16px] ${
  //             active === "Skill" ? "text-black" : "text-gray-500"
  //           } mr-10`}
  //           onClick={ScrollToSkill}
  //         >
  //           <a>{t("app.profile")}</a>
  //         </li>
  //         <li
  //           key="Contact"
  //           className={`font-poppins font-normal cursor-pointer text-[16px] ${
  //             active === "Contact" ? "text-black" : "text-gray-500"
  //           } mr-0`}
  //           onClick={ScrollToContact}
  //         >
  //           <a>{t("app.contact")}</a>
  //         </li>
  //         {/* {navLinks.map((nav, index) => (
  //         <li
  //           key={nav.id}
  //           className={`font-poppins font-normal cursor-pointer text-[16px] ${
  //             active === nav.title ? "text-black" : "text-gray-500"
  //           } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
  //           onClick={() => setActive(nav.title)}
  //         >
  //           <a href={`#${nav.id}`}>{nav.title}</a>
  //         </li>
  //       ))} */}
  //       </ul>

  //       <div className="sm:hidden flex flex-100 justify-end items-center">
  //         <FontAwesomeIcon
  //           icon={faBars}
  //           className="w-[28px] h-[28px] object-contain text-black"
  //           onClick={() => setToggle(!toggle)}
  //         />
  //         {/* <img
  //         src={toggle ? close : menu}
  //         alt="menu"
  //         className="w-[28px] h-[28px] object-contain"
  //         onClick={() => setToggle(!toggle)}
  //       /> */}

  //         <div
  //           className={`${
  //             !toggle ? "hidden" : "flex"
  //           } p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
  //         >
  //           <ul className="list-none flex justify-end items-start flex-1 flex-col">
  //             <li
  //               key="Home"
  //               className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
  //                 active === "Home" ? "text-black" : "text-gray-400"
  //               }`}
  //               onClick={ScrollToHome}
  //             >
  //               <a>{t("app.hero")}</a>
  //             </li>
  //             <li
  //               key="Project"
  //               className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
  //                 active === "Project" ? "text-black" : "text-gray-400"
  //               }`}
  //               onClick={ScrollToProject}
  //             >
  //               <a>{t("app.project")}</a>
  //             </li>
  //             <li
  //               key="Skill"
  //               className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
  //                 active === "Skill" ? "text-black" : "text-gray-400"
  //               }`}
  //               onClick={ScrollToSkill}
  //             >
  //               <a>{t("app.profile")}</a>
  //             </li>
  //             <li
  //               key="Contact"
  //               className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
  //                 active === "Contact" ? "text-black" : "text-gray-400"
  //               }`}
  //               onClick={ScrollToContact}
  //             >
  //               <a>{t("app.contact")}</a>
  //             </li>
  //             {/* {navLinks.map((nav, index) => (
  //             <li
  //               key={nav.id}
  //               className={`font-poppins font-medium cursor-pointer text-[16px] ${
  //                 active === nav.title ? "text-black" : "text-gray-400"
  //               } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
  //               onClick={() => setActive(nav.title)}
  //             >
  //               <a href={`#${nav.id}`}>{nav.title}</a>
  //             </li>
  //           ))} */}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
};

export default Navbar;
