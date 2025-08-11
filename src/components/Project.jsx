import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Project({ title, desc, stack, image, link, github }) {
  return (
    <div className="bg-transparent rounded-xl shadow-lg w-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded transition-transform transform hover:scale-105 hover:brightness-110 cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />
      </a>
      <h3 className="text-xl font-bold mb-2 px-4">{title}</h3>
      <p className="text-[#aab5c9] text-base mb-3 px-4">{desc}</p>
      <div className="flex items-center gap-4 mb-3 px-4">
        {stack.map((icon, idx) => (
          <img key={idx} src={icon} alt="" className="w-8 h-8" />
        ))}
      </div>
      <div className="flex justify-end items-center gap-4 pb-3 px-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded transition"
          >
            <FiExternalLink className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded transition"
          >
            <FaGithub className="w-8 h-8 transition-transform hover:scale-110" />
          </a>
        )}
      </div>
    </div>
  );
}
export default Project;
