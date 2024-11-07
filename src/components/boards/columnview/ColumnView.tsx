import useAllTasksStore from "../../../stores/allTasksStore";
import HeaderColumn from "../../headerColumn/HeaderColumn";
import Task from "../../task/Task";

const ColumnView = () => {
    const{allTasks}=useAllTasksStore();
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
        <div className=" overflow-y-auto gap-3 bg-red-400 flex flex-col items-center w-full">

        {allTasks.map((task)=>(
            <Task/>
            
        ))
    }
    </div>
        </div>
    ))}
    
    </div>
  );
};

export default ColumnView;
