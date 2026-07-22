import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertificate = ({ name, year, align, image, link, details }) => {
  const isLeft = align === "left";
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`flex w-full flex-col-reverse items-center gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div className="flex-1">
        <h2 className={`text-2xl md:text-3xl text-orange text-center ${isLeft ? "md:text-right" : "md:text-left"}`}>
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-white font-special text-center ${
            isLeft ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <p
          className={`text-lightGrey text-sm mt-2 mb-2 text-center ${
            isLeft ? "md:text-right" : "md:text-left"
          }`}
        >
          {details}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-center ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          View Certificate <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="flex-1 max-h-[220px] max-w-[400px] w-full rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white/20 shadow-lg">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 hidden md:block"></div>
        <img src={image} alt="certificate" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleCertificate;
