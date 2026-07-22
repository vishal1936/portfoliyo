import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

const CountUp = ({ end, suffix = "", duration = 1.6, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = Math.round(value) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, end, suffix, duration, count]);

  return (
    <p ref={ref} className={className}>
      0{suffix}
    </p>
  );
};

export default CountUp;
