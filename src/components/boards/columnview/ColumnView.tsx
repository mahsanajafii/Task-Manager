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
    { title: "Open", color: "open" },
    { title: "In Progress", color: "progress" },
    { title: "Pending", color: "pending" },
    { title: "To Do", color: "do" },
  ];

  return (
    <div className="flex py-4 px-6 justify-between gap-3 items-center">
      {listOfColumn.map((item) => (
        <div className="flex w-1/4 overflow-y-hidden h-[600px] flex-col items-center justify-start gap-5">
          <HeaderColumn item={item} />
          {/* <div className="overflow-y-auto gap-3 py-2 flex flex-col items-center w-full h-[80%] px-2 mb-9  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
            {tasks.map((task)=>(
            <Task  task={task}/>
            
        ))
    } 
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ColumnView;
