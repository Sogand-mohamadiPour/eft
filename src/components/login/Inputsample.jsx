function Inputsample({ icon, placeholder, name, value, onChange, maxLength }) {
  return (
    <form action="#">
      <div className="relative mx-auto w-full sm:w-full lg:w-[80%] group">
        <span className="icon icon absolute right-14 md:right-17 lg:right-4 top-1/2 mt-2 -translate-y-1/2 text-(--icons) text-xl group-focus-within:text-(--text)">
          {icon}
        </span>

        <input
          className="text-(--icons) text-[18px] focus:text-(--text) hover:border-(--text) bg-[rgba(42,29,76,0.2)]  h-12 w-[80%]  lg:w-full border border-[#2c2b2b80]  rounded-2xl mt-4 text-start pr-12"
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      </div>
    </form>
  );
}

export default Inputsample;
