import styles from "./Login.module.css";
import Input from "./Input";


function Login() {
  return (
    <div dir="rtl" className={`${styles.BackGround} flex justify-center items-center h-screen `}>
        <div className={`${styles.login} w-1/3 bg-[#100034] h-140 rounded-3xl text-center`}>
            <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />
            <span className="text-base">آرامش ذهن تغییر زندگی</span>
            <div className="text-red-900">
                <svg className=" w-1 h-1"><use href="star"></use></svg>
            </div>
             <p className="text-3xl mt-4">سلام، <span className="text-[#F3B961]">خوش برگشتی!</span></p>
            <span className="text-sm">با ادامه مسیر فقط یک قدم فاصله داری</span>
            <Input />
            <div className="flex justify-between px-8 mt-5">
                <div className="flex">
                    <p className="text-sm pl-2">من رو به خاطر بسپار</p>
                    <input
                        type="checkbox"
                    />
                </div>
                <p className="text-sm">رمز عبور رو فراموش کردی؟</p>
            </div>
            <button className="w-md bg-[redial-geradient(rgba(106,4,202,1),rgba(112,25,202,1),rgba(91,39,178,1),rgba(86,84,131,1))]">curremtColor</button>
        </div>
        <button
          className="bg-[linear-gradient(90deg,rgba(106,4,202,1)_0%,rgba(112,25,202,1)_33%,rgba(91,39,178,1)_66%,rgba(86,84,131,1))]
                text[rgba(255,255,255,1)]
                rounded-3xl
                px-6
                w-sm
                h-14
                mt-6
                py-2 "
        >
          ورود به حساب
        </button>
        <p className="text-[#FFFFFF] text-sm mt-4">
          حساب کاربری  نداری؟ <span className="text-[#F3B961]">ثبت نام کن</span>
        </p>
    </div>
  );
}
export default Login;
