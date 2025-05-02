export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "aceternity",
    title: "Aceternity",
    description: "A design and development studio that focuses on building quality apps.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS"]
  },
  {
    id: "algochurn",
    title: "Algochurn",
    description: "Practice for technical interviews with hands on coding challenges.",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS"]
  },
  {
    id: "moonbeam",
    title: "Moonbeam",
    description: "Never write from scratch again with Moonbeam, your AI first writing tool.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "AI"]
  }
];

export const articles = [
  {
    id: "nextjs-app-router",
    title: "Understanding Next.js App Router",
    date: "April 25, 2025",
    description: "Learn how to effectively use Next.js App Router for your web applications."
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices in 2025",
    date: "March 12, 2025",
    description: "Explore the most effective TypeScript patterns and practices to improve your code quality."
  },
  {
    id: "tailwind-css-tips",
    title: "Advanced Tailwind CSS Tips and Tricks",
    date: "February 3, 2025",
    description: "Take your Tailwind CSS skills to the next level with these advanced techniques."
  }
];