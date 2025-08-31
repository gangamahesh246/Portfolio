import React, {useState} from "react";
import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./port.css";

const Projects = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const [isOpen, setIsOpen] = useState(false);
  const [descData, setdescData] = useState(null);
  const proj_data = [
    {  
      "project_img": "food_donation.png",
      "project_name": "food donation",
      "frameworks_i_used": "html, css, js"
    },
    {
      "project_img": "victory_vault.png",
      "project_name": "victory vault",
      "frameworks_i_used": "react.js, node.js, express.js, mongoDB."
    },
    {
      "project_img": "proctorqube_main.png",
      "project_name": "ProctorQube",
      "frameworks_i_used": "react.js, node.js, express.js, mongoDB, websockets."
    }
  ]
  const proj_desc = [
    {
      "id": 1,
      "image": "donate.png",
      "description": "I developed an essential part of the Food Donation Platform, which is a system to connect food donors with receivers without any hurdles in between. Surplus food can be easily distributed through the platform. Separate logins are there for both the donor and the receiver so that each user can access their respective functionalities.Donors can quickly input the quantity, type, for the food and also their location and contact details. These are instantly reflected on the receiver's page, meaning that receivers can view available donations in real time. Receivers can then accept or decline the donation, thereby ensuring that food reaches those who need it most."
    },
    {
      "id": 2,
      "image": "stats.png",
      "description": "Victory Vault, is a web-based sports statistics platform that provides users with structured insights into various sports, similar to Crex but with a focused selection of multiple sports, like cricket, Kabaddi, Badminton, and Volleyball etc. The platform integrates a database-driven architecture, showcasing fixtures, match results, and player statistics dynamically.",
      "tech_stack": "My technical expertise includes React.js, Node.js, Express.js, MongoDB, Aggregations, API Integration, and Framer Motion for animations. I am continuously exploring new technologies to enhance my skill set and build innovative solutions."
    },
    {
      "id": 3,
      "image": "proctorqube.png",
      "description": "ProctorQube is a secure online examination and evaluate exams seamlessly. It provides separate admin and student panels with features like exam creation, real-time monitoring via webcam and screen recording, violation detection (face recognition, eye tracking, and restricted action logging), and automated result evaluation with analytics.",
      "tech_stack": "My technical expertise includes React.js, Redux, Tailwind CSS, Chart.js, face-api.js, Node.js, Express.js, MongoDB, Socket.IO.`"
    }
  ]

  const desc_index = (index) => {
  const foundObject = proj_desc.find((item) => item.id === index + 1);
  setdescData(foundObject);
  }
  return (
    <div className="main_proj_container pb-10">
      <div className="project_container">
        <Marquee className="abt_txt" speed={120} gradient={false}>
          projects<p> </p>
        </Marquee>
        <div className="projects_have">
          <p>
          I have built interactive websites using modern frameworks, delivering engaging user experiences.
          </p>
        </div>
        <div 
        onClick={() => navigate('/contact')}
        className="proj_contact border border-[#d8e2e2] cursor-pointer">
          contact me
        </div>
      </div>
      <motion.div
      style={{y: yTransform}}
      className="projects_div">
        <div className="proj1_grid">
          all projects
        </div>
        <p className="eager">I am eager to learn, grow, and contribute effectively to help clients achieve their goals.</p>
        {proj_data.map((item, index)=>{
          return(
            <div className="gridsss " key={index}>
          <div className="project_imgs" style={{
            backgroundImage: `url(${item.project_img})`
          }}></div>
          <div className="flex justify-between items-center cursor-pointer" onClick={()=>{setIsOpen(true); desc_index(index) }}>
        <p className="proj_txt">{item.project_name}</p>
        <MdOutlineKeyboardArrowRight size={25} color="black" />
        </div>
          <p className="frameworks">{item.frameworks_i_used}</p>
        </div>
          )
        })}
      </motion.div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} descData={descData} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, descData }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/50 backdrop-blur-xs flex justify-center items-center fixed inset-0 z-50 overflow-y-scroll"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="desc_box text-white rounded-lg relative overflow-hidden border-2 border-whitesmoke"
          >
            <div style={{width: "100%", height: "auto"}}>
                  <div className="desc_image" style={{backgroundImage: `url(${descData.image})`}}></div>
                  <div className="desc_text">{descData.description}</div>
                  <div className="desc_text">{descData.tech_stack}</div>
                </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Projects;


  