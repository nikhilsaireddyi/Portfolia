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

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Nikhil Sai Reddy",
  initials: "NS",
  role: "CSE · AI & ML",
  location: "India",
  email: "hello@nikhilsai.dev",
  availability: "Open to internships",
  focus: "Computer vision and applied NLP",
  tagline: "I train models, ship small systems, and write the notes in between.",
  summary:
    "Third-year computer science student specializing in artificial intelligence and machine learning. I like problems with a messy data story and a clear evaluation — classifiers that leave the notebook, retrieval that students actually use, forecasts that hold up outside the training split.",
  about:
    "Most weeks split between coursework, a computer-vision project, and helping juniors debug their first notebooks. I care more about the evaluation protocol than the architecture diagram, and I write things down so the next person (often me) can rerun them.",
  links: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
    email: "mailto:hello@nikhilsai.dev",
  },
  education: {
    degree: "B.Tech, Computer Science Engineering (AI & ML)",
    years: "2023 — 2027",
    school: "Institute of Technology",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Data Structures",
      "Probability & Statistics",
      "DBMS",
      "Computer Vision",
    ],
  },
  now: [
    { label: "Building", value: "on-device plant disease classifier" },
    { label: "Reading", value: "Hands-On Machine Learning, 3rd ed." },
    { label: "Seeking", value: "Summer internship in applied ML" },
  ],
};

export const projects: Project[] = [
  {
    id: "leafnet",
    number: "01",
    title: "LeafNet",
    year: "2025",
    blurb: "On-device plant disease classifier trained on PlantVillage.",
    problem:
      "Field identification of crop disease still depends on a specialist visit. Students and small farms needed something that runs without a GPU and without a network.",
    approach:
      "Fine-tuned a MobileNetV3 backbone in PyTorch on 38 PlantVillage classes, then quantized to INT8 for a 4.2 MB mobile build. Grad-CAM overlays show which lesions the model actually used.",
    result:
      "96.2% top-1 on a held-out test split. Confusion concentrated in visually similar blight pairs — documented, not hidden.",
    tags: ["PyTorch", "CNN", "OpenCV", "Quantization"],
    image: "/work/leafnet.jpg",
    href: "https://github.com",
  },
  {
    id: "campusrag",
    number: "02",
    title: "CampusRAG",
    year: "2025",
    blurb: "Retrieval-augmented chatbot over lecture notes and past papers.",
    problem:
      "Course material lived in a thousand PDFs. Searching by filename is not studying. Students needed answers with citations, not a hallucinated summary.",
    approach:
      "Chunked 1,200 lecture PDFs, embedded with sentence-transformers, retrieved via FAISS, and generated with a small open model behind FastAPI. Every answer carries source page links.",
    result:
      "Used by a pilot of 80 classmates during midterms. Citation click-through was the quality metric, not BLEU.",
    tags: ["RAG", "FAISS", "FastAPI", "NLP"],
    image: "/work/campusrag.jpg",
    href: "https://github.com",
  },
  {
    id: "pulseforecast",
    number: "03",
    title: "PulseForecast",
    year: "2024",
    blurb: "24-hour campus energy demand forecast with covariates.",
    problem:
      "The campus estate office planned HVAC on last week's average. Exam weeks and holidays made that average a bad prior.",
    approach:
      "Multivariate LSTM with calendar, weather, and occupancy covariates. Walk-forward validation, not a shuffled split. Streamlit dashboard for the estate team.",
    result:
      "11.4% MAPE on a 24h horizon versus 18.9% for the seasonal naive baseline.",
    tags: ["LSTM", "Time series", "Pandas", "Streamlit"],
    image: "/work/pulseforecast.jpg",
    href: "https://github.com",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "Machine learning",
    items: [
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "Hugging Face",
      "NumPy",
      "Pandas",
    ],
  },
  {
    label: "Systems",
    items: ["Git", "FastAPI", "Streamlit", "Docker", "Linux", "PostgreSQL"],
  },
];

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
] as const;
