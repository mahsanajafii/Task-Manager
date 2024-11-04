import { FaRegPlusSquare } from "react-icons/fa"
import Button from "../common/button/Button"
interface IColumnMoreProps{
    title:string,
}
const ColumnMore:React.FC<IColumnMoreProps> = ({title}) => {
  return (
    <div className="h-fit w-fit pl-4 top-0 left-[-50px] absolute bg-yellow-300 z-10 rounded-xl pt-5 gap-3 flex flex-col justify-start items-start ">

    {title==="task"?(
        <>
        <p className="flex justify-start gap-2 items-center">
            <FaRegPlusSquare />
            <span>ساختن پروژه جدید</span>
        </p>
        <p className="flex justify-start gap-2 items-center">
        <FaRegPlusSquare />
        <span>ویرایش نام ورک‌اسپیس</span>
    </p>
    <p className="flex justify-start gap-2 items-center">
        <FaRegPlusSquare />
        <span>ویرایش رنگ</span>
    </p>
    <p className="flex justify-start gap-2 items-center">
        <FaRegPlusSquare />
        <span>کپی لینک</span>
    </p>
    <p className="flex justify-start text-red-400 gap-2 items-center">
        <FaRegPlusSquare />
        <span>حذف</span>
    </p>
    <Button children={"اشتراک‌گذاری"} style="h-fit"/>
        </>
    
        
):(<p>jdhfj</p>)}
    </div>
  )
}

export default ColumnMore