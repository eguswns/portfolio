import { FaGithub } from "react-icons/fa";
import Container from "../components/Container";

function Footer() {
  return (
    <Container>
      <footer className="py-10">
        <div className="flex justify-center items-center gap-2 text-2xl">
          <span className="font-light">GitHub/</span>
          <span className="font-bold">portfolio</span>
          <a
            href="https://github.com/eguswns/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2"
          >
            <FaGithub className="w-7 h-7 inline-block align-middle hover:scale-110 transition-transform" />
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
