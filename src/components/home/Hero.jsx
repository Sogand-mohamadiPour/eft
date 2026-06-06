import { useEffect, useState } from "react";

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  return (
    <>
      <section
        dir="rtl"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-10"
      >
        {/* ── Main content wrapper ── */}
        <div className="z-10 w-full">
          {/* ── Hero Card ── */}
          <div
            className={[
              "w-full rounded-2xl ",
              "flex flex-col md:flex-row items-center gap-8 p-8 md:p-12",
            ].join(" ")}
          >
            <div className="shrink-0 flex items-center justify-center w-55 h-55 md:w-67.5 md:h-67.5">
              <div className="relative flex items-center justify-center w-50 h-50 md:w-63.75 md:h-63.75 rounded-full border-2 border-[rgba(180,100,255,0.55)] animate-[orbPulse_4s_ease-in-out_infinite]">
                <img src="assets/logo.png" />
              </div>
            </div>

            {/* ══ TEXT BLOCK ══ */}
            <div className="flex-1 text-right">
              {/* Headline */}
              <h1 className="mb-5 text-3xl md:text-4xl font-extrabold leading-relaxed text-[#f0eafa]">
                <span className="text-amber-400">کاهش اضطراب</span> و{" "}
                <span className="text-amber-400">رهایی</span>
                <br />
                از باور های محدود کننده
                <br />
                با تکنیک <span className="text-violet-400">EFT</span>
              </h1>

              {/* Sub */}
              <p className="mb-8 text-sm md:text-base leading-loose text-[#c4b5e8] max-w-sm mr-0 ml-auto md:ml-0">
                با تمرین های قدم به قدم برای آرامش ذهن، کنترل استرس و افزایش
                اعتماد به نفس ذهن خود را بازنشانی کنید.
              </p>

              {/* Buttons */}
              <div className="flex flex-row-reverse gap-3 justify-end md:justify-start mb-2">
                {/* Primary CTA */}
                <button className="flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-violet-700 to-violet-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(124,58,237,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(124,58,237,0.65)] active:scale-95">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-xs">
                    ←
                  </span>
                  شروع جلسه رایگان
                </button>

                {/* Secondary */}
                <button className="flex items-center gap-2 rounded-xl border border-[rgba(124,58,237,0.45)] bg-[#1e1040] px-6 py-3.5 text-sm font-medium text-[#c4b5e8] transition-all duration-200 hover:border-violet-400 hover:text-[#f0eafa] active:scale-95">
                  EFT چیست؟
                </button>
              </div>
            </div>
          </div>

          {/* ── Bottom tagline ── */}
          <p className="mt-5 text-center text-sm tracking-wide text-[rgba(180,150,220,0.7)]">
            چرا{" "}
            <span className="font-semibold tracking-widest text-[rgba(210,180,255,0.9)]">
              EFT RESET
            </span>{" "}
            متفاوت است؟
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
