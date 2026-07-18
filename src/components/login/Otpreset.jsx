import { useEffect, useRef, useState } from "react";

function Otpreset({ otpRequestCount, otp, setOtp }) {
  const OTP_LENGTH = 5;

  const otpArray = otp;
  const [timeLeft, setTimeLeft] = useState(0);
  const [isFirstSend, setIsFirstSend] = useState(true);
  const inputsRef = useRef([]);
  const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
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
  }
};

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
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="h-14 w-14 text-center border rounded-2xl mt-5"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Otpreset;
