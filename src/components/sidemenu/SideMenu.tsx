import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/images/logo2.png";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import useAllTasksStore from "../../stores/allTasksStore";
import { ITasks } from "../../types/alltasks";
import WorkSpaces from "../workspace/WorkSpaces";
import Switch from "../darkmode/Switch";
import { LiaDoorOpenSolid } from "react-icons/lia";

const list: ITasks = {
  id: ~(Date.now() + (Math.random() + 1) * 20),
  title: "jsجاوا",
  staus: "done",
  color:"#fde047",
  oner: "admin",
};
// const list: ITasks = {
//   id: ~(Date.now() + (Math.random() + 1) * 20),
//   title: "جاوا",
//   staus: "done",
//   color: "#fde047",
//   projectList: [
//     {
//       id: ~(Date.now() + (Math.random() + 1) * 20),
//       projectTitle: "کلندر",
//       tasks: [
//         {
//           taskID: ~(Date.now() + (Math.random() + 1) * 20),
//           taskTitle: "صفحه خروج",
//           deadline: "new Date().toLocaleDateString('fa-IR')",
//           users: ["admin"],
//           status: "done",
//           description: "tree task",
//           Priority: "2",
// archive:true,
//         },
//       ],
//     },
//   ],
//   oner: "admin",
// };

function SideMenu() {
  const [extended, setExtended] = useState(false);
  const { allTasks, loadAllTasks, addTask } = useAllTasksStore();

  const handelArrowMenu = () => {
    setExtended(!extended);
  };
  useEffect(() => {
    loadAllTasks();
  }, []);
  console.log("allTasks", allTasks);
  return (
    <aside className="w-[22%] h-screen right-0 border-l-2 border-l-slate-200 flex flex-col justify-between items-center">
      <div className="flex flex-row justify-center items-center mt-6 mb-4 h-[95px]  w-fit gap-3 ">
        <img src={logo} alt="logo" className="w-14 h-14"></img>
        <p className="text-3xl leading-relaxed w-full h-fit font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#118C80] to-[#4AB7D8]">
          تسک منیجر
        </p>
      </div>
      <div className=" relative bg-blue-300 z-0 overflow-x-visible h-full w-[85%] flex flex-col justify-between">
        <div className="h-10 flex flex-row justify-between items-center text-xl">
          <p className="w-full">ورک‌اسپیس‌ها</p>
          <IoIosArrowDown
            onClick={handelArrowMenu}
            size={14}
            className={` transition-all duration-400 ease-in-out ${
              extended ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        <div className="h-10 rounded-md bg-slate-300 flex items-center justify-start">
          <CiSearch size={24} />
          <input
            type="text"
            placeholder="جستجو کنید"
            className="w-full bg-transparent"
          ></input>
        </div>
        <div>
          <button
            onClick={() => addTask(list)}
            className="w-full h-7 rounded-xl p-4 bg-slate-400 flex justify-center gap-1 items-center"
          >
            <FaRegPlusSquare />
            ساختن ورک‌اسپیس جدید
          </button>
        </div>
        <div className="overflow-y-auto h-[370px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
          <WorkSpaces allTasks={allTasks} />
        </div>
      </div>
      <div className="h-[10%] w-[85%]  flex justify-start gap-2 items-center">
        <div className="w-9 h-9 rounded-full  bg-red-300"></div>
        <p>user name</p>
      </div>
      <footer className="flex h-[10%] w-[85%]  justify-between items-center mb-4">
        <div className="flex  justify-start items-center" >
        <LiaDoorOpenSolid />
        <p>خروج</p>

        </div>
        <Switch/>
      </footer>
    </aside>
  );
}

export default SideMenu;
