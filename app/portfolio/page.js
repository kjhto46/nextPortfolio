import { connectDB } from "@/util/database";
import SubTit from "../components/SubTit";
import PortCont01 from "./PortCont01";
import PortCont02 from "./PortCont02";

export default async function Portfolio() {
  const client = await connectDB;
  const db = client.db("portfolio");
  let portResult = await db.collection("portfolioDetail").find().toArray();
  portResult = portResult.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  let portResult2 = await db.collection("portfolioDetail2").find().toArray();
  portResult2 = portResult2.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return (
    <>
      <title>Portfolio</title>
      <div className="sub">
        <div className="inner">
          <SubTit titTxt="Portfolio" />
          <div className="cont01">
            <PortCont01 portResult={portResult} />
          </div>
          <div className="cont02">
            <h2 className="poppins">Project List</h2>
            <div className="flexArea">
            <PortCont02 portResult2={portResult2} />
            <div className="notionDiv">
              <div className="sticky">
              <h2 className="poppins">More My Project</h2>
              <a
                href="https://titanium-tapir-b43.notion.site/757839bfe09e4234b5b0bc9e518c81b0?v=91d58360640d4dc9b00e3b8b521463d9"
                target="_blank"
              >
                <figure>
                  <img src="/sub/notion_icon.png" />
                </figure>
                <div>
                  <span>
                    <h3 className="poppins">Notion</h3>
                    <p>80+ Projects</p>
                  </span>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 5.46796L5.46796 20L4 18.532L18.532 4L20 5.46796Z"
                        className="fillColor"
                      />
                      <path d="M8 4H20V6H8V4Z"  className="fillColor" />
                      <path d="M20 4L20 16L18 16L18 4L20 4Z"  className="fillColor"/>
                    </svg>
                  </i>
                </div>
              </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
