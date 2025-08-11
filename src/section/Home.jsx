import { FaLaptopCode } from "react-icons/fa";
import Container from "../components/Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Home() {
  const [text] = useTypewriter({
    words: ["Frontend Developer"],
    loop: false,
    typeSpeed: 80,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  return (
    <Container
      id="home"
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-5 pt-[72px] pb-28"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        <FaLaptopCode size={120} className="mb-6" />
      </motion.div>
      <motion.h1
        className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-extrabold leading-tight break-keep"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        안녕하세요, <br className="hidden sm:block" />
        프론트엔드 개발자 <br className="hidden sm:block" />
        <span className="text-[#aab5c9]">이현준</span>입니다.
      </motion.h1>
      <motion.h2
        className="mt-6 text-2xl sm:text-3xl min-h-[50px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      >
        {text}
        <Cursor cursorColor="#aab5c9" />
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="mt-10"
      >
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="rounded-full bg-[#aab5c9] font-bold px-6 py-3 text-sm sm:text-base hover:bg-[#8aa1c6] transition inline-block"
        >
          나의 포트폴리오 탐험하기
        </Link>
      </motion.div>
    </Container>
  );
}

export default Home;
