import { FaRegPlusSquare } from "react-icons/fa";
import Button from "../common/button/Button";
import { FiEdit } from "react-icons/fi";
import { GoLink } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineColorLens } from "react-icons/md";
interface IColumnMoreProps {
  title: string;
  ID:number;
}
const ColumnMore: React.FC<IColumnMoreProps> = ( {data} ) => {
  const taskList = [
    { title: "ساختن تسک جدید", logo: <FaRegPlusSquare /> },
    { title: "ویرایش نام پروژه", logo: <FiEdit /> },
    { title: "کپی لینک", logo: <GoLink /> },
    { title: "حذف", logo: <RiDeleteBinLine /> },
  ];
  const projectList = [
    { title: "ساختن پروژه جدید", logo: <FaRegPlusSquare /> },
    { title: "ویرایش نام ورک‌اسپیس", logo: <FiEdit /> },
    { title: "ویرایش رنگ", logo:<MdOutlineColorLens />},
    { title: "کپی لینک", logo: <GoLink /> },
    { title: "حذف", logo: <RiDeleteBinLine /> },
  ];

  return (
    <div className={` pl-4 top-1 left-[-210px] absolute px-2 bg-gray-100 z-10 rounded-xl pt-5 gap-5 flex flex-col justify-start items-start `}>
      {data.title === "task" ? (
          <>
          {taskList.map((item, index) => (
            <p
              key={index}
              className={`${item.title === "حذف" && "text-red-400"} cursor-pointer flex justify-start gap-2 items-center`}
            >
              {item.logo}
              <span>{item.title}</span>
            </p>
          ))}
          <Button children={"اشتراک‌گذاری"} style="h-fit py-1" />
        </>
      ) : (
        // <div className={`${data.ID!==0 ? "h-fit":"h-0"}overflow-hidden transition-height duration-700 ease-in-out `}>
<>
          {projectList.map((item, index) => (
              <p
              key={index}
              className={`${item.title === "حذف" && "text-red-400"} cursor-pointer flex justify-start gap-2 items-center`}
              >
              {item.logo}
              <span>{item.title}</span>
            </p>
          ))}
          <Button children={" اشتراک‌گذاری"} style="h-fit py-1" />
          </>
        )}
        </div>
  );
};

export default ColumnMore;
