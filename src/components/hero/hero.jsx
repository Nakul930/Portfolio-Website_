import "./hero.scss";
import { motion } from "framer-motion";
import Parralax from "./components/parralax/Parralax";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/Contact";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      duration: 20,
      ease: "linear", // Added ease to smooth out the animation
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>NAKUL TIWARI</motion.h2>
          <motion.h1 variants={textVariants}>
            Blockchain Developer <br /> and Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} href="#portfolio">
              See the latest work
            </motion.button>
            <motion.button variants={textVariants} href="#contact">
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingtextcontainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <h1>Content-Writer Developer Innovator Engineer</h1>
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
