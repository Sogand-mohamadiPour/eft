import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../auth/AuthContext";

const NAV_LINKS = [
  { label: "خانه", to: "/" },
  { label: "محتوا", to: "/content" },
  { label: "نتایج کاربران", to: "/user-results" },
  { label: "جلسات EFT", to: "/eft-sessions" },
  { label: "وبلاگ", to: "/blog" },
  { label: "درباره ما", to: "/about" },
];

function Logo({ mobileIconOnly = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <span
        className={`text-lg sm:text-2xl font-bold tracking-wide whitespace-nowrap ${
          mobileIconOnly ? "hidden lg:block" : ""
        }`}
      >
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
        `relative block px-4 py-3 text-lg font-medium transition-colors hover:text-(--text-secondary) ${
          isActive ? "text-(--text-secondary)" : "text-(--text)"
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

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center justify-center gap-2 rounded-full border border-[#565483] bg-white/5 px-5 py-2.5 text-(--text) transition hover:bg-white/10 cursor-pointer ${className}`}
      aria-label="تغییر تم"
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5" />
      ) : (
        <FiMoon className="h-5 w-5" />
      )}
    </button>
  );
}

function LoginButton({ onLogout }) {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    if (onLogout) {
      onLogout();
    }

    navigate("/");
  };

  if (isAuthenticated) {
    return (
      <span className="text-(--text) text-lg font-medium">{user?.name}</span>
    );
  }

  return (
    <Link
      to="/login"
      className="rounded-full bg-(--text-secondary) px-5 py-2.5 text-white transition hover:opacity-90"
    >
      ورود / ثبت نام
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  useEffect(() => {
    const message = sessionStorage.getItem("logoutMessage");

    if (message) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLogoutMessage(message);
      sessionStorage.removeItem("logoutMessage");

      const timer = setTimeout(() => {
        setLogoutMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

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
              className="lg:hidden rounded-lg p-2 text-(--text) hover:bg-(--text-secondary)"
              onClick={openMenu}
              aria-expanded={menuOpen}
              aria-label="باز کردن منو"
            >
              <HiBars3 className="h-6 w-6" />
            </button>
            <Logo mobileIconOnly />
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <HeaderNavItem key={link.to} {...link} className="px-3 py-2" />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle className="hidden sm:flex sm:items-center sm:justify-center" />
            <LoginButton
              onLogout={() => {
                setLogoutMessage("با موفقیت از حساب خارج شدید");
              }}
            />
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-([#100034]/50) backdrop-blur-md"
          onClick={closeMenu}
        />

        <aside
          className={`absolute top-0 right-0 flex h-full w-[min(85vw,320px)] flex-col border-l border-white/10 bg-(--bg-secondary) shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <Logo />

            <button
              type="button"
              className="rounded-lg p-2 text-(white/80) transition-colors hover:bg-white/10 hover:text-(--text) cursor-pointer"
              onClick={closeMenu}
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col py-2">
            {NAV_LINKS.map((link) => (
              <HeaderNavItem key={link.to} {...link} onClick={closeMenu} />
            ))}
          </nav>

          <div className="border-t border-white/10 p-4 flex justify-center">
            <ThemeToggle />
          </div>
        </aside>
      </div>
      {logoutMessage && (
        <div className="fixed bottom-5 left-1/2 z-100 -translate-x-1/2 rounded-xl bg-(--bg-secondary) px-5 py-3 text-sm text-(--text) shadow-lg">
          {logoutMessage}
        </div>
      )}
    </>
  );
}

export default Header;
