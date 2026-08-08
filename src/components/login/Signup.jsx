<<<<<<< HEAD
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import { useState } from "react";
import Inputsample from "./Inputsample";
import LoginLogo from "./shared/LoginLogo";
import PasswordField from "./shared/PasswordField";
import PasswordRulesList from "./shared/PasswordRulesList";
import SignupProgress from "./shared/SignupProgress";
import {
  primaryButtonClass,
  primaryButtonDisabledClass,
} from "./shared/loginClasses";
import { registerUser, requestOtp } from "../../rest/auth";
import { saveSignupOtp } from "../../utils/signupOtpStorage";
import { getPasswordRules, isValidEmail } from "../../utils/validation";

function Signup() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordRules = getPasswordRules(password, confirmPassword);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(value && !isValidEmail(value) ? "ایمیل معتبر نیست" : "");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!mobile || !email || !username || !password || !confirmPassword) {
      setError("لطفا تمام فیلدها را کامل کنید.");
      return;
    }

    try {
      setIsSubmitting(true);

      await registerUser({
        name: username,
        email,
        phone: mobile,
        password,
        password_confirm: confirmPassword,
      });

      const otpData = await requestOtp(mobile);
      const tempToken = otpData?.temp_token;

      if (!tempToken) {
        setError("کد تایید ارسال شد اما توکن تایید دریافت نشد. دوباره تلاش کنید.");
        return;
      }

      saveSignupOtp({ phone: mobile, tempToken });

      navigate("/Signupwithotp", {
        state: { phone: mobile, tempToken },
      });
    } catch (err) {
      console.error(err);
      setError(err?.message || "ثبت نام انجام نشد. دوباره تلاش کنید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-screen py-10 px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full sm:w-[80%] md:w-[70%] lg:w-[35%] mx-auto bg-(--login-box) h-max rounded-3xl text-center`}
      >
        <LoginLogo className="w-1/4 mx-auto mt-3 mb-3" />

        <p className="text-xl text-[#7D20D5]">
          حساب کاربری <span className="text-(--text)">خود را ایجاد کنید</span>
        </p>

        <Inputsample
          icon={<FaUser />}
          placeholder="نام و نام خانوادگی"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Inputsample
          icon={<FaEnvelope />}
          placeholder="ایمیل"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        {error && <p className="text-red-500">{error}</p>}

        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="mobile"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <form action="#">
          <PasswordField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمز عبور"
            showPassword={showPassword}
            onToggleVisibility={() => setShowPassword(!showPassword)}
          />

          <PasswordField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="تکرار رمز عبور"
            showPassword={showConfirm}
            onToggleVisibility={() => setShowConfirm(!showConfirm)}
          />

          <PasswordRulesList rules={passwordRules} />

          <button
            type="button"
            onClick={handleSignup}
            disabled={!passwordRules.isValid || isSubmitting}
            className={`w-[80%] mt-3 mb-5 ${
              passwordRules.isValid && !isSubmitting
                ? primaryButtonClass
                : primaryButtonDisabledClass
            }`}
          >
            {isSubmitting ? "در حال ارسال..." : "ادامه"}
          </button>
        </form>
      </div>

      <SignupProgress
        stepOneClass="bg-(--login-border)"
        stepTwoClass="bg-[#9E9E9E]"
      />
    </div>
  );
}

export default Signup;
=======
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaMobileAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheck,
} from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { useState } from "react";
import Inputsample from "./Inputsample";

function Signup() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("ایمیل معتبر نیست");
    } else {
      setError("");
    }
  };

  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasLength = password.length >= 8;

  const isMatch = confirmPassword.length > 0 && password === confirmPassword;
  const isValid = hasLetter && hasNumber && hasSymbol && hasLength && isMatch;

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://10.15.91.21:8000/users/api/auth/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: username,
            email,
            phone: mobile,
            password,
            password_confirm: confirmPassword,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        throw new Error("Registration failed");
      }

      console.log("REGISTER RESPONSE:", data);

      navigate("/Signupwithotp", {
        state: {
          phone: data.phone,
          tempToken: data.temp_token,
        },
      });

      sessionStorage.setItem("tempToken", data.temp_token);
      sessionStorage.setItem("phone", data.phone);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-screen py-10 px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full sm:w-[80%] md:w-[70%] lg:w-[35%] mx-auto bg-[#100034] h-max rounded-3xl text-center`}
      >
        <img className="w-1/4 mx-auto mt-3 mb-3" src="assets/logo_login.png" alt="logo" />
        <p className="text-xl text-[#7D20D5]">
          حساب کاربری <span className="text-white">خود را ایجاد کنید</span>
        </p>
        <Inputsample
          icon={<FaUser />}
          placeholder="نام و نام خانوادگی"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Inputsample
          icon={<FaEnvelope />}
          placeholder="ایمیل"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Inputsample
          icon={<FaMobileAlt />}
          placeholder="شماره موبایل"
          name="mobile"
          maxLength={11}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <form action="#">
          <div className="relative mx-auto w-full sm:w-full lg:w-[80%] group">
            <FaLock className="icon absolute right-14 md:right-17 lg:right-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80] group-focus-within:text-white" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور"
              className="text-[#9E9E9E80] focus:text-white hover:border-white bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-2xl mt-4 text-start pl-12 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="icon absolute cursor-pointer hover:text-white left-14 md:left-17 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]  group-focus-within:text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative mx-auto w-full sm:w-full lg:w-[80%] group">
            <FaLock className="icon absolute right-14 md:right-17 lg:right-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80] group-focus-within:text-white" />
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="تکرار رمز عبور"
              className="text-[#9E9E9E80] focus:text-white hover:border-white bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-2xl mt-4 text-start pl-12 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="icon absolute cursor-pointer hover:text-white left-14 md:left-17 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]  group-focus-within:text-white"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <ul className="mx-auto w-[80%] p-5 space-y-3 text-right">
            <li className="flex items-center gap-2">
              {hasLetter ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <BsCircleFill className="text-[8px]" />
              )}
              <span>شامل حروف</span>
            </li>

            <li className="flex items-center gap-2">
              {hasNumber ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <BsCircleFill className="text-[8px]" />
              )}
              <span>شامل اعداد</span>
            </li>

            <li className="flex items-center gap-2">
              {hasSymbol ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <BsCircleFill className="text-[8px]" />
              )}
              <span>شامل علامت‌های ویژه</span>
            </li>

            <li className="flex items-center gap-2">
              {hasLength ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <BsCircleFill className="text-[8px]" />
              )}
              <span>حداقل ۸ کاراکتر</span>
            </li>

            <li className="flex items-center gap-2">
              {isMatch ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <BsCircleFill className="text-[8px]" />
              )}
              <span>یکسان بودن رمزها</span>
            </li>
          </ul>

          <button
            onClick={() => navigate("/Signupwithotp")}
            disabled={!isValid}
            className={`text-white    rounded-3xl
                       cursor-pointer
                       px-6
                       w-[80%]
                       h-14
                       mt-3
                       mb-5
                       py-2 " ${
                         isValid
                           ? "bg-[linear-gradient(90deg,rgba(106,4,202,1)_0%,rgba(112,25,202,1)_33%,rgba(91,39,178,1)_66%,rgba(86,84,131,1))]"
                           : "bg-[linear-gradient(90deg,#2A005F_0%,#30086A_35%,#2D0E62_65%,#25184D_100%)]"
                       }`}
          >
            ادامه
          </button>
        </form>
      </div>
      <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-1.5 mx-auto mt-12 ">
        <div className={`${styles.login} w-full rounded mx-1 bg-[#8B5CF6]`} />
        <div className="w-full rounded mx-1 bg-[#9E9E9E]"></div>
      </div>
    </div>
  );
}

export default Signup;
>>>>>>> 296be55362806e7e853501d1b07d10bd2b574b42
