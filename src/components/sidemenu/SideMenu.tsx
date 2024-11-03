import logo from "../../assets/images/logo2.png"
function SideMenu() {
  return (
    <aside className="w-[22%] h-screen bg-yellow-400 fixed right-0 flex flex-col border-l-gray-700">
<div className="flex pr-5 flex-row justify-start items-center   w-fit gap-3 ">
        <img src={logo} alt="logo" className="w-14 h-14"></img>
        <p className="text-4xl w-full font-bold">تسک منیجر</p>
      </div>
      <div>
        <p>work space</p>
      </div>
      <div>
        <p>user info</p>
      </div>
      <footer className="flex justify-between">
        <p>exit</p>
        <p>darlogo</p>
      </footer>

    </aside>
  )
}

export default SideMenu