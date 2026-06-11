import { useEffect, useRef, useState } from "react";

function Otpreset({ otpRequestCount }) {
  const OTP_LENGTH = 4;

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
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
      const code = newOtp.join("");
      console.log("OTP:", code);
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
          {otp.map((digit, index) => (
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
