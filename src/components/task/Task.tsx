import { IoCreateOutline } from "react-icons/io5";
import pic from "../../assets/images/TaskLogo.png";
import { ITask } from "../../types/alltasksTypes";
import Flag from "../common/flag/Flag";

const Task: React.FC<ITask> = ({ task }) => {
  // console.log("task deadline", task.deadline);
  // const converdate=(date:string)=>{
  //   const months = {
  //    "1": ' فروردین',
  //    "2": ' اردیبهشت',
  //    "3": ' خرداد',
  //    "4": ' تیر',
  //    "5": ' مرداد',
  //    "6": ' شهریور',
  //    "7": ' مهر',
  //    "8": ' آبان',
  //    "9": ' آذر',
  //    "10": ' دی',
  //    "11": ' بهمن',
  //    "12": ' اسفند',
  // };
  // const [year,month,day]=date.split("/");
  // const conveertedDate=day+months[month];
  // console.log("text",year,month,day,conveertedDate);
  // return conveertedDate
  // }
  // converdate(task.deadline);

  return (
    <div className="w-full p-3 flex flex-col border-gray-200 border-2 justify-center rounded-3xl shadow-combineshadow h-96">
      <img src={pic} alt="pic of task" className="w-full h-1/2 rounded-2xl" />
      <div className="w-full flex flex-col justify-between py-2 items-start h-1/2">
        {task.taskTitle}
        <div className="w-full flex gap-2 h-1/3">
          <span className="w-full flex gap-2 h-1/3 items-center">
            <Flag priority={task.priority} />
            <p>{task.deadlsine}</p>
          </span>
          <span className="w-full flex gap-2 h-1/3 text-gray-400 items-center">
            <IoCreateOutline />

            <p>{task.createdAt}</p>
          </span>
        </div>
        <div className="w-full flex justify-between items-center h-1/3">
          <p>{task.workspacesTitle}</p>
          <p>{task.projectTitle}</p>
          <button> {task.status}</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
