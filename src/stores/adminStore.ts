import { create } from "zustand";
interface IIsAdmin {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}
const adminStore = create<IIsAdmin>((set) => ({
  isAdmin: localStorage.getItem("isAdmin") === "true" ? true : false,
  setIsAdmin: (val: boolean) => {
    localStorage.setItem("isAdmin", String(val));
    set({ isAdmin: val });
  },
}));

export default adminStore;
