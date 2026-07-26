import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestOtp, verifyOtp } from "../../rest/auth";

function Otpreset({ phone, tempToken, otpRequestCount }) {
  const OTP_LENGTH = 5;

  const navigate = useNavigate();

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFirstSend, setIsFirstSend] = useState(true);

  const inputsRef = useRef([]);

  useEffect(() => {
    if (otpRequestCount > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const handleKeyDown = (e, index) => {
    if (e.key !== "Backspace") return;

    if (otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    } else if (index > 0) {
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
      await verifyOtp(code, tempToken);

      alert("ثبت نام با موفقیت انجام شد.");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("کد وارد شده صحیح نیست.");
    }
  };

  const handleSendCode = async () => {
    try {
      const data = await requestOtp(phone);

      // If backend returns a new temp token:
      // tempToken = data.temp_token;

      setTimeLeft(60);
      setIsFirstSend(false);
    } catch (error) {
      console.error(error);
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
        className="bg-[linear-gradient(90deg,rgba(106,4,202,1)_0%,rgba(112,25,202,1)_33%,rgba(91,39,178,1)_66%,rgba(86,84,131,1))]
        text-white
        rounded-3xl
        cursor-pointer
        px-6
        w-[70%]
        h-14
        mt-12
        py-2"
      >
        تایید کد
      </button>
    </>
  );
}

export default Otpreset;
