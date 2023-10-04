import "./../../common/css/sub.scss";
import "./../../globals.scss";

export default function loading() {
   return(
         <div className="portSub loading">
           <article
             className="visual"
             style={{ background: `rgba(227,229,245,1)`}}
           >
           </article>

          <article className="detailArt">
            <div className="inner">
                <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>

              <div className="viewTit">
                <h2>&nbsp;</h2>
              </div>
              <div className="viewEtc">
               <ul>
                  <li>
                     <h3>&nbsp;</h3>
                     <p>&nbsp;</p>
                  </li>
                  <li>
                     <h3>&nbsp;</h3>
                     <p>&nbsp;</p>
                  </li>
                  <li>
                     <h3>&nbsp;</h3>
                     <p>&nbsp;</p>
                  </li>
               </ul>
               </div>
            </div>
          </article>
         </div>
      )
}