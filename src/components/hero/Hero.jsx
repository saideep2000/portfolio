import React from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./hero.scss";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  const handleButtonClick = (message) => toast(message);

  const handleDownloadClick = () => {
    handleButtonClick('Resume Downloaded!');
  
    const link = document.createElement("a");
    link.href = "/Saideep_Samineni_Resume.pdf";
    link.download = "Saideep_Samineni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTranscriptClick = () => {
    handleButtonClick('Transcript  Downloaded!');
  
    const link = document.createElement("a");
    link.href = "/Saideep_Samineni_Grad_Transcripts.pdf";
    link.download = "Saideep_Samineni_Grad_Transcripts.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const link2 = document.createElement("a");
    link2.href = "/Saideep_Samineni_UnderGrad_Transcripts.pdf";
    link2.download = "Saideep_Samineni_UnderGrad_Transcripts.pdf";
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  };

  const handleContactClick = () => {
    handleButtonClick('Mail Invoked!');

    window.location.href ="mailto:samineni.sa@northeastern.edu?subject=Contact from Portfolio"
  };

  return (
    <div className="hero">
      <ToastContainer />
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>SAIDEEP SAMINENI</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack and Software Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button 
            variants={textVariants} 
            onClick={() => handleDownloadClick()}
            >
              Download Resume
            </motion.button>
            <motion.button 
            variants={textVariants} 
            onClick={() => handleDownloadTranscriptClick()}
            >
              Download Transcripts
            </motion.button>
            <motion.button 
            variants={textVariants} 
            onClick={() => handleContactClick()}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Saideep Samineni
      </motion.div>
      <div className="imageContainer">
        <img src="/saideep.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
