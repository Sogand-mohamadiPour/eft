import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Input({ password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative mx-auto w-full sm:w-full lg:w-[80%] group">
        <FaLock className="icon absolute right-14 md:right-17 lg:right-4 top-1/2 mt-2 -translate-y-1/2 text-(--icons) group-focus-within:text-(--text)" />

        <input
<<<<<<< HEAD
          className="text-(--icons) focus:text-(--text) hover:border-(--text) bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#2c2b2b80] rounded-2xl mt-4 text-start pl-12 pr-12"
=======
          className="text-[#9E9E9E80] focus:text-white hover:border-white bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-2xl mt-4 text-start pl-12 pr-12"
>>>>>>> 296be55362806e7e853501d1b07d10bd2b574b42
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="رمز عبور"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="icon absolute cursor-pointer hover:text-(--text) left-14 md:left-17 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80] group-focus-within:text-(--text)"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}

export default Input;
