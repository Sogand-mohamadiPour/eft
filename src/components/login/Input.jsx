<<<<<<< HEAD
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Input() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="#">
      <div className="relative mx-auto w-full sm:w-full lg:w-[80%] group">
        <FaLock className="icon absolute right-14 md:right-17 lg:right-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80] group-focus-within:text-white" />
       
        <input
          className="text-[#9E9E9E80] focus:text-white hover:border-white bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-2xl mt-4 text-start pr-12"
          type={showPassword ? "text" : "password"}
          name="password"
           placeholder="رمز عبور"
        />
         <button type="button" onClick={() => setShowPassword(!showPassword)} className="icon absolute cursor-pointer hover:text-white left-14 md:left-17 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]  group-focus-within:text-white">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
      </div>
    </form>
=======
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Input() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto w-fit ">
      <div className="relative w-96  group">
        <FaUser className="icon absolute left-12 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80] group-focus-within:text-white" />
        <input
          className="text-[#9E9E9E80] focus:text-white bg-[rgba(42,29,76,0.2)]  h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-md mt-4 text-end pl-10"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="شماره موبایل"
        />
      </div>

      <div className="relative w-96 flex justify-center group">
        <FaLock className="icon absolute left-12 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80] group-focus-within:text-white" />
        <FaEye className="icon absolute right-12 lg:right-5 top-1/2 mt-2 -translate-y-1/2 text-[#9E9E9E80]  group-focus-within:text-white" />
        <input
          className="text-[#9E9E9E80] focus:text-white bg-[rgba(42,29,76,0.2)] h-12 w-[80%] lg:w-full border border-[#9E9E9E80] rounded-md mt-4 text-end pl-10"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
        />
      </div>
    </div>
>>>>>>> gitlab/main
  );
}

export default Input;
