import React from "react";
import "./port.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Intro = () => {
   
    const navigate = useNavigate();
  
    const initial_name = "mahesh";
    const surname = "karanam";
    const since = "since 2023";

    const x = useMotionValue(0);
    const y = useMotionValue(0);


  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const mouseMove = (e) => {
    const photo = e.target.getBoundingClientRect();

    const width = photo.width;
    const height = photo.height;

    const mousex = e.clientX - photo.left;
    const mousey = e.clientY - photo.top;

    const xpct = mousex / width - 0.5;
    const ypct = mousey / height - 0.5;

    x.set(xpct);
    y.set(ypct);
  };
    
    return (
        <div className="intro_container flex flex-col items-center">
            <div className="name_blk"
            onMouseMove={mouseMove}>
                <div className="initial_name_blk">
                <p className="initial_name overflow-hidden block whitespace-nowrap font-medium uppercase">
                    {initial_name.split("").map((letter, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{y: "100%"}}
                                animate={{y: "0%"}}
                                transition={{ duration: 1.5, ease: "backInOut", delay: 0.025 * index }}
                                style={{display: "inline-block"}}
                            >
                                {letter}
                            </motion.span>
                        );
                    })
                    }
                </p>
                </div>
                <div className="surname_blk">
                <p className="surname overflow-hidden block whitespace-nowrap font-medium uppercase">
                    {surname.split("").map((letter, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{y: "100%"}}
                                animate={{y: "0%"}}
                                transition={{ duration: 2, ease: "backInOut", delay: 0.025 * index }}
                                style={{display: "inline-block"}}
                            >
                                {letter}
                            </motion.span>
                        );
                    })
                    }
                </p>
                </div>
                <motion.div
            initial={{y: "200%", rotateY: "180deg"}}
            animate={{y: "0%", rotateY: "0deg"}}
            transition={{ duration: 2, ease: "backInOut", delay: 0.25 * 2.5 }}
            style={{ rotateX, rotateY, borderRadius: '10px' }}
            className="profile"
          >
            <div
              style={{
                transformStyle: "preserve-3d",
                width: "90%",
                height: "90%",
                borderColor: "whitesmoke",
              }}
              className="profile_border border-2 rounded-[10px] border-whitesmoke"
            >
            </div>
          </motion.div>
            </div>
            
          <div className="story_blk">
          <div className="since_blk">
            <div className="collab">
            <p style={{textAlign: "center"}}>By collaborating with peers, I have developed</p>
            <p style={{textAlign: "center"}}>projects that showcase creativity and</p>
            <p style={{textAlign: "center"}}>technical expertise.</p>
            </div>
            <div 
            onClick={() => navigate('/about')}
            className="explore border border-[#d8e2e2] animate-bounce cursor-pointer"
            > Explore My Story</div>
            <div className="since_2023">
            {since.split(" ").map((word, wordIndex) => (
            <p className="overflow-visible block whitespace-nowrap -m-[30px] " >
                    {word.split("").map((letter, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{y: "41%"}}
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
            </div>
            <div className="under_line bg-[whitesmoke] border-t-2 border-t-[#E7EEEE]"></div>
          </div>
          </div>
          <div className="proj_container">
          <div className="proj_sub_blk">
            <div className="have text-white">
            <p style={{textAlign: "center"}}>I have built interactive websites using modern</p>
            <p style={{textAlign: "center"}}>frameworks, delivering engaging user</p>
            <p style={{textAlign: "center"}}>experiences for diverse audiences.</p>
            </div>
            <div 
            onClick={() => navigate('/projects')}
            className="view border border-[#303131] animate-bounce cursor-pointer">
              View my portfolio
            </div>
              {projects.map((project, index) => (
            <div className="projects_blk border-t border-b border-b-[#303131] border-t-[#303131] ">
              <div className="projects_sub flex justify-between items-center">
                <p className="proj_tit">{project.title}</p>
                <p className="proj_desc">{project.description}</p>
              </div>
            </div>
              ))}
            </div>
          </div>
          </div>
    )
}

export default Intro;

const projects = [
  {
    title: " Online Exam Proctoring System",
    description: "ProctorQube"
  },
  {
    title: "Sports Data Analytics Platform",
    description: "Victory Vault"
  },
  {
    title: "AI Social Media Post Generator",
    description: "Content Creator",
  },
  {
    title: "Food Donation",
    description: "Hungry Savers",
  }
]