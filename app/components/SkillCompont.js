export default function SkillCompont(props) {
  return (
      <div className="skillCompont">
        <figure><img src={"/sub/skill_icon_" + props.imgtxt + ".png"} alt={props.txtTit + "아이콘"}/></figure>
        <div>
          <h3>{props.txtTit}</h3>
          <p>{props.txtSub}</p>
        </div>
      </div>
  );
}
