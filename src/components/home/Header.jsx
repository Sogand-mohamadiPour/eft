import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
=======
import { HiBars3, HiGlobeAlt, HiXMark } from "react-icons/hi2";
>>>>>>> gitlab/main

const NAV_LINKS = [
  { label: "خانه", to: "/" },
  { label: "محتوا", to: "/content" },
  { label: "نتایج کاربران", to: "/user-results" },
  { label: "جلسات EFT", to: "/eft-sessions" },
  { label: "وبلاگ", to: "/blog" },
  { label: "درباره ما", to: "/about" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <span className="text-lg sm:text-2xl font-bold tracking-wide whitespace-nowrap">
        <span className="bg-linear-to-l from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
          EFT
        </span>
        <span className="text-[#d4b896]"> RESET</span>
      </span>
      <img
        src="/assets/logoCut.png"
        alt="EFT Reset"
        className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
      />
    </Link>
  );
}

function HeaderNavItem({ label, to, onClick, className = "" }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `relative block px-4 py-3 text-lg font-medium transition-colors hover:text-white ${
          isActive ? "text-white" : "text-[#c4b5fd]/90"
        } ${className}`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <span className="absolute inset-x-4 bottom-2 h-0.5 rounded-full bg-[#9333ea]" />
          )}
        </>
      )}
    </NavLink>
  );
}

<<<<<<< HEAD
function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(true);

  return (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      className={`flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-white transition hover:bg-white/10 cursor-pointer ${className}`}
      aria-label="تغییر تم"
    >
      {dark ? <FiMoon className="h-5 w-5" /> : <FiSun className="h-5 w-5" />}
    </button>
=======
function LanguageSwitcher({ className = "", value, onChange }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 ${className}`}
    >
      <HiGlobeAlt className="h-4 w-4" aria-hidden="true" />

      <select
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none cursor-pointer"
      >
        <option value="fa" className="text-black">
          فارسی
        </option>
        <option value="en" className="text-black">
          English
        </option>
      </select>
    </div>
>>>>>>> gitlab/main
  );
}

function LoginButton() {
  return (
    <Link
      to="/login"
      className="rounded-full bg-linear-to-l from-[#9333ea] to-[#6366f1] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shadow-[0_0_24px_rgba(147,51,234,0.35)] transition-opacity hover:opacity-90 sm:px-6"
    >
      ورود / ثبت نام
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-40 w-full px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-screen-4xl items-center justify-between gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="lg:hidden rounded-lg p-2 text-white hover:bg-white/10"
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-label="باز کردن منو"
            >
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </button>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center gap-1" aria-label="اصلی">
            {NAV_LINKS.map((link) => (
              <HeaderNavItem key={link.to} {...link} className="px-3 py-2" />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
<<<<<<< HEAD
            <ThemeToggle className="hidden sm:flex sm:items-center sm:justify-center" />
=======
            <LanguageSwitcher className="hidden lg:flex" />
>>>>>>> gitlab/main
            <LoginButton />
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[#100034]/50 backdrop-blur-md"
          onClick={closeMenu}
          aria-label="بستن منو"
          tabIndex={menuOpen ? 0 : -1}
        />

        <aside
          className={`absolute top-0 right-0 flex h-full w-[min(85vw,320px)] flex-col border-l border-white/10 bg-[#1a0040] shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <span className="text-sm font-semibold text-white/80">منو</span>
            <button
              type="button"
<<<<<<< HEAD
              className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
=======
              className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
>>>>>>> gitlab/main
              onClick={closeMenu}
              aria-label="بستن منو"
            >
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col py-2" aria-label="موبایل">
            {NAV_LINKS.map((link) => (
              <HeaderNavItem key={link.to} {...link} onClick={closeMenu} />
            ))}
          </nav>

<<<<<<< HEAD
          <div className="border-t border-white/10 p-4 flex justify-center">
            <ThemeToggle />
=======
          <div className="border-t border-white/10 p-4">
            <LanguageSwitcher className="w-full justify-center" />
>>>>>>> gitlab/main
          </div>
        </aside>
      </div>
    </>
  );
}

export default Header;
