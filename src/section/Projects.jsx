import Container from "../components/Container";
import Project from "../components/Project";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import starbucks from "../assets/images/starbucks.png";
import ipad from "../assets/images/ipad.png";
import Motion from "../components/Motion";
import SectionTitle from "../components/SectionTitle";

const projectsData = [
  {
    title: "스타벅스 클론코딩",
    desc: "Starbucks 사이트를 순수 HTML, CSS, JavaScript로 기능을 구현한 클론 코딩 프로젝트입니다.",
    stack: [html, css, js],
    image: starbucks,
    link: "https://golden-conkies-905605.netlify.app/",
    github: "https://github.com/eguswns/starbucks",
  },
  {
    title: "ipad 클론코딩",
    desc: "ipad 사이트를 순수 HTML, CSS, JavaScript로 반응형 UI와 주요 기능을 구현한 클론 코딩 프로젝트입니다.",
    stack: [html, css, js],
    image: ipad,
    link: "https://ipad-beta-gold.vercel.app/",
    github: "https://github.com/eguswns/ipad",
  },
];

function Projects() {
  return (
    <Container id="projects" className="pb-28">
      <Motion>
        <SectionTitle title="Projects" />
        <div
          className="grid 
            gap-6 sm:gap-8 md:gap-12
            grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
        >
          {projectsData.map((project, idx) => (
            <div key={idx} className="w-full max-w-full">
              <Project {...project} />
            </div>
          ))}
        </div>
      </Motion>
    </Container>
  );
}

export default Projects;
