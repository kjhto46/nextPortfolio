import { motion } from "framer-motion";

const fileVariants = {
  start: {},
  end: {
    transition: {
      type: "linear",
      duration: 0.5,
    },
  },
};

const circleVariants = [
  {
    start: {
      rotate: 0,
    },
    center: {
      rotate: 0,
    },
    end: {
      x: 10,
      y: 50,
      rotate: -4,
    },
  },
  {
    start: {
      rotate: 0,
    },
    center: {
      rotate: 0,
    },
    end: {
      x: -10,
      y: 50,
      rotate: 4,
    },
  },
  {
    start: {
      y: 60,
      rotate: 0,
    },
    center: {
      y: 60,
      rotate: 0,
    },
    end: {
      y: 60,
      rotate: 0,
    },
  },
];

export default function FileScroll({ mainResult }) {
  return (
    <div className="mainProScroll">
      <div className="sticky">
        {mainResult.map((a, i) => {
            return (
              <motion.div
                variants={fileVariants}
                initial="start"
                whileInView="end"
                viewport={{ once: false, amount: 0.95 }}
                className={`file file${i}`}
                key={i}
              >
                <motion.div variants={circleVariants[i]} className="fileCon">
                  <div className="fileHead"></div>
                  <div className="flexAreabg"></div>
                  <div className="flexArea">
                    <figure
                      style={{ backgroundImage: `url(${mainResult[i].wimg})` }}
                    ></figure>
                    <div className="txtArea">
                      <h2>{mainResult[i].name}</h2>
                      <ul>
                        <li>{mainResult[i].responsive}</li>
                        <li>{mainResult[i].wdate}</li>
                        <li>
                          <a href={mainResult[i].wsite} target="_blank">
                            페이지 이동
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
        })}
      </div>
    </div>
  );
}
