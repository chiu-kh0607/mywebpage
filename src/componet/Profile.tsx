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
    <div className="font-poppins text-gray-600">
      <div className="hidden sm:flex flex-col text-gray p-10 h-screen">
        <div className=" font-semibold md:text-[72px] text-[48px] pb-10 ">
          <h1>{t("app.profile")}</h1>
        </div>
        <div className="bg-white rounded-md shadow-md mb-10">
          <span className="grid grid-cols-3 grid-rows-3 content-center ">
            <span className="row-span-3">
              <img src="./Profile.jpg" className="object-cover w-full" />
            </span>
            <span className="col-span-2 p-5 pb-0">
              {introduction.map((item) => (
                <p>{item}</p>
              ))}
            </span>
            <span className="p-5 pt-0 row-span-2">
              <Skills skills={techniqueSkills} />
            </span>
            <span className="p-5 pt-0 row-span-2">
              <Skills skills={otherSkills} />
            </span>
          </span>
        </div>
      </div>
      <div className="flex sm:hidden flex-col text-gray-600 p-10">
        <div className=" font-semibold md:text-[72px] text-[48px] pb-10">
          <h1>{t("app.profile")}</h1>
        </div>
        <div className="bg-white rounded-md shadow-md mb-10 ">
          <div>
            <img src="./Profile.jpg" className="object-cover h-full w-full" />
          </div>
          <div className="p-3">
            {introduction.map((item) => (
              <p>{item}</p>
            ))}
          </div>
          <span className="grid grid-cols-1 grid-rows-2 content-center ">
            <span className="p-5">
              <Skills skills={techniqueSkills} />
            </span>
            <span className="p-5 ">
              <Skills skills={otherSkills} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
