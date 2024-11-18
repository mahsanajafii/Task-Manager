import { create } from "zustand";
interface IActiveComponent{
    activeComponent:string,
    setActiveComponent:(activeComponent:string)=>void,

}

const activeComponentStore =create<IActiveComponent>((set) =>({
    activeComponent:"column",
    setActiveComponent:(val:string)=>{
        set({ activeComponent: val });

    }
     
}))

export default activeComponentStore