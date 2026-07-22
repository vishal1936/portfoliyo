import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiOutlineChevronDown } from "react-icons/hi";
import HeroText from "./HeroText";

const HeroMain = () => {
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      className="pt-32 md:pt-40 pb-20 relative"
      style={{
        backgroundImage:
          "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgba(21,209,233,0.08), transparent 70%)",
      }}
    >
      <div className="flex flex-col max-w-[900px] mx-auto justify-center items-center relative px-4 text-center">
        <HeroText />
      </div>

      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-80}
        to="about"
        className="hidden md:flex flex-col items-center gap-1 absolute left-1/2 -translate-x-1/2 -bottom-2 cursor-pointer text-lightGrey hover:text-cyan transition-colors duration-300"
      >
        <span className="text-[11px] uppercase tracking-[3px] font-special font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <HiOutlineChevronDown className="text-xl" />
        </motion.div>
      </Link>
    </div>
  );
};

export default HeroMain;
