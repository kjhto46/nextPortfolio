"use client";
import Link from "next/link";
import OrignBtn from "./components/OrignBtn";
import FileScroll from "./components/FileScroll.js"; 

export default function Section04({mainResult}) {
  return (
    <section id="section04" className="section section04">
      <div className="inner">
        <div className="mainTit">
          <h2 className="poppins">Project</h2>
          <Link href={"/portfolio"} className="orignBtn orgBtn">
            <OrignBtn viewtxt="View Project" />
          </Link>
        </div>
        <FileScroll mainResult={mainResult} />
      </div>
    </section>
  );
}