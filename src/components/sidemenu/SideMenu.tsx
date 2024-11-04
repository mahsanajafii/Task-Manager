import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/images/logo2.png";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import useAllTasksStore from "../../stores/allTasksStore";
import { ITasks } from "../../types/alltasks";
import WorkSpaces from "../workspace/WorkSpaces";

const list:ITasks = {
  id: ~(Date.now() + (Math.random() + 1) * 20),
  title: "جاوا",
  staus: "done",
  color: "blue",
  projectList: [
    {
      id: ~(Date.now() + (Math.random() + 1) * 20),
      projettitle: "کلندر",
      tasks: [
        {
          taskID: ~(Date.now() + (Math.random() + 1) * 20),
          tasktitle: "صفحه خروج",
          deadline: "new Date().toLocaleDateString('fa-IR')",
          users: ["admin"],
          status: "done",
          description: "tree task",
          Priority: "2",
        },
      ],
    },
  ],
  oner: "admin",
};

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
    <aside className="w-[22%] h-screen fixed right-0 border-l-2 border-l-slate-200 flex flex-col justify-between items-center">
      <div className="flex flex-row justify-center items-center mt-6 mb-4 h-[95px]  w-fit gap-3 ">
        <img src={logo} alt="logo" className="w-14 h-14"></img>
        <p className="text-5xl leading-relaxed w-full h-fit font-bold bg-clip-text text-transparent bg-gradient-to-l from-[#118C80] to-[#4AB7D8]">
          تسک منیجر
        </p>
      </div>
      <div className="h-full w-[80%] flex flex-col justify-between bg-blue-300">
        <div className="h-10 flex flex-row justify-between items-center text-2xl">
          <p className="w-full">ورک‌اسپیس‌ها</p>
          <IoIosArrowDown
            onClick={handelArrowMenu}
            size={24}
            className={` transition-all duration-400 ease-in-out ${
              extended ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        <div className="h-16 rounded-md bg-slate-300 flex items-center justify-start">
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
        {
            allTasks.map((list)=>(

                <WorkSpaces list={list}/>
            ))
        }
      </div>
      <div className="h-[10%]">
        <p>user info</p>
      </div>
      <footer className="flex h-[10%] justify-between">
        <p>exit</p>
        <p>darlogo</p>
      </footer>
    </aside>
  );
}

export default SideMenu;
