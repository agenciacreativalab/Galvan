export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const projects: Project[] = Array.from({ length: 60 }).map((_, i) => ({
  id: `project-${i + 1}`,
  title: `Project ${i + 1}`,
  image: `https://picsum.photos/seed/${i + 100}/400/400`,
  description: `This is the detailed description for Project ${i + 1}. We built this to solve amazing problems.`,
}));
