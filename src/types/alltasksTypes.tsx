export interface IWorkspace{
    workspacesId: string,
    workspacesTitle: string,
      staus: string,
      color:string
      projectList?: [
          {
            projectId:string,
              projectTitle: string,
              staus: string,

          tasks?: [
            {
                taskID:string,
                taskTitle: string,
                deadline:string,
                createdAt:string,
                users: string[],
                status:string,
                description:string,
                priority:"low"|"high"|"emergency"|"intermediate",
                archive:boolean,
            },
        ],
    },
],
oner:string,
}
export interface IWorkspaces{
    allWorkSpace:IWorkspace[] ,
    addWorkSpace:(WorkSpace:IWorkspace)=>void ,
    loadAllWorkSpace:()=>void,
    allProjects:()=>void,
    allTasks:()=>void,

}
export interface ITask{
    
        workspaceId:string,
        workspacesTitle:string,
        projectId:string ,
        projectTitle:string ,
        taskId: string,
        taskTitle: string,
        deadline:string ,
        createdAt:string ,
        users:string[] ,
        status:string ,
        description: string,
        priority: "low"|"high"|"emergency"|"intermediate",
        archive:boolean,
      

}