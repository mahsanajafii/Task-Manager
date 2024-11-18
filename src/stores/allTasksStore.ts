import { create } from "zustand";
import { IAllTasks, ITasks } from "../types/alltasksTypes";
const allworkspaces = [
  {
    id: ~(Date.now() + (Math.random() + 1) * 20),
    title: "ریکت",
    staus: "open",
    color: "ef4444",
    projectList: [
      {
        id: ~(Date.now() + (Math.random() + 1) * 20),
        projectTitle: "1فروشگاه",
        staus: "pending",

        tasks: [
          {
            taskID: ~(Date.now() + (Math.random() + 1) * 20),
            taskTitle: "صفحه لاگین",
            deadline: "new Date().toLocaleDateString('fa-IR')",
            users: ["admin"],
            status: "open",
            description: "first task",
            Priority: "1",
            archive: false,
          },
        ],
      },
    ],
    oner: "admin",
  },
  {
    id: ~(Date.now() + (Math.random() + 1) * 20),
    title: "تیلویند",
    staus: "open",
    color: "93c5fd",
    projectList: [
      {
        id: ~(Date.now() + (Math.random() + 1) * 20),
        projectTitle: "2فروشگاه",
        staus: "progress",

        tasks: [
          {
            taskID: ~(Date.now() + (Math.random() + 1) * 20),
            taskTitle: "صفحه رمز",
            deadline: "new Date().toLocaleDateString('fa-IR')",
            users: ["admin"],
            status: "pending",
            description: "two task",
            Priority: "1",
            archive: false,
          },
        ],
      },
    ],
    oner: "admin",
  },
];

const useAllTasksStore = create<IAllTasks>((set) => ({
  allWorkSpace: allworkspaces,
  addWorkSpace: (newValue: ITasks) =>
    set((state) => {
      const updatedValues = [...state.allWorkSpace, newValue]; // Add new value to the array
      localStorage.setItem("allWorkSpace", JSON.stringify(updatedValues)); // Save updated array to localStorage
      return { allWorkSpace: updatedValues }; // Update the state with the new array
    }),
  loadAllWorkSpace: () => {
    // const is:localStorage.getItem('allTasks')
    const storedValues = localStorage.getItem("allWorkSpace")
      ? JSON.parse(localStorage.getItem("allWorkSpace"))
      : allworkspaces;
    set({ allWorkSpace: storedValues }); // Load values from localStorage into state
  },
// allTasks:()=>{
//   const value = localStorage.getItem("allWorkSpace")?JSON.parse(localStorage.getItem("allWorkSpace")):allworkspaces,
// // value.map((val)=>(

// // ))

// }
}));


export default useAllTasksStore;

