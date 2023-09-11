import Footer from "@/app/common/inc/Footer";
import Header from "@/app/common/inc/Header";
import OrignBtn from "@/app/components/OrignBtn";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default async function PortDetail(props) {
  if (props.params.portId.toString("hex")) {
  }
  const client = await connectDB;
  const db = client.db("portfolio");
  let portResult = await db
    .collection("portfolioDetail")
    .findOne({ _id: new ObjectId(props.params.portId) });

  if (portResult === null) {
    return notFound();
  } else {
    return (
      <>
        <Header />
        <title>{portResult.ptitle}</title>
        <div className="portSub">
          <article className="visual" style={{ background: `url(${portResult.img01}) no-repeat center/cover` }}>
            <div className="inner">
              <Link href={"/portfolio"} className="poppins">
                Back to List
              </Link>
            </div>
            <h2>{portResult.ptitle}</h2>
          </article>
          <article className="detailArt">
            <div className="inner">
              <div className="flexArea">
                <div className="left">
                  <h2>{portResult.ptitle}</h2>
                  <Link
                    href={portResult.pUrl}
                    target="_blank"
                    className="orignBtn orgBtn"
                  >
                    <OrignBtn viewtxt="Web Site" />
                  </Link>
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <h3>Date</h3>
                      <p>{portResult.pDate}</p>
                    </li>
                    <li>
                      <h3>Skill Set</h3>
                      {portResult?.skillSet?.length > 0 && (
                        <ol>
                          {portResult.skillSet.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                          ))}
                        </ol>
                      )}
                    </li>
                    <li className="subtxt">{portResult.subtxt}</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
