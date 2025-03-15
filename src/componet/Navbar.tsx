import { FC, useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavBarType } from "../types/NavBar";
import { changeLanguage } from "i18next";
type NavBarProp = {
  navBarPar: NavBarType;
};
const LanguageComponent: FC<any> = ({ changeLanguage }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="pr-5 relative">
      <div className="flex flex-100" onClick={() => setToggle(!toggle)}>
        Lang
      </div>
      <div className={`${toggle ? `flex` : `hidden`} rounded-xl sidebar absolute p-2`}>
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          <li
            key="ja"
            className="font-poppins font-medium cursor-pointer text-[16px]"
            onClick={() => {
              changeLanguage("ja");
            }}
          >
            <a>ja</a>
          </li>
          <li
            key="en"
            className="font-poppins font-medium cursor-pointer text-[16px]"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            <a>en</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Navbar: FC<NavBarProp> = ({ navBarPar }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { heroRef, projRef, skillRef, contactRef } = navBarPar;
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
  return (
    <nav className="flex flex-row p-6 justify-between items-center fixed top-0 right-0 z-50">
      <LanguageComponent changeLanguage={changeLanguage} />
      <ul className="list-none sm:flex hidden justify-end items-center flex-100 ">
        <li
          key="Home"
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Home" ? "text-black" : "text-gray-500"
          } mr-10`}
          onClick={ScrollToHome}
        >
          <a>Home</a>
        </li>
        <li
          key="Project"
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Project" ? "text-black" : "text-gray-500"
          } mr-10`}
          onClick={ScrollToProject}
        >
          <a>Project</a>
        </li>
        <li
          key="Skill"
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Skill" ? "text-black" : "text-gray-500"
          } mr-10`}
          onClick={ScrollToSkill}
        >
          <a>Skill</a>
        </li>
        <li
          key="Contact"
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Contact" ? "text-black" : "text-gray-500"
          } mr-0`}
          onClick={ScrollToContact}
        >
          <a>Contact</a>
        </li>
        {/* {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-black" : "text-gray-500"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))} */}
      </ul>

      <div className="sm:hidden flex flex-100 justify-end items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="w-[28px] h-[28px] object-contain text-black"
          onClick={() => setToggle(!toggle)}
        />
        {/* <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        /> */}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              key="Home"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
                active === "Home" ? "text-black" : "text-gray-400"
              }`}
              onClick={ScrollToHome}
            >
              <a>Home</a>
            </li>
            <li
              key="Project"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
                active === "Project" ? "text-black" : "text-gray-400"
              }`}
              onClick={ScrollToProject}
            >
              <a>Project</a>
            </li>
            <li
              key="Skill"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
                active === "Skill" ? "text-black" : "text-gray-400"
              }`}
              onClick={ScrollToSkill}
            >
              <a>Skill</a>
            </li>
            <li
              key="Contact"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4${
                active === "Contact" ? "text-black" : "text-gray-400"
              }`}
              onClick={ScrollToContact}
            >
              <a>Contact</a>
            </li>
            {/* {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-gray-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
