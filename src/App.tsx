import styles from "./style";
import { Navbar, Hero, Footer, Contact, Project, Profile } from "./componet";
import { useReducer, useRef } from "react";
import "./i18n/config";
import dispatchReducer from "./componet/Reducer";
import { NavBarType } from "./types/NavBar";

const App = () => {
  const heroRef = useRef<null | HTMLDivElement>(null);
  const projRef = useRef<null | HTMLDivElement>(null);
  const skillRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const initialState = {
    language: "en",
  };
  const [dispatch] = useReducer(dispatchReducer, initialState);

  const changeLanguage = (language: string) => {
    dispatch({ type: "CHANGE_LAUNGAGE", payload: language });
  };
  const navBarPar: NavBarType = {
    heroRef: heroRef,
    projRef: projRef,
    skillRef: skillRef,
    contactRef: contactRef,
    changeLanguageFunc: changeLanguage,
  };
  return (
    <div className="flex flex-col bg-home w-screen h-screen overflow-y-auto">
      <Navbar navBarPar={navBarPar} />
      <div className="flex-grow">
        <div ref={heroRef} className={` ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div ref={projRef} className={`bg-project ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Project />{" "}
          </div>
        </div>
        <div ref={skillRef} className={`bg-skill  ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Profile />{" "}
          </div>
        </div>

        <div ref={contactRef} className={`bg-contact  ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
