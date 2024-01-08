import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      description:
        "Full Stack E-Commerce Website Using React JS, MongoDB, Express & Node JS.",
    },
    {
      title: "Project 2",
      description: "Car Website Header Design In React JS.",
    },
    {
      title: "Project 3",
      description:
        "Build An AI Image Generator App In React Using OpenAI - Like DALL-E Image Generation App.",
    },
    {
      title: "Project 4",
      description: "Login form using React js.",
    },
    {
      title: "Project 5",
      description: "Farm Management System Using HTML CSS And JavaScript.",
    },
    {
      title: "Project 6",
      description: "Cofee Shop Using HTML CSS And JavaScript.",
    },
    // Add more project data as needed
  ];

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          "I've built a Full Stack E-Commerce Website. Additionally, I've
          crafted visually appealing interfaces, like the Car Website Header in
          React, and explored cutting-edge technologies with an AI Image
          Generator App using OpenAI and also includes a practical React-based
          Login Form and projects like a Farm Management System and a Coffee
          Shop Website, highlighting my expertise in frontend technologies."
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectData.map((project, index) => (
            <a key={index} href="https://github.com/israthnr">
              <Project
                title={project.title}
                description={project.description}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
