import { ProjectGrid } from "./sections/ProjectSection";
import HeroSection from "./sections/HeroSection";
import NavBarSection from "./sections/NavBarSection";
import CertificateGrid from "./sections/CertificateSection";
import Sidebar from "./sections/SideBar";
import { Experience } from "./sections/ExperienceSection";
import { InfiniteMovingSkills } from "./sections/SkillSection";

function App() {
  // bg-gradient-to-br from-black via-neutral-700 to-black bg-cover
  return (
    <>
      <div className="bg-black overflow-x-hidden">
        {/* <div className="absolute top-[500px] left-[200px] w-72 h-72 rounded-full bg-purple-500 mix-blend-multiply filter animate-blob animation-delay-2000 blur-3xl "></div> */}
        {/* <div className="absolute top-[500px] left-[300px] w-72 h-72 rounded-full bg-rose-500 mix-blend-multiply filter animate-blob blur-3xl"></div> */}
        {/* <div className="absolute bottom-8 left-20 w-72 h-72 rounded-full bg-pink-300"></div> */}

        <NavBarSection />

        <main className="">
          <Sidebar />
          <section className="">
            <HeroSection />
          </section>
          <section className="">
            <ProjectGrid />
          </section>
          <section className="">
            <InfiniteMovingSkills />
          </section>
          <section className="">
            <Experience />
          </section>
          <section className="">
            <CertificateGrid />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
