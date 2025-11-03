import React, { useState } from "react";
import "./port.css";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];
  return (
    <div className="nav_blk">
      <div className="nav">
        <p className="portfolio_name">portfolio</p>
        <div className="resume_div">
          <a
          href="https://drive.google.com/file/d/1282UKNlaum8mcvVBXdfFgIDumZxHPXkK/view?usp=sharing"
          target="_blank"
          >
          <button className="resume_btn cursor-pointer">Resume</button>
          </a>
          {menu ? (
            <CgClose className="menu_bar cursor-pointer text-white" />
          ) : (
            <CgMenuRightAlt
              onClick={() => setMenu(!menu)}
              className="menu_bar cursor-pointer text-white"
            />
          )}
        </div>
      </div>
      <Menu menu={menu} setMenu={setMenu} navItems={navItems} navigate={navigate} />
    </div>
  );
};

const Menu = ({ menu, setMenu, navItems, navigate }) => {
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenu(false)}
          className="bg-slate-900/30 fixed inset-0 z-50 flex justify-center"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
            transition={{ duration: 0.3 }}
            className="navigation_menu"
          >{navItems.map((item, index) =>{
            return (
              <div className="navigation_element_blk cursor-pointer" onClick={() => navigate(item.path)}>
              <motion.div
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.3, delay: index * 0.2}}
              className="w-[90%] flex justify-between items-center pb-[10px]">
                <p className="navigation_element">{item.name}</p>
                <MdOutlineKeyboardArrowRight size={15} />
              </motion.div>
            </div>
            )
          })}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Navbar;
