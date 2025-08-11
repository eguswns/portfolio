import Container from "../components/Container";
import Motion from "../components/Motion";
import SectionBox from "../components/SectionBox";

function About() {
  return (
    <Container id="about" className="pb-28">
      <Motion>
        <SectionBox title="About">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed max-w-[750px] mx-auto text-center break-keep">
            웹 화면을 만들며 사용자에게 새로운 경험을 전하는 프론트엔드 개발자를
            꿈꾸는 이현준입니다.
            <br />
            작은 코드 한 줄에도 설렘을 느끼고, 문제 해결과 성장의 즐거움을
            소중히 여깁니다.
            <br />
            React, TypeScript 등 최신 기술을 익히며 성실하게 실습과 프로젝트를
            이어가고 있습니다.
            <br />더 나은 서비스와 사용자 경험을 위해 끊임없이 배우고 발전하는
            개발자가 되고 싶습니다.
          </p>
        </SectionBox>
      </Motion>
    </Container>
  );
}

export default About;
