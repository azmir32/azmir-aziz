import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';


export default function Hero() {
  // Display only the first 2 projects in the hero section
  const featuredProjects = projects.slice(0, 2);
  
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/10 bg-primary/5 text-primary">
          <span className="text-xl mr-2">👋</span>
          <span className="text-sm font-medium">Hello there! I'm Azmir</span>
        </div>
        
        <div className="space-y-4 max-w-2xl">
          <p className="text-lg text-muted-foreground">
            I'm a full-stack developer that loves building products and web apps
          </p>
          <p className="text-lg text-muted-foreground">
            I'm a full-stack developer with years of experience building scalable web apps that are performance optimized and good looking.
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">What I've been working on</h2>
        
        <div className="space-y-6">
          {featuredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
          
        </div>
      </div>
      <div>
        
      </div>
    </div>
    
  );
}