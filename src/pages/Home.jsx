import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

  {/* Theme togglee */}
  <ThemeToggle/>
  {/* background effects */}
  <StarBackground/>
  {/* NavBar */}
  <NavBar/>
  {/* Main Content */}
  <HeroSection/>
  {/* Footer */}
</div>
}