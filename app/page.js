import { connectDB } from "@/util/database";
import classes from "./page.module.scss";
import "./common/css/main.scss";
import Section01 from "./section01";
import Section02 from "./section02";
import Section03 from "./section03";
import Section04 from "./section04";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("portfolio");
  let mainResult = await db.collection("mainport").find().toArray();
  mainResult = mainResult.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  
  return (
    <>
      <title>안녕하세요?</title>
      {/* <script src="../js/mainscript.js" defer /> */}


      <main className={`${classes.title} main`}>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 mainResult={mainResult} />
      </main>
    </>
  );
}
