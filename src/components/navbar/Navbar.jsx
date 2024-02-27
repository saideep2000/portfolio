import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Saideep Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/saideep.samineni.7" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/saideep_chowdary_/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/saideep-samineni/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="" />
          </a>
          <a href="https://github.com/saideep2000" target="_blank" rel="noopener noreferrer">
            <img src="/github.webp" alt="" />
          </a>
          <a href="https://leetcode.com/saideepsamineni/" target="_blank" rel="noopener noreferrer">
            <img src="/leetcode.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
