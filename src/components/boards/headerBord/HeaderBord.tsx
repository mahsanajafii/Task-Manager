import { MdChecklistRtl } from "react-icons/md";
import { BsColumnsGap } from "react-icons/bs";
import { IoCalendarOutline, IoShareSocialOutline } from "react-icons/io5";

interface IHeaderBord{
  handelActiveComponent:(title:string)=>void,
}
const HeaderBord:React.FC<IHeaderBord>=({handelActiveComponent})=> {
  
  return (
    <header className="border-b-2 text-sm border-gray-200 fixed top-0 left-0 w-[78%] h-[8%] flex flex-row px-2 justify-between items-center">
      <div className="flex justify-start gap-6 items-center  w-1/2 h-1/2 ">
        {/* <h1>{titleboard}</h1> */}
        <div className="flex justify-center items-center divide-x-2 divide-gray-500 w-fit ">
          <h1>first project</h1>
        </div>
        <div  onClick={()=>handelActiveComponent("list")} className="flex justify-center items-center w-fit cursor-pointer divide-x-2 divide-gray-500 hover:text-btn-background hover:border-b-2 hover:border-btn-background  select-text  gap-2 ">
          <MdChecklistRtl />
          <p>نمایش لیستی</p>
        </div>
        <div onClick={()=>handelActiveComponent("column")} className="flex justify-center items-center w-fit cursor-pointer divide-x-2 divide-gray-500 hover:text-btn-background hover:border-b-2 hover:border-btn-background active:text-red-500  gap-2 ">
          <BsColumnsGap />
          <p>نمایش ستونی</p>
        </div>
        <div onClick={()=>handelActiveComponent("calendar")} className="flex justify-center items-center w-fit cursor-pointer divide-x-2 divide-gray-500 hover:text-btn-background hover:border-b-2 hover:border-btn-background active:text-red-500  gap-2 ">
          <IoCalendarOutline />
          <p>تقویم </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-fit cursor-pointer hover:text-btn-background hover:border-b-2 hover:border-btn-background active:text-red-500 p-4 gap-2 ">
        <IoShareSocialOutline />
        <p>اشتراک گذاری </p>
      </div>
    </header>
  );
}

export default HeaderBord;
