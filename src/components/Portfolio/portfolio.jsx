import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Smart Insulin Refrigerator",
    img: "https://media.licdn.com/dms/image/C5622AQGP3kbwGPSc2g/feedshare-shrink_800/0/1670237843797?e=1711584000&v=beta&t=1gJAHp0C6A9WWj26ei0mY_ZthLa6NoglbN6pHEcB_Qk",
    desc: "Smart Insulin refrigerator is a refrigerator whic helps pation to store the insulin. It acts as a refrigerator under the cost of just 500 INR. This article was publish in BBC News last year",
  },
  {
    id: 2,
    title: "Winner at IdeaSpark 2023",
    img: "https://media.licdn.com/dms/image/D5622AQErCcuE6XMzeA/feedshare-shrink_2048_1536/0/1700718426371?e=1711584000&v=beta&t=dVEfKk-wmwwSMvqZIJGLNPYGNEBiPqu6IiCuMFbcNto",
    desc: "So our project Smart Insulin Refrigerator won the first prize at NEC in IdeaSpark competition. I was awarded 50000/-INR and was got opportunity to incubate my product as astratup.",
  },
  {
    id: 3,
    title: "",
    img: "https://media.licdn.com/dms/image/D5622AQErsH8BKYy92w/feedshare-shrink_800/0/1696684102024?e=1711584000&v=beta&t=vOEbgeXPLFfqPcmfMgBGnnyzpGwZL8TDPaDyjXBV6-U",
    desc: "During my internship at ABB, I spearheaded a PowerApps project enabling workers to streamline data entry, effectively reducing operational time while ensuring seamless integration with Excel for comprehensive data management. My experience innovating with PowerApps at ABB empowered workers to optimize efficiency, bridging the gap between manual processes and digital solutions for enhanced productivity.",
  },
  {
    id: 4,
    title: "Smart Lottery",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuriaBis6boQo6e5jcKE3wClg2PqlDAoByow&usqp=CAU",
    desc: "Introducing a transparent raffle platform powered by Ethereum, ensuring fair participation and equal chances for all. Join various raffles with confidence, knowing that our secure system eliminates fraud, providing an equitable opportunity for every participant to win.",
  },
  {
    id: 5,
    title: "KaamWala.com",
    img: "data:image/png;base64,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",
    desc: " A revolutionary platform where you can effortlessly hire diverse professionals for various tasks, from plumbing to haircuts, all in one convenient website. Say goodbye to the hassle of multiple searches and welcome the simplicity of finding skilled kaam walas for your everyday needs, all with just a few clicks.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  return (
    <section id="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
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
