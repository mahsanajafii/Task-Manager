import { create } from "zustand";
import { IAllTasks, ITasks } from "../types/alltasks";
const allworkspaces = [
    {
      id: ~(Date.now() + (Math.random()+1)*20),
      title: "ریکت",
      staus: "open",
      color: "#ef4444",
      projectList: [
        {
          id: ~(Date.now() + (Math.random()+1)*20),
          projettitle: "فروشگاه",
          tasks: [
            {
              taskID: ~(Date.now() + (Math.random()+1)*20),
              tasktitle: "صفحه لاگین",
              deadline: "new Date().toLocaleDateString('fa-IR')",
              users: ["admin"],
              status: "open",
              description: "first task",
              Priority:"1",
              archive:false,
            },
          ],
        },
      ],
      oner: "admin",
    },
    {
        id: ~(Date.now() + (Math.random()+1)*20),
        title: "تیلویند",
        staus: "open",
        color: "#93c5fd",
        projectList: [
          {
            id: ~(Date.now() + (Math.random()+1)*20),
            projettitle: "فروشگاه",
            tasks: [
              {
                taskID: ~(Date.now() + (Math.random()+1)*20),
                tasktitle: "صفحه رمز",
                deadline: "new Date().toLocaleDateString('fa-IR')",
                users: ["admin"],
                status: "pending",
                description: "two task",
                Priority:"1",
                archive:false,
              },
            ],
          },
        ],
        oner: "admin",
      }
  ];

const useAllTasksStore = create<IAllTasks>((set) => ({
    allTasks:allworkspaces,
    addTask: (newValue:ITasks) => set((state) => {  
      const updatedValues = [...state.allTasks, newValue]; // Add new value to the array  
      localStorage.setItem('allTasks', JSON.stringify(updatedValues)); // Save updated array to localStorage  
      return { allTasks: updatedValues }; // Update the state with the new array  
    }),  
    loadAllTasks: () => { 
        // const is:localStorage.getItem('allTasks') 
      const storedValues = localStorage.getItem('allTasks')?JSON.parse(localStorage.getItem('allTasks')): allworkspaces;  
      set({ allTasks: storedValues }); // Load values from localStorage into state  
    }  
  })); 

export default useAllTasksStore;
