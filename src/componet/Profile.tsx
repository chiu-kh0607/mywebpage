import { useTranslation } from "react-i18next";
import Skills from "./Skills";

const Profile = () => {
  const { t } = useTranslation();
  const techniqueSkills = [
    { id: 1, name: "C#, .Net", score: 100, hint: "6 years work experience" },
    { id: 2, name: "SQLServer", score: 90, hint: "4 years work experience" },
    { id: 3, name: "PowerShell", score: 70 },
    { id: 6, name: "GitHub", score: 70 },
    { id: 4, name: "Html, CSS", score: 60, hint: "3 years work experience" },
    { id: 5, name: "Azure, AWS", score: 50, hint: "Azure Practioner, AWSSA" },
  ];
  const otherSkills = [
    { id: 1, name: t("profile.otherSkill.0"), score: 100, hint: "Natural langurage" },
    { id: 2, name: t("profile.otherSkill.1"), score: 80, hint: "JLPT N1" },
    { id: 3, name: t("profile.otherSkill.2"), score: 60, hint: "IELTS 700" },
  ];
  const introduction = [t("profile.content.0"), t("profile.content.1"), t("profile.content.2")];
  return (
    <div className="flex flex-col text-gray-600 min-h-screen p-10 justify-center">
      {/* <div className=" font-semibold md:text-[72px] text-[48px] py-14 md:text-start text-center">
        <h1>{t("app.profile")}</h1>
      </div> */}
      <div className="bg-white shadow-md mb-10 ">
        <span className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-3 grid-rows-1 content-center flex">
          <span className="md:row-span-3 items-center justify-center flex w-full">
            <img src="./Profile.jpg" className="object-cover w-auto h-full" />
          </span>
          <span className="md:col-span-2 col-span-1 md:row-span-1 p-5">
            {introduction.map((item) => (
              <p>{item}</p>
            ))}
          </span>
          <span className="p-5 p-10 pt-0 md:row-span-2">
            <Skills skills={techniqueSkills} />
          </span>
          <span className="p-5 p-10 md:row-span-2">
            <Skills skills={otherSkills} />
          </span>
        </span>
      </div>
    </div>
  );
};
export default Profile;
