import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Login.module.css";
import Otpreset from "./Otpreset";

function Signupwithotp() {
  const location = useLocation();

  const tempToken =
    location.state?.tempToken || sessionStorage.getItem("tempToken");

  const phone = location.state?.phone || sessionStorage.getItem("phone");

  const [otpRequestCount, setOtpRequestCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  useEffect(() => {
    console.log("PHONE:", phone);
    console.log("TEMP TOKEN:", tempToken);
  }, [phone, tempToken]);

  const verifyOtp = async () => {
    const code = otp.join("");

    const response = await fetch(
      "http://10.135.59.21:8000/users/api/auth/verify-otp/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          otp_code: code,
          temp_token: tempToken,
        }),
      },
    );

    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (!phone) {
      console.log("No phone received");
      return;
    }

    const requestOtp = async () => {
      try {
        setLoading(true);

        console.log("TEMP TOKEN:", tempToken);

        const response = await fetch(
          "http://10.135.59.21:8000/users/api/auth/request-otp/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone,
            }),
          },
        );

        const data = await response.json();

        if (!response.ok) {
          console.log(data);
          throw new Error("OTP request failed");
        }

        console.log("OTP sent:", data);

        setOtpRequestCount((prev) => prev + 1);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    requestOtp();
  }, [phone]);

  return (
    <div
      dir="rtl"
      className={`${styles.BackGround} h-screen lg:h-full px-2 py-12 w-full`}
    >
      <div
        className={`${styles.login} mx-auto pt-8 w-full sm:w-[80%] md:w-[70%] lg:w-[40%] bg-(--login-box) h-150 rounded-3xl text-center`}
      >
        <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />

        <Otpreset otpRequestCount={otpRequestCount} otp={otp} setOtp={setOtp} />

        {loading && <p className="text-white mt-4">در حال ارسال کد تایید...</p>}

        <button
          onClick={verifyOtp}
          type="button"
          className="bg-[linear-gradient(90deg,rgba(106,4,202,1)_0%,rgba(112,25,202,1)_33%,rgba(91,39,178,1)_66%,rgba(86,84,131,1))] text-(--text) rounded-3xl cursor-pointer px-6 w-[70%] h-14 mt-12 py-2"
        >
          ورود به حساب
        </button>
      </div>

      <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-1.5 mx-auto mt-12">
        <div className={`${styles.login} w-full rounded mx-1 bg-(--login-border)`} />
        <div className={`${styles.login} w-full rounded mx-1 bg-(--login-border)`} />
      </div>
    </div>
  );
}

export default Signupwithotp;
