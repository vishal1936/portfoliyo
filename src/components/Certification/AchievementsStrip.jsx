import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaTrophy, FaMedal } from "react-icons/fa";

const achievements = [
  {
    icon: FaTrophy,
    title: "AIR 1078 in NIMCET 2023",
    detail: "Ranked among 20,000+ candidates nationwide for M.C.A admission.",
  },
  {
    icon: FaMedal,
    title: "Top Intern Award",
    detail:
      "Recognized for consistent sprint delivery, problem-solving, and exceptional code quality.",
  },
];

const AchievementsStrip = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto mt-16">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.1 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="glass-card p-6 flex items-start gap-4 hover:border-orange/50 transition-all duration-500"
        >
          <div className="h-12 w-12 shrink-0 rounded-full bg-orange/10 border border-orange/40 flex items-center justify-center text-orange text-xl">
            <item.icon />
          </div>
          <div>
            <p className="text-white font-bold">{item.title}</p>
            <p className="text-lightGrey text-sm mt-1">{item.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementsStrip;
