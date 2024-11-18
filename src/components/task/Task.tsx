import pic from "../../assets/images/TaskLogo.png";
import { ITasks } from "../../types/alltasksTypes";

const Task: React.FC<ITasks> = ({task}) => {
  console.log("task", task);
  return (
    <div className="w-full p-3 flex flex-col justify-center rounded-3xl shadow-combineshadow h-96">
      <img
        src={pic}
        alt="pic of task"
        className="w-full h-1/2 bg-slate-500 rounded-2xl"
      />
      <div className="w-full flex flex-col justify-center py-2 items-start h-1/2">
      {task.projectList?.tasks?.taskTitle}
        <p className="w-full bg-gray-500 text-black flex h-1/3">{task.title}</p>
        <div className="w-full flex h-1/3">
          <p>{task.projectList?.tasks?.taskTitle}</p>
          <p>deadline</p>
        </div>
        <div className="w-full flex h-1/3">
          <p>workspace title</p>
          <>project title</>
          <button> status</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
