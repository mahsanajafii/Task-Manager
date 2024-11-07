import { FaRegPlusSquare } from "react-icons/fa";
import { ITasks } from "../../types/alltasksTypes";
import { useEffect, useState } from "react";
import ColumnMore from "../columnMore/ColumnMore";

interface IWorkSpacesProps {
  allTasks: ITasks[];
}
interface IItem {
  title: string;
  ID: number;
}

const WorkSpaces: React.FC<IWorkSpacesProps> = ({ allTasks }) => {
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());
  const [show, setShow] = useState(false);
  const [item, setItem] = useState<IItem>({ ID: 0, title: "" });
  const handelProject = () => {
    console.log("object");
  };
  const handelMenu = (id, title) => {
    setShow(!show);
    if (show) {
      setItem({ ID: 0, title: "" });
      console.log("item", item, show);
    } else {
      setItem({ ID: id, title: title });
    }
  };
  const handleClick = (index: number) => {
    const newActiveKeys = new Set(activeKeys);
    if (newActiveKeys.has(index)) {
      newActiveKeys.delete(index);
    } else {
      newActiveKeys.add(index);
    }
    setActiveKeys(newActiveKeys);
  };
  useEffect(() => {
    handelMenu(0, "");
    setShow(false);
  }, []);
  return (
    <div className="flex flex-col gap-5 overflow-x-visible ">
      {show && <ColumnMore data={item} />}

      {allTasks.map((task, index) => (
        <div
          className="flex flex-col justify-start gap-5 items-start"
          key={task.id}
        >
          <div className="flex justify-start items-center gap-2 w-full  hover:bg-green-200  p-1 rounded-md ">
            <div className="flex justify-start items-center gap-2 w-full">
              <span
                className={`w-4 h-4 border rounded-md bg-[#${task.color}]`}
              ></span>
              <p
                onClick={() => handleClick(index)}
                className={`cursor-pointer`}
              >
                {task.title}
              </p>
            </div>
            <button onClick={() => handelMenu(task.id, "project")}>...</button>
          </div>
          {activeKeys.has(index) && (
            <ul className="pr-6 w-full">
              {task.projectList && task.projectList.length > 0 ? (
                task.projectList.map((project) => (
                  <li
                    key={project.id}
                    onClick={handelProject}
                    className={` overflow-x-visible hover:bg-green-100 p-1 rounded-md w-full cursor-pointer   
                      ${
                        activeKeys.has(index)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-48"
                      }`}
                  >
                    <span className=" flex flex-row justify-between items-center">
                    <p>{project.projectTitle}</p>
                    <button onClick={() => handelMenu(project.id, "task")}>
                      ...
                    </button>
                    </span>
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
