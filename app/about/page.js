import "../common/css/sub.scss";
import SubTit from "../components/SubTit";

export default function About() {
  return (
    <>
      <div></div>
      <title>About</title>

      <div className="sub about">
        <div className="inner">
          <div className="cont01">
            <SubTit titTxt="About Me" />
            <div className="flexArea">
              <figure></figure>
              <div>
                <h3>
                  안녕하세요. <span>3년차 퍼블리셔</span> 권준희 입니다.
                </h3>
                <ul>
                  <li>
                    대학 시절 UI/UX 수업을 통해 어플 디자인을 경험했습니다.
                    처음에는 부족한 부분이 많았지만, 모바일 환경에서 사용자의
                    편의성을 고려한 기능, 모션, 화면 흐름을 다양하게 표현하는
                    작업에 큰 흥미를 느꼈습니다. 이를 통해 UI/UX의 중요성을 깊게
                    깨달을 수 있었습니다.
                  </li>
                  <li>
                    학교를 졸업한 후에도, 그 시절 수업에서 느꼈던 디자인과
                    개발에 대한 열정이 계속해서 저를 이끌었습니다. 웹
                    퍼블리셔로서 3년간 다양한 웹 프로젝트를 수행하며, 80개
                    이상의 홈페이지를 제작하고 200회 이상의 유지보수 작업을
                    완료했습니다. 이 경험을 통해 웹 표준 준수, 웹 접근성, 반응형
                    디자인과 같은 원칙을 숙지하고, 팀 내 협업의 중요성을
                    체감했습니다. 또한, 프론트엔드 개발에서 JavaScript를
                    활용하여 사용자 경험을 향상시키고 웹 애플리케이션의 성능과
                    기능을 향상하는 과정에서 새로운 도전을 많이 경험했습니다.
                  </li>
                  <li>
                    저는 이러한 경험을 토대로 프론트엔드 개발자로 성장하고자
                    합니다. 웹 기술에 대한 깊은 이해를 바탕으로 혁신적인 웹
                    솔루션을 제공하고 사용자 경험을 향상시키는데 기여하고자
                    합니다. 나아가, 현재에 이르러도 프론트엔드 환경의 빠른
                    변화에 발맞추기 위해 지속적인 학습과 개발을 진행하고 있으며,
                    퇴근 후에도 매일 공부하고 강의 및 토이 프로젝트를 진행하여
                    스스로의 기술을 끊임없이 개선하고 있습니다. 이러한 노력을
                    통해 웹 개발 분야에서 더 나은 성과를 달성하고자 하고
                    있습니다. 감사합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cont02">
            <figure></figure>
            <div>
              <h3 className="poppins">Career List</h3>
              <ul>
                <li>
                  <span>2021.04 - 2023.08</span>
                  <p>(주)이프론트 IT팀 대리</p>
                </li>
                <li>
                  <span>2020. 10 - 2021.04</span>
                  <p>
                    하이미디어컴퓨터아카데미 UI/UX 반응형 웹디자인(웹퍼블리셔)
                    과정 수료
                  </p>
                </li>
                <li>
                  <span>2020.03</span>
                  <p>계원예술대학교 산업디자인학과 졸업</p>
                </li>
                <li>
                  <span>2019.11</span>
                  <p>대구디자인전람회 특별상 수상 (Radi)</p>
                </li>
                <li>
                  <span>2019.01</span>
                  <p>
                    SBS아카데미컴퓨터아트학원 포토샵, 일러스트,Rhinoceros
                    심화과정 수료
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
