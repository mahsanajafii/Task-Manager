import { TbFilterHeart } from "react-icons/tb"

const Filter = () => {
  return (
    <div className=" divide-x-2 divide-gray-500 flex justify-center items-center w-fit cursor-pointer hover:text-btn-background hover:border-b-2 hover:border-btn-background active:text-red-500 p-4 gap-2 ">
        <TbFilterHeart />
        <p>فیلترها</p>

    </div>
  )
}

export default Filter