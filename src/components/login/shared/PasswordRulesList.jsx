import { FaCheck } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

const RULES = [
  { key: "hasLetter", label: "شامل حروف" },
  { key: "hasNumber", label: "شامل اعداد" },
  { key: "hasSymbol", label: "شامل علامت‌های ویژه" },
  { key: "hasLength", label: "حداقل ۸ کاراکتر" },
  { key: "isMatch", label: "یکسان بودن رمزها" },
];

function PasswordRulesList({ rules }) {
  return (
    <ul className="mx-auto w-[80%] p-5 space-y-3 text-right">
      {RULES.map(({ key, label }) => (
        <li key={key} className="flex items-center gap-2">
          {rules[key] ? (
            <FaCheck className="text-[12px]" />
          ) : (
            <BsCircleFill className="text-[8px]" />
          )}
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

export default PasswordRulesList;
