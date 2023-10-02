"use client";
import Link from "next/link";
import OrignBtn from "./components/OrignBtn";
import { motion } from "framer-motion";
import FileScroll from "./components/FileScroll.js";

export default function Section04({ mainResult }) {
  return (
    <section id="section04" className="section section04">
      <div className="inner">
        <motion.div
          className="mainTit"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <h2 className="poppins">Project</h2>
          <Link href={"/portfolio"} className="orignBtn orgBtn">
            <OrignBtn viewtxt="View Project" />
          </Link>
        </motion.div>
        <FileScroll mainResult={mainResult} />
      </div>
    </section>
  );
}
