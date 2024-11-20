import { IoRefreshOutline } from "react-icons/io5";
import Filter from "../common/filter/Filter";
import Search from "../common/search/Search";

const SearchAndFilter = () => {
  const handelRefreshClick = () => {
    console.log("object");
  };
  return (
    <section className="border-b-2 border-gray-200 fixed p-2 top-[8%] left-0 w-[78%] h-[8%] flex flex-row  justify-between items-center text-xs">
      <div className="flex justify-center items-center gap-2">
        <Search />
        <Filter />
      </div>
      <button
        onClick={handelRefreshClick}
        className="border rounded-full p-2 hover:bg-btn-background border-black"
      >
        <p className="flex gap-1 items-center">
          <IoRefreshOutline />
          بازگردانی تسک های آرشیو شده
        </p>
      </button>
    </section>
  );
};

export default SearchAndFilter;
