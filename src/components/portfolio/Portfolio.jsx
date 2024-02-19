import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Caption Craft",
    imgs: [
      "/captioncraft/captioncraft1.png",
      "/captioncraft/captioncraft2.png",
      "/captioncraft/captioncraft3.png",
      "/captioncraft/captioncraft4.png",
      "/captioncraft/captioncraft5.png"
    ],
    link: "https://phenomenal-sorbet-427c43.netlify.app",
    desc: "This merges art with AI to transform digital art creation. Utilizing machine learning and GANs, it offers a platform for personalized art generation and sharing. This project redefines digital artistic expression, creating a vibrant community for art enthusiasts.",
    skills: "Skills : WebSockets · Express.js · Generative Adversarial Networks (GANs) · Redux.js · Socket.io · Web Performance Optimization · REST APIs"
  },
  {
    id: 2,
    title: "Kanbas - LMS",
    imgs: [
      "/kanbas/kanbas.png",
      "/kanbas/kanbascourses.png",
      "/kanbas/kanbasgrades.png"
    ],
    link: "https://storied-fairy-cd8276.netlify.app/#/Kanbas/Dashboard",
    desc: "Revamped an LMS to support learners, integrating Docker for efficient setup, advanced load balancing for high availability, and Express.js with MongoDB for robust backend functionality. Enhanced frontend performance with React.js, ensuring a dynamic and seamless educational experience.",
    skills: "Skills: Docker · Load Balancing · Express.js · MongoDB · React.js · API Development · System Optimization · Performance Enhancement"
  },
  {
    id: 3,
    title: "Electricity App",
    imgs: [
      "/electricity/electricity1.png",
      "/electricity/electricity2.png",
      "/electricity/electricity3.png"

    ],
    link: "https://play.google.com/store/apps/details?id=com.saideep.electricity&hl=en_US&pli=1",
    desc: "The Electricity Management Mobile App, crafted with Java, Firebase, and Google Cloud, revolutionizes power outage reporting through geo-location. It categorizes complaints with 96.36% accuracy using k-means clustering and NLP, significantly enhancing resolution efficiency. In Hyderabad, it halved call center staffing, demonstrating technology's impact on improving traditional sectors like electricity supply.",
    skills: "Skills: Java · Firebase Database · Google Cloud · Geo-location Services · k-means Clustering · Natural Language Processing (NLP) · Data Analysis · Problem Resolution Efficiency · Operational Process Enhancement"
  },
  {
    id: 4,
    title: "Portfolio",
    imgs: [
      "/saideepportfolio.png",
    ],
    link: "#",
    desc: "In this, I crafted a responsive web application featuring CSS snap scroll, React Framer Motion animations, and SVG effects. I built a responsive navbar, animated sidebar, and implemented smooth scroll and parallax effects across various sections. Additionally, I integrated email functionality and ensured mobile responsiveness. The development process concluded with deploying the app to shared hosting.",
    skills : "Skills: CSS Snap Scroll, React.js, Framer Motion, SVG Animations, Parallax Effect, Responsive Design, Email Integration in React, Deployment."
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [activeImage, setActiveImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDotClick = (index) => {
    setActiveImage(index);
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {item.imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Project ${item.id}`}
                style={{display: index === activeImage ? 'block' : 'none'}}
              />
            ))}
            <div className="dots">
              {item.imgs.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeImage ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.skills}</p>
            <button onClick={() => window.open(item.link, '_blank')}>See Demo</button>
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
