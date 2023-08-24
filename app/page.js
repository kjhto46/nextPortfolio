import { connectDB } from "@/util/database";
import classes from "./page.module.scss";
import "./common/css/main.scss";
import Section01 from "./section01";
import Section03 from "./section03";
import Section02 from "./section02";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("portfolio");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      <title>안녕하세요?</title>
      {/* <script src="../js/mainscript.js" defer /> */}


      <main className={`${classes.title} main`}>
        <Section01 />
        <Section02 />
        <Section03 />
        <article className={`${classes.article02}`}></article>
      </main>
    </>
  );
}
