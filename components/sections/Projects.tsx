import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground max-w-2xl">
          A collection of projects I've worked on throughout my career. Each project represents 
          unique challenges and solutions.
        </p>
      </div>
      
      <div className="space-y-8">
        {projects.map(project => (
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
  );
}