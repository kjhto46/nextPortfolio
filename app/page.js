import "./common/css/main.scss";
import { connectDB } from "@/util/database";
import Section01 from "./section01";
import Section02 from "./section02";
import Section03 from "./section03";
import Section04 from "./section04";

export default async function Home({ darkTheme }) {
  const client = await connectDB;
  const db = client.db("portfolio");
  let mainResult = await db.collection("mainport").find().toArray();
  mainResult = mainResult.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  
  return (
    <>
      <title>권준희 포트폴리오</title>

      <main className="main">
        <Section01  darkTheme={darkTheme} />
        <Section02 />
        <Section03 />
        <Section04 mainResult={mainResult} />
      </main>
    </>
  );
}
