import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "صفحه کاربری",
    icon: "⌂",
    path: "/dashboard",
  },
  {
    label: "پروفایل من",
    icon: "♙",
    path: "/dashboard/profile",
  },
  {
    label: "دوره های من",
    icon: "▣",
    path: "/dashboard/courses",
  },
  {
    label: "درخواست دوره جدید",
    icon: "▤",
    path: "/dashboard/new-course",
  },
  {
    label: "کیف پول من",
    icon: "▱",
    path: "/dashboard/wallet",
  },
  {
    label: "ثبت نظرات",
    icon: "◯",
    path: "/dashboard/reviews",
  },
];

export default function DashboardSidebar() {
  return (
    <aside
      className="
        w-72.5
        min-h-157.5
        shrink-0
        p-6
        px-7
        box-border
        rounded-[18px]
        bg-[rgba(68,54,101,0.75)]
        shadow-[0_0_8px_rgba(150,90,220,0.35)]
        text-white
      "
    >
      {/* User */}
      <div
        className="
          flex
          flex-col
          items-center
          mb-10.5
        "
      >
        <div
          className="
            w-36.25
            h-36.25
            flex
            items-center
            justify-center
            mb-4.5
            rounded-full
            border-2
            border-[#f0bb52]
            bg-linear-to-br
            from-white
            to-[#e7d6f6]
            shadow-[0_0_0_4px_rgba(240,187,82,0.15)]
          "
        >
          <span
            className="
              text-[#9d76c8]
              text-[58px]
              font-light
            "
          >
            U
          </span>
        </div>

        <p className="m-0 text-[15px]">Username</p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `
                relative
                w-full
                flex
                items-center
                gap-2
                py-1
                no-underline
                text-[15px]
                transition-all
                duration-200
                hover:text-[#d79cff]
                hover:-translate-x-0.75
                ${
                  isActive
                    ? "text-white after:absolute after:right-0 after:-bottom-2 after:w-26.25 after:h-0.5 after:bg-[#d94cff]"
                    : "text-white"
                }
              `
            }
          >
            <span
              className="
                inline-flex
                w-5
                justify-center
                text-[#d34cff]
                text-[17px]
              "
            >
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}

        {/* Logout */}
        <button
          className="
            w-full
            flex
            items-center
            gap-2
            mt-1.5
            py-1
            border-none
            bg-transparent
            text-white
            text-[15px]
            font-inherit
            cursor-pointer
            transition-all
            duration-200
            hover:text-[#d79cff]
            hover:-translate-x-0.75
          "
        >
          <span
            className="
              inline-flex
              w-5
              justify-center
              text-[#d34cff]
              text-[17px]
            "
          >
            ↪
          </span>

          <span>خروج</span>
        </button>
      </nav>
    </aside>
  );
}
