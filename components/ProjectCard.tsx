import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({ title, description, image, tags }: ProjectProps) {
  return (
    <div className="project-card">
      <div className="flex-shrink-0 w-full md:w-1/3 h-40 md:h-auto relative rounded-md overflow-hidden">
        <Image 
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}