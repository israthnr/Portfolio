import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { SiVisualstudio } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I have expierienced with Following Technolgies and Tools
          </p>
        <div className="flex justify-evenly items-center text-4xl ">
            <ImHtmlFive className="icon hover:scale-150" />
            <FaCss3 className="icon hover:scale-150 ml-4" />
            <IoLogoJavascript className="icon hover:scale-150 ml-4" />
            <FaPhp className="icon hover:scale-150 ml-4" />
            
        </div>
        <div className="flex justify-evenly items-center text-4xl  py-5">
            <FaJava className="icon hover:scale-150 " />
            <FaPython className="icon hover:scale-150 ml-4" />
            <FaReact className="icon hover:scale-150 ml-4" />
            <FaBootstrap className="icon hover:scale-150 ml-4" />
            
        </div>

        <div className="flex justify-evenly items-center text-4xl  ">
            <FaNodeJs className="icon hover:scale-150" />
            <SiExpress className="icon hover:scale-150 ml-4" />
            <SiMongodb className="icon hover:scale-150 ml-4" />
            <SiMysql className="icon hover:scale-150 ml-4" />
        </div>
          
        <div className="flex justify-evenly items-center text-4xl py-5 ">
            <FaGitAlt className="icon hover:scale-150" />
            <LuFigma className="icon hover:scale-150 ml-4" />
            <SiVisualstudio className="icon hover:scale-150 ml-4" />
            <SiIntellijidea className="icon hover:scale-150 ml-4" />
        </div>

        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >

              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
                
              />
            </div>
          ) : (
            <img alt="skills" className="z-10 ml-6 text-sm" src="assets/skills-image.png" />
          )}
        </div>
        
      </div>

     
    </section>
  );
};

export default MySkills;

