import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Music man premium",
    year: "Jun-2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Pockemon ",
    year: " Aug-2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://pokemon-web-gray.vercel.app/",
  },
  {
    name: "Smartcare Patient Appointmen",
    year: "Jan2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://smartcare-patient-appointment-syste.vercel.app/",
  },
  {
    name: "Restuarent ERP",
    year: "Mar-2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://restropilot-app-v2.vercel.app/",
  },
  {
    name: "Real Time chat applicaton",
    year: "jun-2025",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://restorent-erp-1vqs.vercel.app/",
  },
  {
    name: "Finwise",
    year: "Aug-2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://finwise-smart-secure-simple-financi.vercel.app/",
  },
  {
    name: "Ai Fitness",
    year: "Nov-2025",
    align: "right",
    image: "/images/website-img-4.jpg",
    link: "https://fitness-alpha-ten.vercel.app/",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
