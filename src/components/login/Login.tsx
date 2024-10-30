import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
const Login = () => {
  const handelClick = () => {
    console.log(handelClick);
  };
  return (
    <>
      <main className="  w-full flex h-screen flex-col min-w-[800px] justify-between items-center ">
        <header className="flex flex-row justify-between items-center p-2 h-24 top-32 w-full ">
          <div className="flex pr-5 flex-row justify-start items-center   w-fit gap-3 ">
            <img src={logo} alt="logo" className="w-14 h-14"></img>
            <p className="text-4xl w-full font-bold">تسک منیجر</p>
          </div>
          <div className="flex flex-row justify-canter items-center   gap-3  ">
            <p className="w-1/2">ثبت نام کردی؟</p>
            <span className="w-1/2  ml-3">
              <Button style="animate-pulse" onClick={handelClick}>
                ثبت نام
              </Button>
            </span>
          </div>
        </header>
        <div className="flex flex-row justify-center items-end mb-20">
          <div className=" flex flex-col ">
            <Card style="w-40 h-40  ml-20 bg-pending">
              <NavLink to="">فراموشی رمز عبور</NavLink>
            </Card>
            <Card style="w-20 h-20 mr-24 bg-btn-background">
              <NavLink to="">ثبت‌نام</NavLink>
            </Card>
          </div>
          <Card style="w-[540px] h-[540px]">
            <p className="text-2xl font-bold">به تسک منیجر خوش برگشتی :) </p>
            <label htmlFor="username" className="block w-2/3 text-start">
              نام کاربری:
            </label>
            <input id="username" className="w-2/3 h-10 rounded-xl"></input>
            <label htmlFor="password" className="block w-2/3 text-start">
              رمز عبور:
            </label>
            <input id="password" className="w-2/3 h-10 rounded-xl"></input>

            <span className=" w-1/3 m-2">
              <Button onClick={handelClick}>ورود</Button>
            </span>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Login;
