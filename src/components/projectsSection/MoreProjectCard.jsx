import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MoreProjectCard = ({ name, year, image, link, delay }) => {
  return (
    <motion.div
      variants={fadeIn("up", delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card overflow-hidden group hover:border-cyan/40 transition-all duration-500"
    >
      <div className="h-[160px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="p-4 flex items-center justify-between gap-2">
        <div>
          <p className="text-white font-semibold">{name}</p>
          <p className="text-lightGrey text-xs">{year}</p>
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-cyan hover:text-orange transition-all duration-300 text-xl shrink-0"
          >
            <BsFillArrowUpRightCircleFill />
          </a>
        ) : (
          <span className="text-lightGrey text-xs shrink-0">Private</span>
        )}
      </div>
    </motion.div>
  );
};

export default MoreProjectCard;
