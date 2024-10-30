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
      <main className="  w-full flex h-screen flex-col justify-center items-center ">
        <header className="flex flex-row justify-between items-center p-2 h-24 top-32 w-full ">
          <div className="flex pr-5 flex-row justify-start items-center   w-fit gap-3 ">
            <img src={logo} alt="logo" className="w-14 h-14"></img>
            <p className="text-4xl w-full font-bold">تسک منیجر</p>
          </div>
          <div className="flex flex-row justify-canter items-center   gap-3  ">
            <p className="w-1/2">ثبت نام کردی؟</p>
            <span className="w-1/2 ml-3">
              <Button style="animate-pulse" onClick={handelClick}>ثبت نام</Button>
            </span>
          </div>
        </header>
          <Card>
            <p>به کوئرا تسک منیجر خوش برگشتی :) </p>
            <input></input>
            <input></input>
            <NavLink to="">رمز عبور خود را فراموش کرده‌اید؟</NavLink>
            <div className="w-full">
              <p>
                ثبت‌نام نکرده‌ای؟
                <NavLink to="">ثبت‌نام</NavLink>
              </p>
              <span className="m-10">
                <Button onClick={handelClick}>ورود</Button>
              </span>
            </div>
          </Card>
       
      </main>
    </>
  );
};

export default Login;
