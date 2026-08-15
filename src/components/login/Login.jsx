import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Inputsample from "./Inputsample.jsx";
import Input from "./Input.jsx";
import LoginLogo from "./shared/LoginLogo";
import { primaryButtonClass } from "./shared/loginClasses";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import { loginUser } from "../../rest/auth";

import { useAuth } from "../../auth/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      const data = await loginUser({
        phone: mobile,
        password,
      });

      console.log("SUCCESS:", data);

      login({
        access: data.access,
        refresh: data.refresh,
        name: data.name,
      });

      navigate("/dashboard");
    } catch (error) {
      setError(error?.message || "Login failed");
      console.error(error);
    }
  };

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} flex justify-center items-center h-screen px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full mt-10 sm:w-[80%] md:w-[70%] lg:w-[40%] bg-(--login-box) rounded-3xl text-center`}
      >
        <LoginLogo />

        <p className="text-3xl mt-2">
          سلام، <span className="text-[#F3B961]">خوش برگشتی!</span>
        </p>

        <span className="text-sm">با ادامه مسیر فقط یک قدم فاصله داری</span>

        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="phone"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <Input password={password} setPassword={setPassword} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex justify-around mt-2">
          <div className="flex">
            <p className="text-sm pl-2">من رو به خاطر بسپار</p>
            <input type="checkbox" className="cursor-pointer w-5 h-5" />
          </div>

          <p
            onClick={() => navigate("/Passwordreset")}
            className="cursor-pointer"
          >
            رمز عبور را فراموش کردید؟
          </p>
        </div>

        <button
          onClick={handleLogin}
          type="submit"
          className={`${primaryButtonClass} w-[80%] mt-2`}
        >
          ورود به حساب
        </button>

        <p className="mt-1">یا</p>

        <button
          onClick={() => navigate("/Loginwithotp")}
          className="bg-(image:--otp-button) rounded-3xl cursor-pointer px-6 w-[80%] h-14 mt-2 py-2"
        >
          ورود با کد تایید
        </button>

        <p className="text-sm mt-2 pb-6">
          حساب کاربری ندارید؟{" "}
          <span
            className="text-[#cc7f0a] cursor-pointer"
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
