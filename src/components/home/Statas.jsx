import {
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_ORIGIN } from "../../rest/api";

const STATIC_STATS = [
  {
    icon: HiOutlineStar,
    title: "4.8/5",
    subtitle: "امتیاز کاربران",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "100% امن",
    subtitle: "حریم خصوصی شما",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "همیشه در دسترس",
    subtitle: "در هر زمان در هر مکان",
  },
];

function Stats() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_ORIGIN}/users/user-count/`)
      .then((res) => {
        console.log("SUCCESS:", res.data);
        setUserCount(res.data.count);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  const stats = [
    {
      icon: HiOutlineUsers,
      title: `+${userCount || 0}`,
      subtitle: "کاربر در مسیر تحول",
    },
    ...STATIC_STATS,
  ];

  return (
    <section className="px-4 py-8">
      <div className="mx-auto">
        <div className="hidden md:grid grid-cols-4 gap-2">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-(--bgStatas) rounded-[28px] flex items-center justify-center gap-4 py-5 px-6"
              >
                <Icon className="text-4xl text-[#9d5cff]" />

                <div className="text-right">
                  <h3 className="text-(--text) text-xl lg:text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-(--text-secondary) text-xs lg:text-sm mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 md:hidden">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-(--bgStatas) rounded-3xl px-3 py-5 flex items-center gap-3"
              >
                <Icon className="text-3xl text-[#9d5cff]" />
                <div className="min-w-0 text-right">
                  <h3 className="text-(--text) text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-(--text-secondary) text-[10px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
