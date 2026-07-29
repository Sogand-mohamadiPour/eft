import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import Otpreset from "./Otpreset.jsx";
import Inputsample from "./Inputsample.jsx";
import LoginLogo from "./shared/LoginLogo";
import SignupProgress from "./shared/SignupProgress";
import { primaryButtonClass } from "./shared/loginClasses";

function Passwordreset() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otpRequestCount] = useState(0);

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-screen py-10 px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full sm:w-[80%] md:w-[70%] lg:w-[35%] mx-auto bg-(--login-box) h-165 rounded-3xl text-center`}
      >
        <LoginLogo />

        <p className="text-xl mt-5 mb-8">
          بازیابی <span className="text-[#7D20D5]">رمز عبور</span>
        </p>

        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="mobile"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <Otpreset mobile={mobile} otpRequestCount={otpRequestCount} />

        <button
          onClick={() => navigate("/Changepass")}
          type="button"
          className={`${primaryButtonClass} w-[70%] mt-12`}
        >
          ادامه
        </button>
      </div>

      <SignupProgress
        stepOneClass="bg-(--login-border)"
        stepTwoClass="bg-[#9E9E9E]"
      />
    </div>
  );
}

export default Passwordreset;
