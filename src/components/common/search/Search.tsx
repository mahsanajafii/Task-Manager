import { CiSearch } from "react-icons/ci"

const Search = () => {
  return (
    <div className="flex justify-center divide-x-2 divide-gray-500 items-center w-fit cursor-pointer hover:text-btn-background hover:border-b-2 hover:border-btn-background active:text-red-500 p-4 gap-2 ">
        <CiSearch size={24}/>
        <input placeholder="جستجو بین تسک‌ها" className=" text-xl"></input>

    </div>
  )
}

export default Search