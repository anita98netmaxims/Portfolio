import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../common/ThemeToggle";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenu(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? `
            backdrop-blur-xl
            shadow-lg

            bg-white/80
            dark:bg-slate-900/80
          `
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}

        <h1
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            text-3xl
            font-bold
            cursor-pointer
            text-blue-500
          "
        >
          Simran.
        </h1>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                font-medium
                transition-all
                duration-300

                text-slate-800
                dark:text-white

                hover:text-blue-500
              "
            >
              {item.label}
            </button>
          ))}

          <ThemeToggle />

        </nav>

        {/* Mobile */}

        <div className="flex items-center gap-5 md:hidden">

          <ThemeToggle />

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="
              text-2xl

              text-slate-800
              dark:text-white
            "
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div
          className="
            md:hidden
            border-t

            bg-white
            border-slate-200

            dark:bg-slate-900
            dark:border-slate-800
          "
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                block
                w-full
                text-left
                px-6
                py-4

                transition

                text-slate-800
                dark:text-white

                hover:bg-slate-100
                dark:hover:bg-slate-800
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;