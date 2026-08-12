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
