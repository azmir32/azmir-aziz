export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">About Me</h2>
      
      <div className="space-y-4 max-w-2xl">
        <p>
          I'm a passionate software engineer with expertise in building modern web applications. 
          My journey in technology started 7 years ago, and I've been fortunate to work on diverse 
          projects across different domains.
        </p>
        
        <p>
          I specialize in JavaScript/TypeScript ecosystems with a focus on React, Next.js, and Node.js. 
          I'm dedicated to creating accessible, performant, and user-friendly applications that solve 
          real-world problems.
        </p>
        
        <p>
          When I'm not coding, you can find me hiking outdoors, reading about new technologies, 
          or contributing to open-source projects.
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Frontend</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Backend</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>REST & GraphQL APIs</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Tools & Other</h4>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}