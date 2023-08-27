"use client";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const FileScroll = () => {
  const scrollRef = useRef(null);
  const emojiVariants = {
    hidden: { opacity: 1, rotate: 0 },
    visible: {
      opacity: 1,
      rotate: 3,
      transition: {
        rotateY: {
          duration: 0.3,
        },
        y: {
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.01,
          duration: 0.3,
        },
      },
    },
  };
  const items = [
    ["⚽️", "축구공"],
    ["🏀", "농구공"],
    ["🏈", "럭비공"],
    ["⚾️", "야구공"],
    ["🎱", "볼링공"]
  ];

  return (
    <div ref={scrollRef} className="mainProScroll">
      <div className="sticky">
      {items.map(([emoji, label], i) => (
          <motion.div
            className="emoji"
            key={i}
            variants={emojiVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef, once: false, amount: 0.3 }}
          >
            <span role="img" aria-label={label}>
              {emoji}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FileScroll;
