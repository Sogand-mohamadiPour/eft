import { useState } from "react";
import styles from "./Login.module.css";
import Otpreset from "./Otpreset";
import { useLocation, Navigate } from "react-router-dom";

function Signupwithotp() {
  const [otpRequestCount] = useState(1);

  const location = useLocation();

  const phone = location.state?.phone;
  const tempToken = location.state?.tempToken;

  // Prevent opening this page directly
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
        <img
          className="w-1/4 mx-auto mt-3 mb-7"
          src="assets/logo_login.png"
          alt="logo"
        />

        <Otpreset
          phone={phone}
          tempToken={tempToken}
          otpRequestCount={otpRequestCount}
        />
      </div>

      <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-1.5 mx-auto mt-12">
        <div className={`${styles.login} w-full rounded mx-1 bg-[#8B5CF6]`} />
        <div className={`${styles.login} w-full rounded mx-1 bg-[#8B5CF6]`} />
      </div>
    </div>
  );
}

export default Signupwithotp;
