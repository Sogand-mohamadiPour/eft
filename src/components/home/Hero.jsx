function Hero() {
  return (
    <>
      <section className="bg-[#0b0033] flex items-center justify-center px-6 overflow-hidden mt-7">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-right">
              <h1 className="text-white font-extrabold leading-tight text-4xl md:text-5xl lg:text-4xl mr-40">
                <span className="text-[#f7c65a]">کاهش اضطراب</span> و{" "}
                <span className="text-[#f7c65a]">رهایی</span>
                <br />
                از باور های محدود کننده
                <br />
                با تکنیک <span className="text-[#8b3dff]">EFT</span>
              </h1>

              <p className="mt-8 text-[#d3c7f5] text-lg leading-relaxed max-w-xl  mr-40">
                با تمرین های قدم به قدم برای آرامش ذهن،
                <br />
                کنترل استرس و افزایش اعتماد به نفس
                <br />
                ذهن خود را بازنشانی کنید.
              </p>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-end gap-4 ml-10">
                <button className="h-14 px-10 rounded-full bg-linear-to-r from-[#6d00ff] to-[#7b68b5] text-white font-bold text-lg flex items-center gap-4 shadow-[0_0_30px_rgba(124,58,237,.4)] transition hover:scale-105">
                  شروع جلسه رایگان
                  <span className="text-2xl">←</span>
                </button>
                <button className="h-14 px-8 rounded-full bg-[#24134d] border border-[#43316d] text-white text-lg">
                  EFT چیست؟
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/assets/mainPic.png"
                alt="EFT Reset"
                className="w-full max-w-[750px] object-contain"
              />
            </div>
          </div>
          <p className="mt-16 text-center text-2xl">
            <span className="text-[#d6c6ff]">چرا</span>{" "}
            <span className="tracking-[0.3em] bg-linear-to-l from-[#d4b896] to-[#a855f7] bg-clip-text text-transparent">
              EFT RESET
            </span>{" "}
            <span className="text-[#d6c6ff]">متفاوت است؟</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
