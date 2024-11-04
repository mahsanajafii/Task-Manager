import { FaRegPlusSquare } from "react-icons/fa";
import { ITasks } from "../../types/alltasks";
import { useState } from "react";

interface IWorkSpacesProps {
  allTasks: ITasks[];
}

const WorkSpaces: React.FC<IWorkSpacesProps> = ({ allTasks }) => {
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());

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
    <div className=" flex flex-col gap-5 ">
      {allTasks.map((task, index) => (
        <div
          className="flex flex-col justify-start gap-5 items-start "
          key={task.id}
        >
          <div className="flex justify-start items-center gap-2 w-full">
            <div className="flex justify-start items-center gap-2 w-full ">
              <div
                className={`w-4 h-4 border rounded-md bg-${task.color}-300`}
              ></div>
              
              <p onClick={() => handleClick(index)} className="cursor-pointer">
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
                    className={`w-full  gap-40 transition translate-x-[-50] ease-in-out duration-500 flex flex-row justify-between items-center
                    ${activeKeys.has(index)&& "opacity-0 translate-x-48 overflow-hidden"}`}
                    key={project.id}
                  >
                    {project.projettitle}
                    <button>...</button>
                    </li>
                ))
              ) : (
                <button className="w-full flex  justify-center items-center px-2 rounded-md gap-3 bg-transparent  border-2 border-black">
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
