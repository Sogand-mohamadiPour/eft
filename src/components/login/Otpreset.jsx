<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestOtp, verifyOtp } from "../../rest/auth";
import { primaryButtonClass } from "./shared/loginClasses";
import {
  clearSignupOtp,
  saveSignupOtp,
} from "../../utils/signupOtpStorage";

const OTP_LENGTH = 5;

function Otpreset({ phone, tempToken, otpRequestCount }) {
  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFirstSend, setIsFirstSend] = useState(true);
  const [currentTempToken, setCurrentTempToken] = useState(tempToken || "");

  useEffect(() => {
    if (otpRequestCount > 0) {
      setTimeLeft(60);
    }
  }, [otpRequestCount]);

  useEffect(() => {
    if (tempToken) {
      setCurrentTempToken(tempToken);
    }
  }, [tempToken]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleKeyDown = (e, index) => {
    if (e.key !== "Backspace") return;

    if (otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    if (index > 0) {
      inputsRef.current[index - 1]?.focus();
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
    }
  };

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const digit = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");

    if (code.length !== OTP_LENGTH) {
      alert("کد تایید را کامل وارد کنید.");
      return;
    }

    try {
      await verifyOtp(code, currentTempToken);
      alert("ثبت نام با موفقیت انجام شد.");
      clearSignupOtp();
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("کد وارد شده صحیح نیست.");
    }
  };

  const handleSendCode = async () => {
    if (!phone) {
      alert("شماره موبایل یافت نشد.");
      return;
    }

    try {
      const data = await requestOtp(phone);

      if (data?.temp_token) {
        setCurrentTempToken(data.temp_token);
        saveSignupOtp({ phone, tempToken: data.temp_token });
      }

      setTimeLeft(60);
      setIsFirstSend(false);
    } catch (error) {
      console.error(error);
      alert("ارسال مجدد کد با خطا مواجه شد.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSendCode}
        disabled={timeLeft > 0}
        className="mt-8 cursor-pointer disabled:opacity-80"
      >
        {timeLeft > 0
          ? `${timeLeft} ثانیه تا ارسال مجدد`
          : isFirstSend
            ? "ارسال کد تایید"
            : "ارسال مجدد کد"}
      </button>

      <p className="text-[18px] mt-4">
        لطفا <span className="text-[#7D20D5]">کد تایید </span>
        ارسال شده را در کادر زیر وارد کنید
      </p>

      <div dir="ltr" className="flex justify-center gap-2 mt-5">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            className="h-14 w-14 text-center border rounded-2xl mt-5"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={handleVerify}
        className={`${primaryButtonClass} w-[70%] mt-12`}
      >
        تایید کد
      </button>
    </>
  );
}

export default Otpreset;
=======
import { useEffect, useRef, useState } from "react";

function Otpreset({ otpRequestCount, otp, setOtp }) {
  const OTP_LENGTH = 5;

  const otpArray = otp;
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFirstSend, setIsFirstSend] = useState(true);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (otpRequestCount > 0) {
      setTimeLeft(60);
    }
  }, [otpRequestCount]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSendCode = async () => {
    setTimeLeft(60);
    setIsFirstSend(false);
  };

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const digit = value.slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;

    setOtp(newOtp);

    if (digit && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newOtp.every((item) => item !== "")) {
      console.log("OTP:", newOtp.join(""));
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleSendCode}
          disabled={timeLeft > 0}
          className="mt-8 cursor-pointer disabled:opacity-80"
        >
          {timeLeft > 0
            ? `${timeLeft} ثانیه تا ارسال مجدد`
            : isFirstSend
              ? "ارسال کد تایید"
              : "ارسال مجدد کد"}
        </button>
        <p className="text-[18px]  mt-4">
          لطفا <span className="text-[#7D20D5]">کد تایید </span>ارسال شده را در
          کادر زیر وارد کنید
        </p>
        <div dir="ltr" className="flex justify-center gap-2 mt-5">
          {otpArray.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="h-14 w-14 text-center border rounded-2xl mt-5"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Otpreset;
>>>>>>> 296be55362806e7e853501d1b07d10bd2b574b42
