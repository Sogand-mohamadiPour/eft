import styles from "./Login.module.css";
import Otpreset from "./Otpreset";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import Inputsample from "./Inputsample.jsx";
import LoginLogo from "./shared/LoginLogo";
import { primaryButtonClass } from "./shared/loginClasses";

function Loginwithotp() {
  const [mobile, setMobile] = useState("");
  const [otpRequestCount] = useState(0);

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-full px-2 w-full flex items-center`}
    >
      <div
        className={`${styles.login} mx-auto w-full sm:w-[80%] md:w-[70%] lg:w-[40%] bg-(--login-box) h-165 rounded-3xl text-center`}
      >
        <LoginLogo className="w-1/4 mx-auto mt-3 mb-15" />

        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="mobile"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <Otpreset otpRequestCount={otpRequestCount} />

        <button type="button" className={`${primaryButtonClass} w-[70%] mt-12`}>
          ورود به حساب
        </button>
      </div>
    </div>
  );
}

export default Loginwithotp;
