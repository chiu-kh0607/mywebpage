import { SkillItem } from "../types/Skill";
import ProgressBar from "./ProgressBar";
type ItemProps = {
  skills: SkillItem[];
};
const Skills: React.FC<ItemProps> = ({ skills }) => {
  console.log({ skills });
  return (
    <div>
      {skills.map((skill) => {
        return (
          <div className="py-1 relative group ">
            <label>{skill.name}</label>
            <ProgressBar skill={skill}></ProgressBar>
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
