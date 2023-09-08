import { connectDB } from "@/util/database";
import SubTit from "../components/SubTit";
import PortCont01 from "./PortCont01";

export default async function Portfolio() {
  const client = await connectDB;
  const db = client.db("portfolio");
  let portResult = await db.collection("portfolioDetail").find().toArray();
  portResult = portResult.map((a)=>{
    a._id = a._id.toString()
    return a
  })

  return (
    <>
      <title>Portfolio</title>
      <div className="sub">
        <div className="inner">
          <SubTit titTxt="Portfolio" />
          <div className="cont01">
            <PortCont01 portResult={portResult} />
          </div>
        </div>
      </div>
    </>
  );
}
