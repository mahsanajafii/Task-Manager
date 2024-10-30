import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
const Register = () => {
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
          <div className="flex flex-row justify-canter items-center gap-3">
            <p className="w-2/3">قبلا ثبت نام کردی؟ </p>
            <span className="w-1/3  ml-3">
              <Button style="animate-pulse" onClick={handelClick}>
                ورود
              </Button>
            </span>
          </div>
        </header>

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
            <NavLink to=""> قوانین و مقررات را می‌پذیرم.</NavLink>
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