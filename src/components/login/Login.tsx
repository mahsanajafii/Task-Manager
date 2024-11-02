import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import Header from "../common/header/Header";
const Login = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/register");
  };
  return (
    <>
      <main className="  w-full flex h-screen flex-col min-w-[800px] justify-between items-center ">
        <Header
          text={"ثبت نام کردی؟"}
          btntitle={"ثبت‌نام"}
          handelClick={handelClick}
        />

        <div className="flex flex-row justify-center items-end mb-20">
          <div className=" flex flex-col ">
            <Card style="w-40 h-40  ml-20 bg-pending">
              <NavLink to="/forget">فراموشی رمز عبور</NavLink>
            </Card>
            <Card style="w-20 h-20 mr-24 bg-btn-background">
              <NavLink to="/register">ثبت‌نام</NavLink>
            </Card>
          </div>
          <Card style="w-[540px] h-[540px]">
            <p className="text-2xl font-bold">به تسک منیجر خوش برگشتی :) </p>
            <label htmlFor="username" className="block w-2/3 text-start">
              نام کاربری:
            </label>
            <input
              id="username"
              type="text"
              className="w-2/3 px-4 h-10 rounded-xl"
            ></input>
            <label htmlFor="password" className="block w-2/3 text-start">
              رمز عبور:
            </label>
            <input
              id="password"
              type="password"
              className="w-2/3 px-4 h-10 rounded-xl"
            ></input>

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
