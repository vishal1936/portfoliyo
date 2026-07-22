import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import MoreProjectCard from "./MoreProjectCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const featuredProjects = [
  {
    name: "GOD API — Universal API Gateway Platform",
    year: "2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/vishal1936",
    badge: "Featured",
    description:
      "A robust, scalable API gateway enabling unified access to multiple third-party APIs through a single API key — with intelligent request routing, OAuth authentication, provider abstraction layers, and a real-time analytics dashboard.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "OAuth", "JWT"],
  },
  {
    name: "SmartCare — Patient Appointment Platform",
    year: "Feb 2025",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://smartcare-patient-appointment-syste.vercel.app/",
    badge: "Featured",
    description:
      "A role-based healthcare management system with appointment booking and complete medical records management — featuring separate patient and doctor dashboards with real-time sync and intelligent scheduling.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
  },
];

const moreProjects = [
  {
    name: "Music Man Premium",
    year: "Jun 2024",
    image: "/images/website-img-1.jpg",
    link: null,
  },
  {
    name: "Pokemon Explorer",
    year: "Aug 2024",
    image: "/images/website-img-2.webp",
    link: "https://pokemon-web-gray.vercel.app/",
  },
  {
    name: "Food Delivery App",
    year: "Mar 2025",
    image: "/images/website-img-4.jpg",
    link: "https://restropilot-app-v2.vercel.app/",
  },
  {
    name: "Finwise — Finance Dashboard",
    year: "Aug 2025",
    image: "/images/website-img-4.jpg",
    link: "https://finwise-smart-secure-simple-financi.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[1000px] mx-auto mt-12">
        {featuredProjects.map((project, index) => (
          <SingleProject key={index} {...project} />
        ))}
      </div>

      <div className="mt-24">
        <h3 className="text-2xl text-white font-bold text-center mb-8">
          More <span className="text-cyan">Projects</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {moreProjects.map((project, index) => (
            <MoreProjectCard key={index} {...project} delay={0.1 * index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsMain;
