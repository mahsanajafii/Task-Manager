import { FaRegPlusSquare } from "react-icons/fa";
import { ITasks } from "../../types/alltasks";
import { useState } from "react";
import ColumnMore from "../columnMore/ColumnMore";

interface IWorkSpacesProps {
  allTasks: ITasks[];
}

const WorkSpaces: React.FC<IWorkSpacesProps> = ({ allTasks }) => {
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());
const handelProject=()=>{

}
  const handleClick = (index: number) => {
    const newActiveKeys = new Set(activeKeys);
    if (newActiveKeys.has(index)) {
      newActiveKeys.delete(index);
    } else {
      newActiveKeys.add(index);
    }
    setActiveKeys(newActiveKeys);
  };

  return (
    <div className=" flex flex-col gap-5 overflow-x-visible">
      {allTasks.map((task, index) => (
        <div
          className="flex flex-col justify-start gap-5 items-start"
          key={task.id}
        >
          <div className="flex justify-start items-center gap-2 w-full">
          <div className="flex justify-start items-center gap-2 w-full">

            <span
              className={`w-4 h-4 border rounded-md bg-[${task.color}]`}
              ></span>
            <p onClick={() => handleClick(index)} className={`cursor-pointer text-[${task.color}]`}>
              {task.title}
            </p>
              </div>
            <button>...</button>
          </div>
          {activeKeys.has(index) && (
            <ul className=" px-10">
              {task.projectList && task.projectList.length > 0 ? (
                task.projectList.map((project) => (
                  <li
                    key={project.id}
                    onClick={handelProject}
                    className={` overflow-x-visible  w-full gap-[160px] cursor-pointer flex flex-row justify-between items-center  
                      ${
                        activeKeys.has(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-48"
                      }`}
                  >
                    <span>{project.projectTitle}</span>
                    <button>...</button>
                    <ColumnMore title="task" />
                  </li>
                ))
              ) : (
                <button className="w-full flex justify-center items-center px-2 rounded-md gap-3 bg-transparent border-2 border-black">
                  <FaRegPlusSquare /> ساختن پروژه جدید
                </button>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkSpaces;
