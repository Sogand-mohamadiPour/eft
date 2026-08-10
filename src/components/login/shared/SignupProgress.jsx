import styles from "../Login.module.css";

function SignupProgress({ stepOneClass, stepTwoClass }) {
  return (
    <div className="flex justify-between w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-1.5 mx-auto mt-12">
      <div className={`${styles.login} w-full rounded mx-1 ${stepOneClass}`} />
      <div className={`${styles.login} w-full rounded mx-1 ${stepTwoClass}`} />
    </div>
  );
}

export default SignupProgress;
