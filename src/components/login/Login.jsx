import styles from "./Login.module.css"
import Input from "./Input"
<svg><symbol id="star" viewBox="0 0 20 20" fill="curremtColor" stroke='curremtColor' xmlns="http://www.w3.org/2000/svg">
<path d="M10 0L7.87868 7.87868L0 10L7.87868 12.1213L10 20L12.1213 12.1213L20 10L12.1213 7.87868L10 0Z" />
</symbol>
</svg>

function Login() {
  return (
    <div dir="rtl" className={`${styles.BackGround} flex justify-center items-center h-screen `}>
        <div className={`${styles.login} w-1/3 bg-[#100034] h-140 rounded-3xl text-center`}>
            <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />
            <span className="text-[#FFFFFF] text-base">آرامش ذهن تغییر زندگی</span>
            <div className="text-red-900">
                <svg className=" w-1 h-1"><use href="star"></use></svg>
            </div>
             <p className="text-[#FFFFFF] text-3xl mt-4">سلام، <span className="text-[#F3B961]">خوش برگشتی!</span></p>
            <span className="text-[#FFFFFF] text-sm">با ادامه مسیر فقط یک قدم فاصله داری</span>
            <Input />
            <div className="flex justify-between px-8 mt-5">
                <div className="flex">
                    <p className="text-[#FFFFFF] text-sm pl-2">من رو به خاطر بسپار</p>
                    <input
                        type="checkbox"
                    />
                </div>
                <p className="text-[#FFFFFF] text-sm">رمز عبور رو فراموش کردی؟</p>
            </div>
            <button className="w-md bg-[redial-geradient(rgba(106,4,202,1),rgba(112,25,202,1),rgba(91,39,178,1),rgba(86,84,131,1))]">curremtColor</button>
        </div>
    </div>
  );
}
export default Login


