import ContactMeLeft from "./ContactMeLeft";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="education"
      className="max-w-[1200px] mx-auto px-4 mt-[100px] flex flex-col items-center justify-center text-center"
    >
      <p className="section-eyebrow">Academic Background</p>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
        <span className="text-cyan">Education</span>
      </h2>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full max-w-[700px]"
      >
        <ContactMeLeft />
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
