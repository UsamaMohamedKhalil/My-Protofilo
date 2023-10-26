import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          OSAMA MOHAMED
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/osamamohamedharbi" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/usamaharbi/?fbclid=IwAR3VOkH2cWA_WgaAsgRokNg5QwGo-M7yCy5eSSThrYSPN_4m7bioCeqQONQ"
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/usama-mohamed-679522209/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="" />
          </a>
          <a
            href="https://www.tiktok.com/@hharbi_?fbclid=IwAR271bDltvdy6Tk-a94WF1gbEtvlVqfVc7GzZBCBJ5YInxDEaXEXnywpmgY"
            target="_blank"
          >
            <img src="/tiktok.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
