import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { useRouter } from "next/navigation";
import BackBtn from "../BackBtn";

export default async function PortDetail(props){
   const client = await connectDB;
   const db = client.db("portfolio");
   let portResult = await db.collection("portfolioDetail").findOne({ _id : new ObjectId(props.params.portId)});
   console.log(portResult);

   return(
      <>
      <title>프로젝트 제목</title>
      <div className="portSub">
         <article className="visual">
            <BackBtn />
            <h2>프로젝트 제목</h2>
         </article>
         <article>
            <div className="inner">
               <ul>
                  <li>
                     <h4>Technologies</h4>
                     <ol>
                        <li>테크 1</li>
                        <li>테크 2</li>
                     </ol>
                  </li>
                  <li>
                     <h4>Website URl</h4>
                     <a href="https://www.naver.com" target="_blank">https://www.naver.com</a>
                  </li>
               </ul>
            </div>
         </article>
      </div>
      </>
      )
}