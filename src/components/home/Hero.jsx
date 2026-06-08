function Hero() {
  return (
    <section className="bg-[#0b0033] flex items-center justify-center px-4 lg:px-6 overflow-hidden pt-4 lg:pt-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl lg:text-4xl max-w-xl mx-auto lg:mx-0">
              <span className="text-[#f7c65a]">کاهش اضطراب</span> و{" "}
              <span className="text-[#f7c65a]">رهایی</span>
              <br />
              از باور های محدود کننده
              <br />
              با تکنیک <span className="text-[#8b3dff]">EFT</span>
            </h1>

            <p className="mt-6 text-[#d3c7f5] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              با تمرین های قدم به قدم برای آرامش ذهن،
              <br />
              کنترل استرس و افزایش اعتماد به نفس
              <br />
              ذهن خود را بازنشانی کنید.
            </p>

            <div className="mt-8 flex justify-center lg:justify-end gap-3 flex-wrap">
              <button className="h-12 sm:h-14 px-6 sm:px-10 rounded-full bg-linear-to-r from-[#6d00ff] to-[#7b68b5] text-white font-bold text-base sm:text-lg flex items-center gap-3 shadow-[0_0_30px_rgba(124,58,237,.4)] transition hover:scale-105">
                شروع جلسه رایگان
                <span className="text-xl sm:text-2xl">←</span>
              </button>

              <button className="h-12 sm:h-14 px-5 sm:px-8 rounded-full bg-[#24134d] border border-[#43316d] text-white text-base sm:text-lg">
                EFT چیست؟
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/mainPic.png"
              alt="EFT Reset"
              className="w-full max-w-65 sm:max-w-87.5 lg:max-w-187.5 object-contain"
            />
          </div>
        </div>
        <p className="mt-10 lg:mt-16 text-center text-sm sm:text-lg">
          <span className="text-[#d6c6ff]">چرا</span>{" "}
          <span className="tracking-[0.3em] bg-linear-to-l from-[#d4b896] to-[#a855f7] bg-clip-text text-transparent">
            EFT RESET
          </span>{" "}
          <span className="text-[#d6c6ff]">متفاوت است؟</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
