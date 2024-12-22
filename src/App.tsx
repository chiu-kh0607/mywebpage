import styles from "./style";
import { Navbar, Hero, Footer, Contact, Project, Profile } from "./componet";
import { useRef } from "react";

const App = () => {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const projRef = useRef<null | HTMLDivElement>(null);
  const skillRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="flex flex-col bg-home w-screen h-screen overflow-y-auto">
      <Navbar homeRef={homeRef} projRef={projRef} skillRef={skillRef} contactRef={contactRef} />
      <div className="flex-grow">
        <div ref={homeRef} className={` ${styles.flexCenter}`}>
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
