import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "VSN International Pvt. Ltd.",
    date: "Dec 2025 – Present",
    location: "On-site / Indore",
    responsibilities: [
      "Architected and developed scalable web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designed production-grade REST APIs with comprehensive validation, error handling, and authentication.",
      "Built responsive, user-friendly frontend interfaces using React and Tailwind CSS with a focus on optimal UX.",
      "Optimized backend services and database queries, improving scalability, performance, and reliability.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Civilytix",
    date: "Oct 2024 – Nov 2025",
    location: "Remote / Indore",
    responsibilities: [
      "Built and maintained scalable full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Developed and integrated 15+ REST APIs with intelligent error handling, cutting response time by ~30%.",
      "Implemented secure authentication and authorization using JWT tokens and bcrypt encryption.",
      "Optimized database queries and backend logic, significantly enhancing performance and UX.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Manishit Technologies Pvt. Ltd.",
    date: "Jun 2024 – Sep 2024",
    location: "Indore, MP",
    responsibilities: [
      "Developed end-to-end full-stack applications using the MERN stack in a collaborative Agile environment.",
      "Designed and implemented 12+ REST APIs with comprehensive validation, authentication, and error handling.",
      "Improved API performance by ~40% through strategic database indexing and query optimization.",
      "Actively participated in code reviews, maintaining high code quality standards with senior developers.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="relative flex flex-col gap-10 mt-12 before:content-[''] before:absolute before:left-[19px] md:before:left-[27px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan before:via-orange before:to-transparent">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SingleExperience experience={experience} isLast={index === experiences.length - 1} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllExperiences;
