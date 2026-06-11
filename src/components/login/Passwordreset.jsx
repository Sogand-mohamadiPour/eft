import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import Otpreset from "./Otpreset.jsx";
import Inputsample from "./Inputsample.jsx";

function Passwordreset() {
  const [mobile, setMobile] = useState("");
  const [otpRequestCount, setOtpRequestCount] = useState(0);

  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround}  h-screen lg:h-screen py-10 px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full sm:w-[80%] md:w-[70%] lg:w-[35%] mx-auto bg-[#100034] h-165 rounded-3xl text-center`}
      >
        <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />
        <p className="text-xl  mt-2 mb-8">
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
          ادامه
        </button>
      </div>
      <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-1.5 mx-auto mt-12 ">
        <div className={`${styles.login} w-full rounded mx-1 bg-[#8B5CF6]`} />
        <div className="w-full rounded mx-1 bg-[#9E9E9E]"></div>
      </div>
    </div>
  );
}

export default Passwordreset;
