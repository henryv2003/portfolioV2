import { useState } from "react"
import { cn} from "@/lib/utils.js"

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "JavaScript", level: 40, category: "frontend" },
  { name: "React", level: 45, category: "frontend" },
  { name: "TypeScript", level: 30, category: "frontend" },
  { name: "Tailwind CSS", level: 40, category: "frontend" },
  { name: "Next.js", level: 40, category: "frontend" },
  { name: "Three.js", level: 40, category: "frontend" },

  //Backend
  {name: "Node.js", level: 40, category: "backend"},
  {name: "Express.js", level: 40, category: "backend"},
  {name: "MongoDB", level: 20, category: "backend"},

  //tools
  {name: "Git/Github", level: 60, category: "tools"},
  {name: "VS Code", level: 70, category: "tools"},
  {name: "Pycharm", level: 50, category: "tools"},
];

const categories = ['all', 'frontend', 'backend', 'tools'];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter((skill)=> activeCategory === "all" || skill.category === activeCategory);
    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary">Skills</span>
              </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map((category, key) => (
                    <button key={key} onClick={()=> setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalized",
                      activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text=foreground hover:bg-secondary"
                    )}>
                      {category }
                    </button>
                  ))}
                </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-2 rounded-2 origin-left animate-[grow_1.5s ease-out]"
                    style={{width: skill.level + "%"}}  />
                </div>
                <div className="mt-1 text-right">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
          </div>
        ))}
        </div>
      </div>
      </section>
  )}