import { SkillItem } from "../types/Skill";

type ItemProp = {
  skill: SkillItem;
};
const ProgressBar: React.FC<ItemProp> = ({ skill }) => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 bg-white-500 rounded-full h-5 text-center border-2">
        <div className={`bg-sky-500 h-4 rounded-full`} style={{ width: skill.score + "%" }}></div>
      </div>
      {skill.hint != undefined && (
        <span className="z-10 w-1/2 hidden group-hover:flex absolute top-5 left-3/4 mt-5 p-2 -translate-x-1/2 bg-white rounded-md shadow-md">
          {skill.hint}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
