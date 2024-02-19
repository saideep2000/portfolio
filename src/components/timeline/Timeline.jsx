import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import './timeline.scss';

const itemVariants = {
  offscreen: {
    x: -150,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Timeline = () => {
  const ref = useRef();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      title: "Master of Science in Computer Science",
      subtitle: "Northeastern University, Boston, MA, USA",
      duration: "Jan 2023 - Present",
      isEducation: true,
      grade : "Grade : 3.7",
      details: "Courses: Algorithms, Web Development, Program Design Paradigm, Scalable Distribution Systems",
      logo : "/northeastern-logo.svg"

    },
    {
      title: "Backend Engineer - Intern",
      subtitle: "SHIASH , Chennai, India",
      duration: "Oct 2021 – Mar 2022",
      isEducation: false,
      skills: "Skills: Spring Boot, AWS, PostgreSQL, Redis, Docker, WebSocket",
      details: "Contribution : I led the development of a scalable e-commerce platform, optimizing API performance with a microservices architecture and advanced caching. Implementing a CI/CD pipeline with Docker and Jenkins, I reduced deployment times by 84%, enabling faster market responsiveness. My enhancements to AWS infrastructure and rigorous JUnit testing achieved 99.7% uptime and a 93% first-time deployment success rate, solidifying the platform's industry-leading reliability.",
      logo : "/shiash_logo.png"
    },

    {
      title: "Full Stack Engineer – Remote Intern",
      subtitle: "Sri Sigma Technologies, Toronto, Canada",
      duration: "Jan 2021 – Aug 2021",
      isEducation: false,
      skills: "Skills: React, Node.js, AWS, RESTful APIs, Jest, TypeScript",
      details: "Contributions: During my stint at Sri Sigma Technologies, I contributed to building an EdTech website, leveraging React, Node.js, and AWS to craft a seamless digital learning experience. I led API development, boosting data efficiency by 40%, and improved user interfaces with React, reducing errors significantly. My efforts in optimizing API endpoints cut loading times by over half, marking a period of substantial professional development in creating scalable, user-focused web applications.",
      logo : "/sri_sigma_logo.jpg"
    },

    {
      title: "Master of Technology in Integrated Software Engineering",
      subtitle: "Vellore Institute of Technology, India",
      duration: "Aug 2017 - Sep 2022",
      isEducation: true,
      grade : "Grade : 9.34",
      details: "Courses : Cloud Computing, Software Configuration Management, Mobile Application Development, Operating Systems, Data Analytics and Artificial Intelligence",
      logo : "/Vit_logo.png"
    },
    // Add more timeline items here
  ];

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
        <div className="timelineContainer">
          {timelineData.map((item, index) => (
            <div className="timelineItemContainer" key={index}>
              <img src={item.logo} alt={`${item.title} logo`} className="logo" />
              <div className="timelineLine"></div>
              <motion.div
                className={`timelineItem ${item.isEducation ? 'education' : 'work'}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
                <div className="duration">{item.duration}</div>
                {hoveredIndex === index && (
                  <><div className="details">
                    {item.isEducation ? item.grade : item.skills}
                  </div><div className="details">
                      {item.details}
                    </div></>
                )}
              </motion.div>
            </div>
          ))}
        </div>
    </motion.div>
    
  );
};

export default Timeline;
