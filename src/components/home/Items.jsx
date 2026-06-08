import {
  HiOutlineHeart,
  HiOutlineChartBar,
  HiOutlineLightBulb,
} from "react-icons/hi2";

import { PiHeadphonesLight, PiBrainLight, PiLeafLight } from "react-icons/pi";

const items = [
  {
    icon: HiOutlineLightBulb,
    title: "محتوای اختصاصی",
    desc: "مدیتیشن ها، تمرین ها و جلسات ویژه برای آرامش و پاکسازی ذهن.",
  },
  {
    icon: PiLeafLight,
    title: "تکنیک علمی و اثر بخش",
    desc: "مبتنی بر روش EFT که توسط متخصصان جهانی تایید شده است.",
  },
  {
    icon: PiBrainLight,
    title: "آموزش گام به گام",
    desc: "مسیر یادگیری ساده و کاربردی برای همه افراد.",
  },
  {
    icon: HiOutlineChartBar,
    title: "پیگیری پیشرفت شما",
    desc: "ابزار های هوشمند برای ثبت احساسات و مشاهده رشد شخصی.",
  },
  {
    icon: HiOutlineHeart,
    title: "تحول واقعی و پایدار",
    desc: "رهایی از ریشه های ذهنی مشکلات و ایجاد تغییرات عمیق.",
  },
  {
    icon: PiHeadphonesLight,
    title: "پشتیبانی همراه شما",
    desc: "پاسخگویی و پشتیبانی در تمام مراحل مسیر رشد شما.",
  },
];

function Items() {
  return (
    <section className="bg-[#0b0033] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-[#26164b] p-3 lg:p-6 text-center transition-all hover:-translate-y-1 hover:border-violet-500/40"
              >
                <Icon className="mx-auto mb-3 text-3xl lg:text-5xl text-[#a855f7]" />

                <h3 className="mb-2 text-white font-bold text-xs lg:text-2xl leading-tight">
                  {item.title}
                </h3>

                <p className="text-[10px] lg:text-sm leading-relaxed text-[#c9b8ea]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Items;
