import { cn } from "@/lib/utils";
import { Key, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


const NavItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "contact"];

    const updateActiveSection = () => {
      const navEl = document.querySelector("nav");
      const offset = navEl ? navEl.offsetHeight : 0;
      const scrollPos = window.scrollY + offset + 1;
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
                        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> 
              HenryTech
            </span>{" "} Portfolio
          </span>
        </a>
        
        {/* Desktop */}
        <div className="hidden md:flex space-x-8">
          {NavItems.map((item, key) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a key={key} href={item.href}
                className={cn(
                  "transition-colors duration-300",
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        
        {/* Mobile*/}
          <button 
            onClick={() => setIsMenuOpen((prev) => !prev)} 
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}>
            <div className="flex flex-col space-y-8 text-xl">
              {NavItems.map((item, key) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a  key={key}
                      href={item.href}
                      className={cn(
                        "transition-colors duration-300",
                        isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
        </div>
      </div>
    </nav>)
}