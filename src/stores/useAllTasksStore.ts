import { create } from "zustand";
import { IWorkspaces, IWorkspace } from "../types/alltasksTypes";
import { v4 as uuidv4 } from "uuid";

const allworkspaces = [
  {
    workspacesId: uuidv4(),
    workspacesTitle: "ریکت",
    staus: "Open",
    color: "ef4444",
    projectList: [
      {
        projectId: uuidv4(),
        projectTitle: "1فروشگاه",
        staus: "Open",

        tasks: [
          {
            taskID: uuidv4(),
            taskTitle: "صفحه لاگین",
            deadline: new Date().toLocaleDateString("fa-IR"),
            createdAt: new Date().toLocaleDateString("fa-IR"),
            users: ["admin"],
            status: "Open",
            description: "first task",
            priority: "emergency",
            archive: false,
          },
        ],
      },
    ],
    oner: "admin",
  },
  {
    workspacesId: uuidv4(),
    workspacesTitle: "تیلویند",
    staus: "open",
    color: "93c5fd",
    projectList: [
      {
        projectId: uuidv4(),
        projectTitle: "2فروشگاه",
        staus: "Pending",

        tasks: [
          {
            taskID: uuidv4(),
            taskTitle: "صفحه رمز",
            deadline: new Date().toLocaleDateString("fa-IR"),
            createdAt: new Date().toLocaleDateString("fa-IR"),
            users: ["admin"],
            status: "Pending",
            description: "two task",
            priority: "low",
            archive: false,
          },
        ],
      },
    ],
    oner: "admin",
  },
];

const useAllTasksStore = create<IWorkspaces>((set) => ({
  allWorkSpace: [],
  addWorkSpace: (newValue: IWorkspace) =>
    set((state) => {
      const updatedValues = [...state.allWorkSpace, newValue];
      localStorage.setItem("allWorkSpace", JSON.stringify(updatedValues));
      return { allWorkSpace: updatedValues };
    }),
  loadAllWorkSpace: () => {
    const storedValues = localStorage.getItem("allWorkSpace")
      ? JSON.parse(localStorage.getItem("allWorkSpace") as string)
      : allworkspaces;
    set({ allWorkSpace: storedValues });
  },
  allTasks: () => {
    const value = localStorage.getItem("allWorkSpace")
      ? JSON.parse(localStorage.getItem("allWorkSpace") as string)
      : allworkspaces;
    const allTasks = value.flatMap((workspace: IWorkspace) =>
      workspace.projectList?.flatMap((project) =>
        project.tasks?.map((task) => ({
          workspaceId: workspace.workspacesId,
          workspacesTitle: workspace.workspacesTitle,
          projectId: project.projectId,
          projectTitle: project.projectTitle,
          taskId: task.taskID,
          taskTitle: task.taskTitle,
          deadline: task.deadline,
          createdAt: task.createdAt,
          users: task.users,
          status: task.status,
          description: task.description,
          priority: task.priority,
          archive: task.archive,
        }))
      )
    );
    // console.log("allTasks in use", allTasks);
    return allTasks;
  },
  allProjects: () => {
    const value = localStorage.getItem("allWorkSpace")
      ? JSON.parse(localStorage.getItem("allWorkSpace") as string)
      : allworkspaces;
    const allProjects = value.flatMap((workspace: IWorkspace) =>
      workspace.projectList?.flatMap((project) => ({
        workspaceId: workspace.workspacesId,
        workspacestitle: workspace.workspacesTitle,
        projectId: project.projectId,
        projectTitle: project.projectTitle,
        staus: project.staus,

        tasks: project.tasks,
      }))
    );
    // console.log("allProjects in use", allProjects);
    return allProjects;
  },
}));

export default useAllTasksStore;
