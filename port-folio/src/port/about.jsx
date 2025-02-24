import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./port.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="abt_container">
        <Marquee className="abt_txt" speed={120} gradient={false}>
          About me<p> </p>
        </Marquee>
        <div className="abt_collab">
          <p>
            By collaborating with peers, I have developed projects that showcase
            creativity and technical expertise.
          </p>
        </div>
        <div 
        onClick={() => navigate('/projects')}
        className="abt_view border border-[#d8e2e2] cursor-pointer">
          view my portfolio
        </div>
      </div>
      <div className="flex flex-col items-center">
      <div className="about_me pb-2">
      <div className="my_story_blk">
            {"my story".split(" ").map((word, wordIndex) => (
            <p className="my_story_txt overflow-visible block whitespace-nowrap" >
                    {word.split("").map((letter, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{y: "47%"}}
                                whileInView={{y: "0%"}}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1, ease: "backInOut", delay: 0.025 * wordIndex }}
                                style={{display: "inline-block"}}
                            >
                                {letter}
                            </motion.span>
                        );
                    })}
                </p>
             ))} 
             <div className="abt_under_line bg-[whitesmoke] border-t-2 border-t-[#E7EEEE]"></div>
            </div>
            <div className="abt_grid_container">
                <div className="gif"></div>
                <div className="grid_1">
                  <div className="abt_name_div">
                    <div className="circle"></div>
                    <p className="abt_sub_txt">About me</p>
                  </div>
                  <p className="jnr_dev">
                  Junior Web Developer | Problem Solver | 
                  </p>
                  <p className="myself">
                  I am a junior web developer with a strong foundation in full-stack development, specializing in building dynamic and data-driven web applications. With a background in Computer Science and Engineering (AIML specialization), I have a keen interest in problem-solving and leveraging modern web technologies to create seamless user experiences by integrating databases, APIs, and modern UI animations.
                  </p>
                  <p className="skills">
                  My technical expertise includes React.js, Node.js, Express.js, MongoDB, Aggregations, API Integration, and Framer Motion for animations. I am continuously exploring new technologies to enhance my skill set and build innovative solutions.
                  </p>
                </div>
                <div className="grid_2">
                  <p className="timeline">My Timeline</p>
                  <div className="grad_blk">
                    <div className="circle"></div>
                    <p className="grad_period">2023 - Present</p>
                  </div>
                  <p className="grad_matter">B.Tech in CSE (AIML Specialization) - Aditya University Currently pursuing my Bachelor’s degree, with a GPA of 7.57, focusing on AI/ML and web technologies.</p>
                </div>
                <div className="grid_3">
                <div className="grad_blk">
                    <div className="circle"></div>
                    <p className="grad_period">2020 - 2023</p>
                  </div>
                  <p className="grad_matter">Diploma in ECE Graduated with a GPA of 8.7, gaining foundational knowledge in electronics and computing.</p>
                </div>
                <div className="grid_3">
                <div className="grad_blk">
                    <div className="circle"></div>
                    <p className="grad_period">2014 - 2020</p>
                  </div>
                  <p className="grad_matter">School - Madhuri Vidyalaya Completed school education with a GPA of 9, laying a strong academic foundation</p>
                </div>
                <div className="grid_4">
                <div className="grad_blk">
                    <div className="circle"></div>
                    <p className="grad_period">2024 - March 2025</p>
                  </div>
                  <p className="grad_matter">Trainee at Technical Hub Institution Undergoing a trainee program, gaining hands-on experience in full-stack development and working on real-world projects.</p>
                </div>
            </div>
      </div>
      </div>
    </div>
  );
};

export default About;
