import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
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
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer">
        <p>
          Focus On Getting Your Projects and
          <br /> Brands Grow and Move Forward!
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
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Buiness/Projects
          </h1>
          <button>What I do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            Harnessing efficiency and expertise, I'll construct your website
            with precision, ensuring every detail aligns with your goals. From
            conception to launch, I streamline the process, delivering a
            polished digital presence that stands out.
          </p>
          <button>Enquire</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Blockchain Development</h2>
          <p>
            Elevate your business with cutting-edge blockchain solutions
            tailored to your needs. From decentralized applications to smart
            contracts, I specialize in crafting innovative blockchain projects
            that drive efficiency and security. Trust in my expertise to unlock
            the potential of blockchain technology for your company's success.
          </p>
          <button>Enquire</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>PowerApps</h2>
          <p>
            Empower your company with bespoke PowerApps solutions designed for
            seamless integration and enhanced productivity. From intuitive user
            interfaces to robust backend systems, I specialize in crafting
            tailored PowerApp projects to streamline your workflows.
          </p>
          <button>Enquire</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Projects building</h2>
          <p>
            Transform your business with bespoke hardware solutions crafted to
            amplify efficiency and innovation. From concept to prototype, trust
            in my expertise to bring your hardware projects to life with
            precision and ingenuity.
          </p>
          <button>Enquire</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
