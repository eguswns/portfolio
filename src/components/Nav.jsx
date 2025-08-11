import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import iconWhite from "../assets/logo_white.svg";
import iconBlack from "../assets/logo_black.svg";
import { ThemeContext } from "../context/ThemeContext";

function Nav() {
  const [showLogo, setShowLogo] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // 햄버거 메뉴 열림 여부
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 29) setShowLogo(false);
      else setShowLogo(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center">
      {/* 로고 */}
      <img
        src={isDark ? iconWhite : iconBlack}
        alt="로고"
        className={`w-[60px] h-[60px] transition-opacity duration-300 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 🔽 PC용 메뉴 */}
      <ul className="hidden md:flex gap-[40px]">
        {navItems.map(({ label, target }) => (
          <li key={target}>
            <Link
              to={target}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className={`cursor-pointer transition ${
                isDark ? "text-white" : "text-black"
              } hover:text-[#aab5c9]`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* ☰ 햄버거 버튼 (모바일에서만 보임) */}
      <div
        className="md:hidden z-50 cursor-pointer text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className={`${isDark ? "text-white" : "text-black"}`} />
        ) : (
          <FaBars className={`${isDark ? "text-white" : "text-black"}`} />
        )}
      </div>

      {/* 📱 모바일 전체화면 메뉴 패널 */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#1e1e1e] flex flex-col items-center justify-center gap-8 z-40 transition`}
        >
          {navItems.map(({ label, target }) => (
            <Link
              key={target}
              to={target}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)} // 클릭 후 메뉴 닫힘
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-black"
              } hover:text-[#aab5c9] cursor-pointer`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
