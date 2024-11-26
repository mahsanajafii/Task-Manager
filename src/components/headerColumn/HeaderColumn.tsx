import { FaRegPlusSquare } from "react-icons/fa";
import useAllTasksStore from "../../stores/useAllTasksStore";
import { ITask } from "../../types/alltasksTypes";
import { useEffect, useState } from "react";
import Task from "../task/Task";

interface IColumnProps {
  title: string;
  color: string;
}
const HeaderColumn: React.FC<IColumnProps> = ({ item }) => {
  const { allProjects, allTasks } = useAllTasksStore();
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const allTask = allTasks();
    const listOfTasks = allTask.filter((task) => task.status === item.title);
    setTasks(listOfTasks);
  }, []);
  console.log("allTasks in ColumnView ", tasks);

  return (
    <>
      <div
        className={` p-4 flex items-center justify-between h-10 text-center border border-t-4 border-solid border-${item.color} rounded-3xl  w-full`}
      >
        <p>{item.title}</p>
        <FaRegPlusSquare />
      </div>
      <div className="overflow-y-auto gap-3 py-2 flex flex-col items-center w-full h-[80%] px-2 mb-9  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
        {tasks.length == 0 ? (
          <p>no task</p>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      <button className="w-full flex justify-center items-center px-2 rounded-md gap-3 bg-transparent border-2 border-brand-primary">
        <FaRegPlusSquare /> ساختن پروژه جدید
      </button>
      </div>
    </>
  );
};

export default HeaderColumn;
