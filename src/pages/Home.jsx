import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { SnowfallBackground } from "../components/SnowfallBackground"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme togglee */}
              <ThemeToggle/>
            {/* background effects */}
              <StarBackground/>
              <SnowfallBackground/>
            {/* NavBar */}
              <NavBar/>
            {/* Main Content */}
              <HeroSection/>
              <AboutSection/>
              <SkillsSection/>
              <ProjectsSection />
            {/* Footer */}
      </div>
}