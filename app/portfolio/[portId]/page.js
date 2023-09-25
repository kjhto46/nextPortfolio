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
          <article
            className="visual"
            style={{
              background: ` url(${portResult.img01}) no-repeat center/auto 100%,linear-gradient(90deg, rgba(246,235,231,1) 0%, rgba(227,229,245,1) 100%)`,
            }}
          ></article>
          <article className="detailArt">
            <div className="inner">
              <Link href={"/portfolio"} className="poppins listBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                >
                  <path
                    d="M0.413497 9.49172C-0.137832 10.0486 -0.137832 10.9514 0.413497 11.5083L9.39793 20.5824C9.94927 21.1392 10.8431 21.1392 11.3944 20.5824C11.9458 20.0255 11.9458 19.1228 11.3944 18.5659L3.4083 10.5L11.3944 2.4341C11.9458 1.87726 11.9458 0.974463 11.3944 0.417626C10.8431 -0.139209 9.94927 -0.139209 9.39793 0.417626L0.413497 9.49172ZM24 9.07413H1.41176V11.9259H24V9.07413Z"
                  />
                </svg>
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
