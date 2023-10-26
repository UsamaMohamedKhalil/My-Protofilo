import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Level Up Get Fans",
    img: "/levelgetfans.png",
    link: "https://levelupgetfans.vercel.app/login",
    desc: "Our platform helps you boost likes, views, and followers on social media. We provide effective and secure services to enhance your social presence and engagement. Utilize our tools and strategies to increase likes, views, and followers quickly. Trust us for quality services and achieving your social media success.",
  },
  {
    id: 2,
    title: "virtual e-commerce website for Nike",
    link: "https://nike-store-usama.vercel.app/",
    img: "/nike.png",
    desc: "A virtual e-commerce website for Nike is an online platform that aims to facilitate the shopping process for customers and enhance their experience. The design is characterized by modernity and elegance, with a strong emphasis on representing Nike's powerful brand.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              <button>SEE DEMO</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
