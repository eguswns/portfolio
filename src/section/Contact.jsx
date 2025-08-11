import { useContext, useRef } from "react";
import Container from "../components/Container";
import emailjs from "@emailjs/browser";
import Motion from "../components/Motion";
import { ThemeContext } from "../context/ThemeContext";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const form = useRef();

  const { isDark } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      alert("성함을 입력해주세요.");
      return;
    }
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!message) {
      alert("내용을 입력해주세요.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        (result) => {
          alert("메일이 성공적으로 전송되었습니다!");
        },
        (error) => {
          alert("메일 전송 실패: " + error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="contact" className="pb-28">
      <Motion>
        <SectionTitle title="Contact" />
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-[750px] mx-auto flex flex-col gap-12"
        >
          <div>
            <label className="block text-xs tracking-widest mb-2">NAME</label>
            <input
              type="text"
              name="name"
              placeholder="성함을 입력해주세요"
              className={`w-full bg-transparent border-b ${
                isDark ? "border-white" : "border-black"
              } outline-none py-2`}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest mb-2">EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              className={`w-full bg-transparent border-b ${
                isDark ? "border-white" : "border-black"
              } outline-none py-2`}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest mb-2">
              MESSAGE
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="내용을 입력해주세요"
              className={`w-full bg-transparent border-b ${
                isDark ? "border-white" : "border-black"
              } outline-none py-2 resize-none`}
              autoComplete="off"
            ></textarea>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="tracking-widest font-bold text-sm mb-1"
            >
              SEND MESSAGE
            </button>
            <div className="w-[180px] h-0.5 bg-[#aab5c9] opacity-60" />
          </div>
        </form>
      </Motion>
    </Container>
  );
}

export default Contact;
