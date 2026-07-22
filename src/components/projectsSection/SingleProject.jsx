import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, description, tech, badge }) => {
  const isLeft = align === "left";
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex w-full flex-col-reverse items-center gap-10 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between`}
    >
      <div className={`flex-1 flex flex-col gap-3 items-center ${isLeft ? "md:items-start" : "md:items-end"}`}>
        {badge && <span className="chip">{badge}</span>}
        <h2 className="text-2xl md:text-3xl text-orange font-bold">{name}</h2>
        <h3
          className={`text-lg font-thin text-lightGrey font-special text-center ${
            isLeft ? "md:text-left" : "md:text-right"
          }`}
        >
          {year}
        </h3>
        <p
          className={`text-white/80 text-[15px] leading-relaxed text-center ${
            isLeft ? "md:text-left" : "md:text-right"
          }`}
        >
          {description}
        </p>
        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}>
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer mt-2"
        >
          View Project <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="flex-1 max-h-[260px] max-w-[440px] w-full rounded-xl overflow-hidden hover:scale-105 transform transition-all duration-500 relative border border-white/20 shadow-lg">
        <div className="w-full h-full bg-cyan opacity-40 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 hidden md:block"></div>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
