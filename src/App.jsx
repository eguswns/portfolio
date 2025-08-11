import { useContext } from "react";
import Header from "./section/Header";
import Home from "./section/Home";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import { ThemeContext } from "./context/ThemeContext";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ThemeButton from "./components/ThemeButton";

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isDark ? "bg-[#221f1f] text-white" : "bg-white text-black"
      } min-h-[100dvh] transition-colors duration-500`}
    >
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ThemeButton toggleTheme={toggleTheme} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
