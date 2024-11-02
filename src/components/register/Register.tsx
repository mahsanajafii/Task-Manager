import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Header from "../common/header/Header";
const Register = () => {
  const navigate=useNavigate();
  const handelClick = () => {
    navigate("/login")
  };
  return (
    <>
      <main className="  w-full flex h-screen flex-col min-w-[800px] justify-between items-center ">
      <Header text={"قبلا ثبت نام کردی؟"} btntitle={"ورود"} handelClick={handelClick}/>


        <Card style="w-[540px] h-[540px] mb-20">
          <p className="text-2xl font-bold">ثبت‌نام در تسک منیجر </p>
          <label htmlFor="username" className="block w-2/3 text-start">
            نام کاربری:
          </label>
          <input
            id="username"
            type="text"
            className="w-2/3 h-10 rounded-xl"
          ></input>
          <label htmlFor="email" className="block w-2/3 text-start">
            ایمیل:
          </label>
          <input
            id="email"
            type="email"
            className="w-2/3 h-10 rounded-xl"
          ></input>
          <label htmlFor="password" className="block w-2/3 text-start">
            رمز عبور:
          </label>
          <input
            id="password"
            type="password"
            className="w-2/3 h-10 rounded-xl"
          ></input>
          <span className="flex gap-2 w-2/3">
            <input type="checkbox" />
            <NavLink to="/conditions" className="underline"> قوانین و مقررات را می‌پذیرم.</NavLink>
          </span>

          <span className=" w-1/3 m-2 ">
            <Button onClick={handelClick}>ثبت‌نام</Button>
          </span>
        </Card>
      </main>
    </>
  );
};

export default Register;
