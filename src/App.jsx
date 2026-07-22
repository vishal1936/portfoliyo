import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import AmbientBackground from "./components/AmbientBackground";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import CertificateMain from "./components/Certification/CertificateMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <ScrollProgress />
      <AmbientBackground />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <ExperienceMain />
      <ProjectsMain />
      <SkillsMain />
      <SubSkills />
      <CertificateMain />
      <ContactMeMain />
      <FooterMain />
      <BackToTop />
    </main>
  );
}

export default App;
