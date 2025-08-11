import Container from "../components/Container";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import ts from "../assets/typescript.svg";
import react from "../assets/react.svg";
import Motion from "../components/Motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import SectionBox from "../components/SectionBox";

function Skills() {
  const { isDark } = useContext(ThemeContext);

  const skills = [
    { image: html, name: "HTML" },
    { image: css, name: "CSS" },
    { image: js, name: "JavaScript" },
    { image: ts, name: "TypeScript" },
    { image: react, name: "React" },
  ];

  return (
    <Container id="skills" className="pb-28">
      <Motion>
        <SectionBox title="Skills">
          <div className="flex flex-wrap gap-8 justify-center mx-auto max-w-[750px]">
            {skills.map(({ image, name }) => (
              <div
                key={name}
                className="relative group cursor-pointer w-[60px] sm:w-[70px]"
              >
                <img src={image} alt={name} className="w-full h-auto" />
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </SectionBox>
      </Motion>
    </Container>
  );
}

export default Skills;
