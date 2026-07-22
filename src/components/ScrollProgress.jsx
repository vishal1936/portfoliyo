import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress-track">
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </div>
  );
};

export default ScrollProgress;
