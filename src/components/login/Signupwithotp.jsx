import styles from "./Login.module.css";
import Otpreset from "./Otpreset";
import { useState } from "react";

function Signupwithotp() {
  const [otpRequestCount, setOtpRequestCount] = useState(0);
  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-full px-2 py-12 w-full`}
    >
      <div
        className={`${styles.login} mx-auto pt-8 w-full sm:w-[80%] md:w-[70%] lg:w-[40%] bg-[#100034] h-155 rounded-3xl text-center`}
      >
        <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />
        <Otpreset otpRequestCount={otpRequestCount} />
        <button
          type="button"
          className="bg-[linear-gradient(90deg,rgba(106,4,202,1)_0%,rgba(112,25,202,1)_33%,rgba(91,39,178,1)_66%,rgba(86,84,131,1))]
                text[rgba(255,255,255,1)]
                rounded-3xl
                cursor-pointer
                px-6
                w-[70%]
                h-14
                mt-12
                py-2 "
        >
          ورود به حساب
        </button>
      </div>
      <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-1.5 mx-auto mt-12 ">
        <div className={`${styles.login} w-full rounded mx-1 bg-[#8B5CF6]`} />
        <div
          className={`${styles.login} w-full rounded mx-1 bg-[#8B5CF6]`}
        ></div>
      </div>
    </div>
  );
}

export default Signupwithotp;
