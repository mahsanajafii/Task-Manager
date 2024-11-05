import useAllTasksStore from "../../../stores/allTasksStore";
import Column from "../../column/Column";
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
        <div className="flex w-1/4 bg-yellow-300 overflow-y-auto flex-col items-center justify-center">
        <Column item={item} />
        <div className="bg-red-400 overflow-y-auto w-full">

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
