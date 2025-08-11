import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton({ toggleTheme }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="w-full py-10 flex justify-center">
      <button
        onClick={toggleTheme}
        className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded bg-gray-300 dark:bg-gray-700 dark:text-white text-black hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {isDark ? "라이트 모드" : "다크 모드"}
      </button>
    </div>
  );
}

export default ThemeButton;
