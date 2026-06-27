import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        w-12
        h-12
        rounded-full
        bg-slate-800
        text-white
        flex
        items-center
        justify-center
        hover:scale-110
        transition
      "
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;