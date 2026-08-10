import styles from "./Login.module.css";
import { useState } from "react";
import LoginLogo from "./shared/LoginLogo";
import PasswordField from "./shared/PasswordField";
import PasswordRulesList from "./shared/PasswordRulesList";
import SignupProgress from "./shared/SignupProgress";
import {
  primaryButtonClass,
  primaryButtonDisabledClass,
} from "./shared/loginClasses";
import { getPasswordRules } from "../../utils/validation";

function Changepass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordRules = getPasswordRules(password, confirmPassword);

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-screen py-10 px-2 w-full`}
    >
      <div
        className={`${styles.login} w-full sm:w-[80%] md:w-[70%] lg:w-[35%] mx-auto bg-(--login-box) h-fix rounded-3xl text-center`}
      >
        <LoginLogo />

        <p className="text-xl mt-5 mb-8">
          بازیابی <span className="text-[#7D20D5]">رمز عبور</span>
        </p>

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
            disabled={!passwordRules.isValid}
            className={`text-(--text) w-[80%] mt-3 mb-8 ${
              passwordRules.isValid
                ? primaryButtonClass
                : primaryButtonDisabledClass
            }`}
          >
            تغییر رمز عبور و ورود به حساب
          </button>
        </form>
      </div>

      <SignupProgress
        stepOneClass="bg-(--login-border)"
        stepTwoClass="bg-(--login-border)"
      />
    </div>
  );
}

export default Changepass;
