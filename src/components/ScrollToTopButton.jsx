import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    show && (
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="fixed bottom-6 right-6 z-50 bg-[#aab5c9] text-white p-3 rounded-full hover:bg-[#8aa1c6] transition shadow-lg cursor-pointer"
      >
        <FaArrowUp size={20} />
      </Link>
    )
  );
}

export default ScrollToTopButton;
