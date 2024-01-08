import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          SERVICE
        </p>
        <LineGradient width="mx-auto w--5" />
        <p className="mt-10">My Services are</p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-2">
        <motion.div
          className="mx-auto relative max-w-full h-[350px] flex flex-col items-center p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-sm mt-2">Web Developer</p>
        </motion.div>

        <motion.div
          className="mx-auto relative max-w-full h-[350px] flex flex-col items-center p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-sm mt-2">Web Developer</p>
        </motion.div>

        <motion.div
          className="mx-auto relative max-w-full h-[350px] flex flex-col items-center p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3 w-2 h-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-sm mt-2">Web Developer</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
