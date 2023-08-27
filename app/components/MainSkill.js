export default function MainSkill(props) {
   return(
      <div className="sec03_compo">
         <div>
         <figure><img src={"/main/" + props.propsimg} alt={props.txtTit + "아이콘"} /></figure>
         <h2>{props.txtTit}</h2>
         </div>
      </div>
      )
}