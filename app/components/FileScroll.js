"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const fileVariants = {
  start: {
  },
  end: {
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const circleVariants = [{
  start: {
    rotate: 0,
  },
  center:{
    rotate:0,
  },
  end: {
    y: 80,
    rotate: 5,
  },
}, {
  start: {
    rotate: 0,
  },
  center:{
    rotate:0,
  },
  end: {
    y: 50,
    rotate: -3,
  },
}, {
  start: {
    rotate: 0,
  },
  center:{
    rotate:0,
  },
  end: {
    y: 60,
    rotate:0,
  },
}
];

const FileScroll = () => {
  const items = [
    ["⚽️", "축구공", ""],
    ["🏀", "농구공", ""],
    ["🏈", "럭비공", ""],
  ];

  return (
    <div className="mainProScroll">
      <div className="sticky">
        {items.map(([contTit, contxt, contImg], i) => (
          <motion.div variants={fileVariants} initial="start" whileInView="end" viewport={{ once:false, amount: 0.95 }} className={`file file${i}`} key={i}>
            <motion.div
              variants={circleVariants[i]}
              className="fileCon"
            >
              <h2>{contTit}</h2>
              <div className="flexArea">
                <figure><img src={contImg} alt={contTit} /></figure>
                <div className="txtArea">{contxt}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FileScroll;
