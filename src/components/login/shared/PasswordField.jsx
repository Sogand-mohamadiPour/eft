import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { passwordInputClass } from "./loginClasses";

function PasswordField({
  value,
  onChange,
  placeholder,
  showPassword,
  onToggleVisibility,
}) {
  return (
    <div className="relative mx-auto w-full sm:w-full lg:w-[80%] group">
      <FaLock className="icon absolute right-14 md:right-17 lg:right-4 top-1/2 mt-2 -translate-y-1/2 text-(--icons) group-focus-within:text-(--text)" />

      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={passwordInputClass}
      />

      <button
        type="button"
        onClick={onToggleVisibility}
        className="icon absolute cursor-pointer hover:text-(--text) left-14 md:left-17 lg:left-4 top-1/2 mt-2 -translate-y-1/2 text-(--icons) group-focus-within:text-(--text)"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default PasswordField;
