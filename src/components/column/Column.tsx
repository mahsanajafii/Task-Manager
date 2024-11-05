import { FaRegPlusSquare } from "react-icons/fa";

interface IColumnProps {
  title: string;
  color: string;
}
const Column: React.FC<IColumnProps> = ({ item }) => {
  return (
    <div
      className={` p-4 flex items-center justify-between h-10 text-center border border-t-4 border-solid border-${item.color} rounded-3xl  w-full`}
    >
      <p>{item.title}</p>
      <FaRegPlusSquare />
    </div>
  );
};

export default Column;
