function Hero() {
  return (
    <>
      <section className="bg-(--bg) px-4 lg:px-6 pt-4 lg:pt-0">
        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/assets/heropic.jpg"
              alt="EFT Hero"
              className="w-full h-72 object-cover object-[0%_center]" 
            />
          </div>

          <div className="mt-6 text-center">
            <h1 className="text-(--text) font-extrabold leading-tight text-3xl">
              <p>
                <span className="text-[#f7c65a]">کاهش اضطراب</span> و
                <span className="text-[#f7c65a]">رهایی</span>
              </p>

              <p>از باور های محدود کننده</p>

              <p>
                با تکنیک <span className="text-[#8b3dff]">EFT</span>
              </p>
            </h1>

            <div className="mt-5 text-(--text) leading-relaxed">
              <p>با تمرین های قدم به قدم برای آرامش ذهن،</p>
              <p>کنترل استرس و افزایش اعتماد به نفس</p>
              <p>ذهن خود را بازنشانی کنید.</p>
            </div>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <button className="h-12 px-5 rounded-full bg-linear-to-r from-[#6A04CA] to-[#565483] text-white font-bold">
                شروع جلسه رایگان ←
              </button>

              <button className="h-12 px-5 rounded-full bg-linear-to-r from-[#F3B961] to-[#EEDEC6] text-black font-medium">
                EFT چیست؟
              </button>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <div
            className="relative w-full max-w-10xl mx-auto min-h-125 rounded-3xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/heropic.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-l from-[#4b235d]/50 to-[#2a1144]/30" />

            <div className="relative z-10 flex justify-start h-full">
              <div className="w-full lg:w-[45%] flex flex-col justify-center text-right px-12 py-12">
                <h1 className="text-(--text) font-extrabold leading-tight text-5xl">
                  <p>
                    <span className="text-[#f7c65a]">کاهش اضطراب</span> و{" "}
                    <span className="text-[#f7c65a]">رهایی</span>
                  </p>

                  <p>از باور های محدود کننده</p>

                  <p>
                    با تکنیک <span className="text-[#8b3dff]">EFT</span>
                  </p>
                </h1>

                <div className="mt-8 text-(--text) text-lg leading-relaxed">
                  <p>با تمرین های قدم به قدم برای آرامش ذهن،</p>
                  <p>کنترل استرس و افزایش اعتماد به نفس</p>
                  <p>ذهن خود را بازنشانی کنید.</p>
                </div>

                <div className="mt-10 flex justify-end gap-4 flex-wrap">
                  <button className="h-14 px-5 lg:px-8 rounded-full bg-linear-to-r from-[#6A04CA] to-[#565483] text-white font-bold text-lg shadow-[0_0_30px_rgba(124,58,237,.4)] cursor-pointer">
                    شروع جلسه رایگان ←
                  </button>

                  <button className="h-14 px-8 rounded-full bg-linear-to-r from-[#F3B961] to-[#EEDEC6] text-black font-medium cursor-pointer">
                    EFT چیست؟
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-6 text-center text-sm sm:text-lg">
        <span className="text-(--text)">چرا</span>{" "}
        <span className="tracking-[0.3em] bg-linear-to-l from-[#d4b896] to-[#a855f7] bg-clip-text text-transparent">
          EFT RESET
        </span>
        <span className="text-(--text)"> متفاوت است؟ </span>
      </p>
    </>
  );
}

export default Hero;
