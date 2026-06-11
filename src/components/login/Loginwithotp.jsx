import styles from "./Login.module.css";
import Otpreset from "./Otpreset";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import Inputsample from "./Inputsample.jsx";

function Loginwithotp() {
  const [mobile, setMobile] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [otpRequestCount, setOtpRequestCount] = useState(0);
  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-full px-2 w-full flex items-center`}
    >
      <div
        className={`${styles.login} mx-auto w-full sm:w-[80%] md:w-[70%] lg:w-[40%] bg-[#100034] h-155 rounded-3xl text-center`}
      >
        <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />
        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="mobile"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
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
    </div>
  );
}

export default Loginwithotp;
