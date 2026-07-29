import { useState } from "react";
import styles from "./Login.module.css";
import Otpreset from "./Otpreset";
import LoginLogo from "./shared/LoginLogo";
import SignupProgress from "./shared/SignupProgress";
import { useLocation, Navigate } from "react-router-dom";
import { getSignupOtp } from "../../utils/signupOtpStorage";

function Signupwithotp() {
  const [otpRequestCount] = useState(1);
  const location = useLocation();
  const cachedSignupOtp = getSignupOtp();

  const phone = location.state?.phone || cachedSignupOtp.phone;
  const tempToken = location.state?.tempToken || cachedSignupOtp.tempToken;

  if (!phone || !tempToken) {
    return <Navigate to="/Signup" replace />;
  }

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-full px-2 py-12 w-full`}
    >
      <div
        className={`${styles.login} mx-auto pt-8 w-full sm:w-[80%] md:w-[70%] lg:w-[40%] bg-(--login-box) h-150 rounded-3xl text-center`}
      >
        <LoginLogo className="w-1/4 mx-auto mt-3 mb-7" />

        <Otpreset
          phone={phone}
          tempToken={tempToken}
          otpRequestCount={otpRequestCount}
        />
      </div>

      <SignupProgress
        stepOneClass="bg-[#8B5CF6]"
        stepTwoClass="bg-[#8B5CF6]"
      />
    </div>
  );
}

export default Signupwithotp;
