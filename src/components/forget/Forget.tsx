import { useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import Card from "../common/card/Card";
import { useState } from "react";
import Header from "../common/header/Header";

const Forget: React.FC = () => {
  const [step, setStep] = useState(1);
  const Navigate = useNavigate();
  const handelLoginClick = () => {
    Navigate("/login");
  };
  const handelEmailClick = () => {
    setStep(2);
  };
  return (
    <>
      <main className="  w-full flex h-screen flex-col min-w-[800px] justify-between items-center ">
        <Header
          text={"قبلا ثبت نام کردی؟"}
          btntitle={"ورود"}
          handelClick={handelLoginClick}
        />

        {step === 1 ? (
          <Card style="w-[540px] h-[540px] mb-20">
            <p className="text-2xl font-bold">فراموشی رمز عبور</p>
            <label htmlFor="email" className="block w-2/3 text-start">
              ایمیل خود را وارد کنید:
            </label>
            <input
              id="email"
              type="email"
              className="w-2/3 h-10 rounded-xl"
            ></input>

            <span className=" w-2/3 m-2 ">
              <Button onClick={handelEmailClick}>
                دریافت ایمیل بازیابی رمز عبور
              </Button>
            </span>
          </Card>
        ) : (
          <p>msdvnl</p>
        )}
      </main>
    </>
  );
};

export default Forget;
