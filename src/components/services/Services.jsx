import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            As a digital marketer, I am responsible for developing and
            implementing digital marketing strategies for clients. I create
            innovative and effective online advertising campaigns. I manage and
            analyze email campaigns and social media to increase brand awareness
            and attract more potential customers. I use analytics tools to
            measure and analyze data and identify successful strategies. I work
            on improving the user experience and increasing conversion rates. I
            stay updated with current trends in digital marketing and strive for
            continuous innovation and development.
          </p>
          <a
            href="https://www.canva.com/design/DAFyXFeEvaU/ldFbH58JSXJDDN9XyDOM9A/view?utm_content=DAFyXFeEvaU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
          >
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Programming</h2>
          <p>
            As a web developer, I am responsible for developing and designing
            websites using various programming languages such as HTML, CSS, and
            JavaScript. I create, optimize, and maintain websites to ensure
            smooth performance and a good user experience. I have skills in
            creating attractive and responsive user interfaces. I work on
            integrating websites with databases and servers. I am familiar with
            frameworks like React and am proficient in content management
            systems like WordPress. I have knowledge of security concepts,
            performance optimization, and technical enhancements. I am a team
            player and a problem solver, dedicated to achieving business goals.
          </p>
          <a
            href="https://www.canva.com/design/DAFyXYD-ICM/lrJSXYK3xrylUruxJyy3Nw/view?utm_content=DAFyXYD-ICM&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
          >
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
