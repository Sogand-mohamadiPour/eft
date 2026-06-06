import styles from "./Login.module.css"
import Input from "./Input"

function Login() {
  return (
    <div dir="rtl" className={`${styles.BackGround} flex justify-center items-center h-screen `}>
        <div className={`${styles.login} w-1/3 bg-[#100034] h-140 rounded-3xl text-center`}>
            <img className="w-1/3 mx-auto" src="assets/logo_login.png" alt="logo" />
            <span className="text-[#FFFFFF] text-base">آرامش ذهن تغییر زندگی</span>
            <p className="text-[#FFFFFF] text-3xl mt-4">سلام، <span className="text-[#F3B961]">خوش برگشتی!</span></p>
            <span className="text-[#FFFFFF] text-sm">با ادامه مسیر فقط یک قدم فاصله داری</span>
            <Input />
            <input
                type="checkbox"
            />
            
        </div>
    </div>
  )
}
export default Login


