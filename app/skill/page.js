import "../common/css/sub.scss";
import MainSkill from "../components/MainSkill";
import SubTit from "../components/SubTit";

export default function Skill() {
  return (
    <>
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
                    txtSub="크로스브라우징 시맨틱마크업을 준수합니다. 반응형/적응형 개발 경험, 애니메이션 활용"
                    propsimg="/sub/skill_icon01"
                  />
                </li>
                <li>
                  <MainSkill
                    txtTit="HTML5"
                    txtSub="크로스브라우징 시맨틱마크업을 준수합니다. 반응형/적응형 개발 경험, 애니메이션 활용"
                    propsimg="/sub/skill_icon01"
                  /></li>
                <li>
                  <MainSkill
                    txtTit="HTML5"
                    txtSub="크로스브라우징 시맨틱마크업을 준수합니다. 반응형/적응형 개발 경험, 애니메이션 활용"
                    propsimg="/sub/skill_icon01"
                  /></li>
              </ol>
            </li>
            <li>
              <h2>Design</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
