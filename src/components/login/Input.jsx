import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input() {
  const [name, setName] = useState("");

  return (
    <div className="mx-auto w-fit">
      <div className="relative w-96  ">
        <FaUser className="icon absolute left-12 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]" />
        <input
          className="text-[#9E9E9E80] bg-[rgba(42,29,76,0.2)]  h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-md mt-4 text-end pl-10"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="شماره موبایل"
        />
      </div>

      <div className="relative w-96 flex justify-center">
        <FaLock className="icon absolute left-12 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]" />
        <FaEye className="icon absolute right-12 lg:right-5 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]" />
        <input
          className="text-[#9E9E9E80] bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-md mt-4 text-end pl-10"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="رمز عبور"
        />
      </div>
    </div>
  );
}

export default Input;
