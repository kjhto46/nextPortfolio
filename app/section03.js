"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

import Link from "next/link";
import OrignBtn from "./components/OrignBtn";
import MainSkill from "./components/MainSkill";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const wrap = (min, max, v) => {
    if (v < min) {
      return max - ((min - v) % (max - min));
    }
    return min + ((v - min) % (max - min));
  };

  const x = useTransform(baseX, (v) => `${wrap(-50, -0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <motion.div className="skillScroll" style={{ x }}>
      {children}
      {children}
    </motion.div>
  );
}

export default function Section03() {
  return (
    <section id="section03" className="section section03">
      <div className="inner">
        <div className="mainTit">
          <h2 className="poppins">Technology Use</h2>
          <Link href={"/about"} className="orignBtn skyblue">
            <OrignBtn viewtxt="View About" />
          </Link>
        </div>
      </div>

      <div className="parallax">
        <ParallaxText baseVelocity={2}>
          <MainSkill propsimg="sec03_img01.png" txtTit="Html" />
          <MainSkill propsimg="sec03_img02.png" txtTit="CSS" />
          <MainSkill propsimg="sec03_img03.png" txtTit="JavaScript" />
          <MainSkill propsimg="sec03_img04.png" txtTit="SCSS" />
          <MainSkill propsimg="sec03_img05.png" txtTit="React" />
          <MainSkill propsimg="sec03_img06.png" txtTit="Node.js" />
          <MainSkill propsimg="sec03_img07.png" txtTit="Next.js" />
          <MainSkill propsimg="sec03_img08.png" txtTit="PHP" />
          <MainSkill propsimg="sec03_img09.png" txtTit="Git" />
          <MainSkill propsimg="sec03_img10.png" txtTit="GitHub" />
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          <MainSkill propsimg="sec03_img01.png" txtTit="Html" />
          <MainSkill propsimg="sec03_img02.png" txtTit="CSS" />
          <MainSkill propsimg="sec03_img03.png" txtTit="JavaScript" />
          <MainSkill propsimg="sec03_img04.png" txtTit="SCSS" />
          <MainSkill propsimg="sec03_img05.png" txtTit="Node.js" />
          <MainSkill propsimg="sec03_img06.png" txtTit="React" />
          <MainSkill propsimg="sec03_img07.png" txtTit="Next.js" />
          <MainSkill propsimg="sec03_img08.png" txtTit="PHP" />
          <MainSkill propsimg="sec03_img09.png" txtTit="Git" />
          <MainSkill propsimg="sec03_img10.png" txtTit="GitHub" />
        </ParallaxText>
      </div>
    </section>
  );
}
