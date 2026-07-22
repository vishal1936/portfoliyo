import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiPrisma,
  SiJsonwebtokens,
  SiCplusplus,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: IoLogoJavascript },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "bcrypt", icon: RiLockPasswordLine },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

const AllSkills = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.1 * index)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card p-6 hover:border-cyan/40 transition-all duration-500"
        >
          <h3 className="text-cyan font-bold text-lg uppercase tracking-wide mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 hover:border-orange hover:-translate-y-1 transition-all duration-300"
              >
                <skill.icon className="text-orange text-lg" />
                <span className="text-white text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;
