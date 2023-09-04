export default function MainSkill(props) {
  return (
    <div>
      <figure>
        <img src={props.propsimg + ".png"} alt={props.txtTit + "아이콘"} />
      </figure>
      <div>
        <h2>{props.txtTit}</h2>
        {props.txtSub ?
        (<p>{props.txtSub}</p>)
        :
        null
      }
      </div>
    </div>
  );
}
