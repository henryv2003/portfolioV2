import { Description } from "@radix-ui/react-toast"

const projects =  [
  {
    id: 1,
    title: "ThaiKoket",
    Description: "Thai cusine",
    image: "src/projects/thaikoket.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://thaikoketkalix.se",
    githubUrl: "https://github.com/henryv2003/thaikoketkalix.github.io",
  },

];

export const ProjectsSection = () => {
  return ( 
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my projects, each project was carefully crafted with attention to details,
            performance and user experience.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => 
          (
              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover-110" />
                </div>
              </div>
              ))}
          </div>
        
    </div>
  </section>
)}