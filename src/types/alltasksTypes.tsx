export interface ITasks{
      id: number,
      title: string,
      staus: string,
      color:string
      projectList?: [
          {
              id:number,
              projectTitle: string,
              staus: string,

          tasks?: [
            {
                taskID:number,
                taskTitle: string,
                deadline:string,
                users: string[],
                status:string,
                description:string,
                Priority:string,
                archive:boolean,
            },
        ],
    },
],
oner:string,
}
export interface IAllTasks{
    allTasks:ITasks[] ,
    addTask:(task:ITasks)=>void ,
    loadAllTasks:()=>void

}