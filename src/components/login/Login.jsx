import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Inputsample from "./Inputsample.jsx";
import Input from "./Input.jsx";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} flex justify-center items-center h-screen lg:h-full px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full sm:w-[80%] md:w-[70%] lg:w-[40%] bg-[#100034] h-max rounded-3xl text-center`}
      >
        <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />

        <p className="text-3xl mt-2">
          سلام، <span className="text-[#F3B961]">خوش برگشتی!</span>
        </p>

        <span className="text-sm">
          با ادامه مسیر فقط یک قدم فاصله داری
        </span>

        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="mobile"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <Input />

        <div className="flex justify-around mt-5">
          <div className="flex">
            <p className="text-sm pl-2">من رو به خاطر بسپار</p>
            <input type="checkbox" className="cursor-pointer w-5 h-5" />
          </div>

          <p
            onClick={() => navigate("/Passwordreset")}
            style={{ cursor: "pointer", color: "white" }}
          >
            رمز عبور را فراموش کردید؟
          </p>
        </div>

        <button
          type="submit"
          className="bg-[linear-gradient(90deg,rgba(106,4,202,1)_0%,rgba(112,25,202,1)_33%,rgba(91,39,178,1)_66%,rgba(86,84,131,1))]
          text[rgba(255,255,255,1)]
          rounded-3xl
          cursor-pointer
          px-6
          w-[80%]
          h-14
          mt-5
          py-2"
        >
          ورود به حساب
        </button>

        <p className="mt-2">یا</p>

        <button
          onClick={() => navigate("/Loginwithotp")}
          className="bg-[linear-gradient(90deg,#2A005F_0%,#30086A_35%,#2D0E62_65%,#25184D_100%)]
          text[rgba(255,255,255,1)]
          rounded-3xl
          cursor-pointer
          px-6
          w-[80%]
          h-14
          mt-2
          py-2"
        >
          ورود با کد تایید
        </button>

        <p className="text-[#FFFFFF] text-sm mt-4 pb-6">
          حساب کاربری ندارید؟{" "}
          <span
            className="text-[#F3B961] cursor-pointer"
            onClick={() => navigate("/Signup")}
          >
            ثبت نام کنید
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
