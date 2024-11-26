// import { useEffect, useState } from "react";
// import useAllTasksStore from "../../../stores/useAllTasksStore";
import HeaderColumn from "../../headerColumn/HeaderColumn";
// import Task from "../../task/Task";
// import { ITask } from "../../../types/alltasksTypes";


const ColumnView = () => {
  // const { allProjects, allTasks } = useAllTasksStore();
  // const [tasks,setTasks]=useState<ITask[]>([]);
  // // const Tasks = () => {
  // //   allTasks();
  // // };
  // useEffect(() => {
  //   const listOTasks=allTasks();
  //    setTasks(listOTasks);
  // }, []);
  const listOfColumn = [
    { title: "Open", color: "orange-primary" },
    { title: "In Progress", color: "indigo-primary" },
    { title: "Pending", color: "yellow-primary" },
    { title: "To Do", color: "pink-primary" },
  ];

  return (
    <div className="flex py-4 px-6 justify-between gap-3 items-center">
      {listOfColumn.map((item) => (
        <div className="flex w-1/4 overflow-y-hidden h-[600px] flex-col items-center justify-start gap-5">
          <HeaderColumn item={item} />
          
        </div>
      ))}
    </div>
  );
};

export default ColumnView;
