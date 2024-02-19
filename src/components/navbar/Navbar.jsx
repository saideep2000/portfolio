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
          <a href="https://www.facebook.com/saideep.samineni.7">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/saideep_chowdary_/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/saideep-samineni/">
            <img src="/linkedin-logo.png" alt="" />
          </a>
          <a href="https://github.com/saideep2000">
            <img src="/github.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
