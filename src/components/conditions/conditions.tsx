import { NavLink } from "react-router-dom";
import Card from "../common/card/Card";
import Header from "../common/header/Header";

const Conditions = () => {
  return (
    <main className="  w-full flex h-screen flex-col min-w-[800px] justify-between items-center ">
      <Header text={"قبلا ثبت نام کردی؟"} btntitle={"ورود"} />
      <div className=" flex justify-center items-end ">
        <Card style="w-40 h-40 mb-10 ml-20 bg-pending px-2 text-center ">
          <NavLink to="/register">بازگشت به فرم ثبت‌نام</NavLink>
        </Card>

        <Card style={"w-[540px] h-[540px] mb-20 z-50"}>
          <h1 className="text-3xl pt-10 text-btn-background">
            قوانین و مقررات
          </h1>
          <div className="w-3/4  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent px-12 py-16 mb-16  flex flex-col justify-center items-center text-center overflow-y-auto">
            **قوانین و مقررات استفاده از تسک منیجر**
            <br />
            <span className="hover:text-btn-background hover:text-xl">
              1. ثبت‌نام باید با اطلاعات صحیح و دقیق انجام شود و کاربران ملزم به
              حفظ حریم خصوصی خود هستند.
              <br />
            </span>
            <br />
            <span className="hover:text-btn-background hover:text-xl">
              2. استفاده مسئولانه از خدمات الزامی است و هرگونه رفتار ناپسند
              ممنوع می‌باشد.
              <br />
            </span>
            <br />
            <span className="hover:text-btn-background hover:text-xl">
              3. کاربران باید به حقوق مالکیت معنوی دیگران احترام بگذارند و از
              محتوای غیرمجاز استفاده نکنند.
              <br />
            </span>
            <br />
            <span className="hover:text-btn-background hover:text-xl">
              4. تیم پشتیبانی آماده ارائه خدمات و پاسخگویی به سوالات شماست.
              <br />
            </span>
            <br />
            <span className="hover:text-btn-background hover:text-xl">
              5. حق تغییر در قوانین و مقررات بدون اطلاع قبلی محفوظ است و کاربران
              موظفند به‌طور منظم آن‌ها را بررسی کنند.
              <br />
            </span>
          </div>
        </Card>
      </div>
    </main>
  );
};
export default Conditions;
