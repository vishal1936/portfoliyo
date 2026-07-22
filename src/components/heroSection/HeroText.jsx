import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../../framerMotion/variants";
import { FaLinkedinIn, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const techStack = [
  { icon: FaReact, label: "React" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiTailwindcss, label: "Tailwind" },
];

const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center items-center text-center">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex items-center gap-2 border border-cyan/40 bg-cyan/10 rounded-full px-4 py-1.5"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan"></span>
        </span>
        <p className="text-sm text-cyan font-special font-bold uppercase tracking-wide">
          Open to new opportunities
        </p>
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-xl sm:text-2xl lg:text-3xl uppercase text-lightGrey tracking-[6px]"
      >
        Full Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-orange font-bold uppercase leading-[0.95]"
      >
        Vishal <br />
        Prajapati
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-lg sm:text-xl mt-2 text-lightGrey max-w-2xl"
      >
        I design and build{" "}
        <span className="text-white font-semibold">
          scalable, production-grade MERN stack applications
        </span>{" "}
        — from secure REST APIs to polished, user-centric interfaces —
        backed by 1+ year of real-world engineering experience.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-4"
      >
        <button className="btn-primary">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="contact"
            className="cursor-pointer"
          >
            Let's Talk
          </Link>
          <HiOutlineArrowDown className="rotate-[-45deg]" />
        </button>
        <a
          href="/Vishal_Prajapati_Resume.pdf"
          download
          className="btn-outline"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex items-center gap-3 mt-1"
      >
        <a
          href="https://www.linkedin.com/in/vishal-prajapati-918114286/"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-lightBrown text-lightGrey hover:text-black hover:bg-cyan hover:border-cyan transition-all duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/vishal1936"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-10 flex items-center justify-center rounded-full border border-lightBrown text-lightGrey hover:text-black hover:bg-cyan hover:border-cyan transition-all duration-300"
        >
          <FaGithub />
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 mt-6 pt-6 border-t border-lightBrown/50 w-full max-w-2xl"
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 text-lightGrey hover:text-cyan transition-colors duration-300"
          >
            <tech.icon className="text-base" />
            <span className="text-xs font-special font-bold uppercase tracking-wide">
              {tech.label}
            </span>
            {index < techStack.length - 1 && (
              <span className="text-lightBrown ml-1.5">·</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
