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
          <article className="visual" style={{ background: ` url(${portResult.img01}) no-repeat center/auto 100%,linear-gradient(90deg, rgba(246,235,231,1) 0%, rgba(227,229,245,1) 100%)` }}>
          </article>
          <article className="detailArt">
            <div className="inner">
              <Link href={"/portfolio"} className="poppins listBtn">
                Back to List
              </Link>
                <div className="viewTit">
                  <h2>{portResult.ptitle}</h2>
                  <Link
                    href={portResult.pUrl}
                    target="_blank"
                    className="orignBtn orgBtn"
                  >
                    <OrignBtn viewtxt="Web Site" />
                  </Link>
                </div>
                <div className="viewEtc">
                  <ul>
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
                    <li>
                      <h3>Date</h3>
                      <p>{portResult.pDate}</p>
                    </li>
                    <li className="subtxt">
                      <h3>Description</h3>
                      <p>{portResult.subtxt}</p>  
                    </li>
                  </ul>
                </div>
              </div>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}
