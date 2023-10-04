import "../common/css/sub.scss";
import MainSkill from "../components/MainSkill";
import SubTit from "../components/SubTit";

export default function Skill() {
  return (
    <>
      <div></div>
      <title>Skill</title>

      <div className="sub skills">
        <div className="inner">
          <SubTit titTxt="Skills & Stack" />
          <ul className="allSkillList">
            <li>
              <h2>Markup & Style Sheet</h2>
              <ol>
                <li>
                  <MainSkill
                    txtTit="HTML5"
                    txtSub="시맨틱 마크업을 활용하여 웹 페이지의 구조를 의미 있게 설계할 수 있습니다. 웹 접근성 원칙을 준수하여 모든 사용자에게 더 나은 웹 경험을 제공합니다."
                    propsimg="/sub/skill_icon01"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="CSS"
                    txtSub="Flexbox와 Grid 레이아웃을 사용하여 디자인할 수 있습니다. 반응형 웹 디자인을 구축하고 미디어 쿼리를 활용하여 다양한 화면 크기와 장치에 대응합니다. CSS3의 다양한 애니메이션 및 전환 속성을 활용하여 웹 페이지에 동적 효과를 추가합니다."
                    propsimg="/sub/skill_icon02"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="Sass"
                    txtSub="CSS 전처리기로서 스타일 시트 작성과 관리를 간소화합니다. Mixin 및 상속을 활용하여 스타일을 재사용하고 모듈화하여 코드의 재사용성을 향상시킵니다."
                    propsimg="/sub/skill_icon03"
                  />
                </li>
              </ol>
            </li>
            <li>
              <h2>Front-End</h2>
              <ol>
                <li>
                  <MainSkill
                    txtTit="JavaScript"
                    txtSub="기본적인 문법에 대한 이해, 이벤트 핸들링, DOM 조작, 함수 생성 및 인자 전달, 로컬 스토리지, 쿠키를 이용한 페이지 개발경험이 있습니다."
                    propsimg="/sub/skill_icon07"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="jQuery"
                    txtSub="DOM 조작 단순화, 이벤트 처리 용이, 애니메이션 효과 제공에 주로 작업하였습니다."
                    propsimg="/sub/skill_icon08"
                  />
                </li>
                {/* <li>
                  <MainSkill
                    txtTit="TypeScript"
                    txtSub="TypeScript에 대한 이해도를 가지고 있습니다. 정적 타입 언어로서 코드 안정성을 높이고, 타입 오류를 줄이는 중요성을 이해합니다."
                    propsimg="/sub/skill_icon09"
                  />
                </li> */}
                {/* <li>
                  <MainSkill
                    txtTit="Node.js"
                    txtSub="JavaScript 런타임 환경으로 서버 사이드 개발이 가능하다는 개념을 숙지하고 있습니다. 핵심 모듈과 패키지 관리자인 npm을 활용하여 서버 애플리케이션을 개발하고 관리할 수 있습니다."
                    propsimg="/sub/skill_icon10"
                  />
                </li> */}
                <li>
                  <MainSkill
                    txtTit="PHP"
                    txtSub="include 활용하여 페이지 간략하게 사용, 사용자 정의 함수로 페이지에 연결시 활용하여 작업한 경험이 있습니다."
                    propsimg="/sub/skill_icon11"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="React"
                    txtSub="컴포넌트를 활용하여 UI를 작은 독립적인 조각으로 구성하고 재사용성을 극대화합니다. 커뮤니티와 온라인 자료를 통해 학습하고, 최신 동향을 따라가며 웹 개발에 적용하려 합니다."
                    propsimg="/sub/skill_icon12"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="Next.js"
                    txtSub="리액트(React) 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 프레임워크, 검색 엔진 최적화(SEO)를 개선하고 초기 로딩 속도를 최적화에 대해 생각하며 작업 했습니다."
                    propsimg="/sub/skill_icon13"
                  />
                </li>
              </ol>
            </li>
            <li>
              <h2>Version Control</h2>
              <ol>
                <li>
                  <MainSkill
                    txtTit="git"
                    txtSub="분산 버전 관리 시스템으로, 소스 코드와 프로젝트 관리를 위해 사용됩니다. Git의 기본 명령어를 활용하여 저장소 생성, 복제, 커밋, 푸시, 풀 등을 수행할 수 있습니다."
                    propsimg="/sub/skill_icon20"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="GitHub"
                    txtSub="웹 기반 Git 리포지토리 호스팅 플랫폼으로, 소스 코드 관리와 협업을 지원합니다."
                    propsimg="/sub/skill_icon21"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="Slack"
                    txtSub="업무 및 팀 커뮤니케이션을 위한 클라우드 기반 메시징 플랫폼입니다. 실시간 채팅, 파일 공유, 채널 생성 및 관리, 멀티 팀 협업 등을 지원하여 협업을 효과적으로 수행합니다."
                    propsimg="/sub/skill_icon22"
                  />
                </li>
              </ol>
            </li>
            <li>
              <h2>Design</h2>
              <ol>
                <li>
                  <MainSkill
                    txtTit="Photoshop"
                    txtSub=""
                    propsimg="/sub/skill_icon04"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="Illustrator"
                    txtSub=""
                    propsimg="/sub/skill_icon05"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="Figma"
                    txtSub=""
                    propsimg="/sub/skill_icon06"
                  />
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
