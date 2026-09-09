export type Project = {
  id: string;
  number: string;
  title: string;
  year: string;
  blurb: string;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
  image: string;
  href: string;
};

export type SkillGroup = { label: string; items: string[] };

export const profile = {
  name: "I. Nikhil Sai Reddy",
  initials: "NS",
  role: "B.Tech CSE · AI & ML",
  location: "India",
  email: "",
  availability: "Open to learning, collaborations & internships",
  focus: "Artificial Intelligence · Machine Learning · Software Development",
  tagline: "Building my way into AI — one idea, one line of code, and one experiment at a time.",
  summary: "I’m I. Nikhil Sai Reddy, a first-year B.Tech student at NxtWave Institute of Advanced Technologies, pursuing Computer Science Engineering with a specialization in Artificial Intelligence & Machine Learning.",
  about: "I’m at the beginning of my engineering journey and focused on building a strong foundation in programming, computer science and AI/ML. I enjoy turning ideas into working projects, exploring new technologies and continuously improving the way I build and learn.",
  links: {
    github: "https://github.com/nikhilsaireddyi",
    linkedin: "https://www.linkedin.com/in/nikhil-sai-reddy-induri-0ab948432",
    email: "",
  },
  education: {
    degree: "B.Tech, Computer Science Engineering (AI & ML)",
    years: "1st Year · Currently Studying",
    school: "NxtWave Institute of Advanced Technologies",
    coursework: ["Programming Fundamentals", "Data Structures & Algorithms", "Computer Science Foundations", "Artificial Intelligence", "Machine Learning", "Web Development"],
  },
  now: [
    { label: "Studying", value: "CSE with Artificial Intelligence & Machine Learning" },
    { label: "Exploring", value: "AI/ML, coding, web technologies & problem solving" },
    { label: "Building", value: "Projects that turn concepts into practical experiences" },
  ],
};

export const projects: Project[] = [
  { id: "portfolio", number: "01", title: "Personal Portfolio", year: "2026", blurb: "A modern developer portfolio designed to document my growth as a CSE AI/ML student.", problem: "A student portfolio should do more than list technologies. It should communicate curiosity, direction and the ability to turn learning into visible work.", approach: "Built a responsive React/TypeScript experience with a dark technical visual system, structured sections, interactive project notes and motion-led navigation.", result: "A continuously evolving personal hub for projects, skills, experiments, achievements and future internship opportunities.", tags: ["React", "TypeScript", "Tailwind CSS", "Vite"], image: "/og.jpg", href: "https://github.com/nikhilsaireddyi/Portfolia" },
  { id: "learning-lab", number: "02", title: "AI/ML Learning Lab", year: "In progress", blurb: "A growing collection of experiments as I build my foundations in artificial intelligence and machine learning.", problem: "AI/ML becomes meaningful when concepts move from notes into experiments, code and measurable results.", approach: "Learning Python, data handling, algorithms and ML fundamentals through small, focused experiments and progressively more challenging projects.", result: "An evolving body of work that will grow throughout my B.Tech journey and become a record of what I can build, explain and improve.", tags: ["Python", "AI", "ML", "Data"], image: "/og.jpg", href: "https://github.com/nikhilsaireddyi" },
  { id: "next-build", number: "03", title: "Next Build", year: "Coming soon", blurb: "A future project focused on solving a practical problem with software and AI.", problem: "The best way to grow is to repeatedly identify real problems, build prototypes and learn from what does not work.", approach: "Research the problem, design a simple solution, build an MVP, test it and document the lessons learned.", result: "This space will become a live record of the next project I take from idea to implementation.", tags: ["Problem Solving", "Software", "AI/ML"], image: "/og.jpg", href: "https://github.com/nikhilsaireddyi" },
];

export const skillGroups: SkillGroup[] = [
  { label: "Programming", items: ["Python", "C", "C++", "JavaScript", "TypeScript"] },
  { label: "AI & Data", items: ["Artificial Intelligence", "Machine Learning", "Data Analysis", "NumPy", "Pandas"] },
  { label: "Development", items: ["React", "HTML", "CSS", "Git", "GitHub", "Vite"] },
];

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
] as const;
