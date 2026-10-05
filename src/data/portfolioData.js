export const personalInfo = {
  name: "BEERA BHAVANI SANKAR",
  displayName: "BHAVANI SANKAR",
  alias: "RAHUL",
  title: "AI/ML Engineer | Full Stack Developer",
  shortRole: "AI / ML Engineer",
  location: "Rajam, Andhra Pradesh, India",
  tagline: "Bridging the gap between cutting-edge Machine Learning and high-performance Web Systems.",
  availability: "Available for Full-time Roles & High-Impact Projects",
  phone: "+91 7396179921",
  email: "beerarahul2@gmail.com",
  summary:
    "Final-year B.Tech student (AI & ML, CGPA 8.4) with production-grade experience building AI-powered platforms. Developed JobFlow Engine — an end-to-end career automation platform using n8n and Google Gemini AI — and a deep learning skin disease classifier (EfficientNet, 93%+ accuracy). Proficient in Python, React.js, FastAPI, and Django. Published researcher applying Deep Q-Network RL to Bitcoin price prediction. Certified in Generative AI (Infosys Springboard). Seeking roles in AI/ML Engineering, Software Engineering, or Data Science.",
  socials: {
    github: "https://github.com/Bhavani-sankar-Beera",
    linkedin: "https://linkedin.com/in/bhavani-sankar-beera",
    leetcode: "https://leetcode.com/u/RAHULBEERA",
    email: "mailto:beerarahul2@gmail.com",
    phone: "tel:+917396179921"
  }
};

export const specializations = [
  {
    id: "ai-vision",
    num: "01",
    title: "AI & DEEP LEARNING",
    shortTitle: "COMPUTER VISION",
    icon: "Brain",
    description:
      "Trained and fine-tuned EfficientNet neural networks with transfer learning and extensive image augmentation, achieving 93%+ validation accuracy. Proficient in TensorFlow, Scikit-Learn, OpenCV, and PyTorch pipelines."
  },
  {
    id: "genai-agents",
    num: "02",
    title: "GENAI & AUTOMATION",
    shortTitle: "AGENTIC WORKFLOWS",
    icon: "Sparkles",
    description:
      "Architecting end-to-end AI applications using Google Gemini AI, OpenAI APIs, and n8n workflow engines. Specializing in prompt engineering, vector embeddings, ATS scoring algorithms, and autonomous multi-agent pipelines."
  },
  {
    id: "full-stack",
    num: "03",
    title: "FULL STACK ARCHITECTURE",
    shortTitle: "FASTAPI & REACT",
    icon: "Layers",
    description:
      "Building production-grade web applications with React.js, Tailwind CSS, FastAPI, and Django. Experienced with JWT authentication, Role-Based Access Control (RBAC), Supabase, MySQL, and automated CI/CD deployment on Vercel & Railway."
  },
  {
    id: "rl-research",
    num: "04",
    title: "QUANT & REINFORCEMENT LEARNING",
    shortTitle: "DQN RESEARCH",
    icon: "TrendingUp",
    description:
      "Published researcher applying Deep Q-Networks (DQN) to cryptocurrency market predictive modeling from historical OHLCV data, investigating complex autonomous agent policies in volatile financial environments."
  }
];

export const projects = [
  {
    id: "mini-researcher",
    title: "Mini Researcher",
    subtitle: "AI-Powered Research Assistant & RAG Pipeline",
    category: "AI / ML",
    tags: ["React", "FastAPI", "Gemini", "Tavily", "RAG", "ChromaDB", "Render", "Vercel"],
    stats: "Live Platform • Multi-Agent RAG & PDF Export",
    description:
      "Built an AI-powered research assistant that automates web research, document analysis, information retrieval, and report generation using Gemini, Tavily, RAG, ChromaDB, FastAPI, and React. The system decomposes user queries into relevant sub-queries, retrieves and filters web sources, extracts useful content, stores knowledge as vector embeddings, and generates structured research reports with source references. It also supports document upload, RAG-based question answering, and PDF report export, with the frontend deployed on Vercel and the backend on Render.",
    liveUrl: "https://main-project-khaki-rho.vercel.app/",
    githubUrl: "https://github.com/Bhavani-sankar-Beera",
    featured: true,
    visualType: "researcher"
  },
  {
    id: "jobflow-engine",
    title: "JobFlow Engine",
    subtitle: "AI Career Intelligence Platform",
    category: "AI / ML",
    tags: ["React.js", "n8n", "Google Gemini AI", "Supabase", "Railway", "Vercel"],
    stats: "Live Platform • 95%+ ATS Matching Accuracy",
    description:
      "Architected an end-to-end AI career platform using n8n workflows and Google Gemini AI to extract skills from resumes, calculate ATS scores, detect skill gaps, generate tailored cover letters, and create personalized career roadmaps. Built a smart job-matching engine that scrapes live listings and ranks opportunities with AI compatibility scores, deployed on Vercel + Railway with React.js dashboard and Application Tracker.",
    liveUrl: "https://ai-job-matcher-eight.vercel.app",
    githubUrl: "https://github.com/Bhavani-sankar-Beera",
    featured: true,
    visualType: "dashboard"
  },
  {
    id: "dermavision",
    title: "DermaVision",
    subtitle: "AI Skin Disease Classifier",
    category: "AI / ML",
    tags: ["Python", "EfficientNet", "FastAPI", "React.js", "SQLite", "TensorFlow"],
    stats: "93%+ Validation Accuracy • Real-Time Inference",
    description:
      "Fine-tuned EfficientNet with transfer learning and image augmentation to classify dermatological conditions; achieved 93%+ validation accuracy on multi-class skin disease dataset. Integrated React.js front-end with FastAPI back-end for real-time browser-based inference; full-stack deployment with SQLite for prediction history.",
    liveUrl: null,
    githubUrl: "https://github.com/Bhavani-sankar-Beera",
    featured: true,
    visualType: "vision"
  },
  {
    id: "bitcoin-dqn",
    title: "Bitcoin DQN Price Predictor",
    subtitle: "Research Paper: Quantitative Reinforcement Learning",
    category: "RESEARCH",
    tags: ["Deep Q-Network (DQN)", "Reinforcement Learning", "Python", "OHLCV Data", "PyTorch"],
    stats: "Research Paper 2024–2025 • Under Review",
    description:
      "Applied Deep Q-Network (DQN) reinforcement learning to model and predict Bitcoin price movements from historical OHLCV data, bridging deep RL with quantitative finance. Investigated DQN agent behavior in volatile financial environments; findings documented in research paper (under review).",
    liveUrl: null,
    githubUrl: "https://github.com/Bhavani-sankar-Beera",
    featured: true,
    visualType: "quant"
  },
  {
    id: "library-management",
    title: "Library Management System",
    subtitle: "Full-Stack Django & RBAC Solution",
    category: "FULL STACK",
    tags: ["Python", "Django", "MySQL", "JWT Auth", "RBAC", "REST"],
    stats: "200+ Records Automated • Topnotch Certified",
    description:
      "Developed a web-based library platform for book inventory, member management, and borrowing history with role-based Django ORM models and admin dashboard. Automated book issuance and return workflows with a responsive UI, reducing manual effort and improving data retrieval efficiency.",
    liveUrl: null,
    githubUrl: "https://github.com/Bhavani-sankar-Beera",
    featured: false,
    visualType: "database"
  }
];

export const educationAndExperience = {
  experience: [
    {
      role: "Python & Django Developer Intern",
      company: "Topnotch Pvt. Ltd",
      period: "Jul 2025 (1 Month)",
      location: "Remote",
      highlights: [
        "Built a full-stack Library Management System in Django, automating book issuance, return tracking, and inventory workflows for 200+ records.",
        "Implemented JWT-based authentication and role-based access control (RBAC); awarded Python with Django Web Application Development Certification on completion."
      ]
    },
    {
      role: "Published Quantitative RL Researcher",
      company: "Research & Publications",
      period: "2024 – 2025",
      location: "Academic Research",
      highlights: [
        "Applied Deep Q-Network (DQN) reinforcement learning to model and predict Bitcoin price movements from historical OHLCV data, bridging deep RL with quantitative finance.",
        "Investigated DQN agent behavior in volatile financial environments; findings documented in research paper (under review)."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in IT (AI & ML)",
      institution: "GMR Institute of Technology",
      location: "Rajam, Andhra Pradesh",
      period: "2023 – Present",
      score: "CGPA: 8.4 / 10",
      notes: "Artificial Intelligence & Machine Learning, Data Structures & Algorithms, OOP, DBMS, Operating Systems."
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      location: "Rajam, Andhra Pradesh",
      period: "2021 – 2023",
      score: "91.3%",
      notes: "Mathematics, Physics, Chemistry."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Government High School",
      location: "Rajam, Andhra Pradesh",
      period: "2021",
      score: "98.6%",
      notes: "Top academic achievement in secondary examinations."
    }
  ],
  certifications: [
    {
      title: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      date: "May 2026",
      tag: "GenAI"
    },
    {
      title: "Artificial Intelligence Primer",
      issuer: "Infosys Springboard",
      date: "May 2026",
      tag: "AI Foundation"
    },
    {
      title: "Python with Django Web Application Development",
      issuer: "Topnotch",
      date: "2025",
      tag: "Backend Engineering"
    },
    {
      title: "Deep Learning Essentials",
      issuer: "L&T EduTech",
      date: "2024",
      tag: "Neural Networks"
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      date: "2024",
      tag: "Database & Querying"
    },
    {
      title: "Java Skill UP",
      issuer: "GeeksforGeeks",
      date: "2024",
      tag: "Core CS & DSA"
    }
  ]
};

export const technicalSkills = {
  languages: ["Python", "JavaScript", "Java", "SQL"],
  aiMlDeepLearning: [
    "TensorFlow",
    "Scikit-Learn",
    "EfficientNet",
    "OpenCV",
    "NumPy",
    "Pandas",
    "RAG Pipelines",
    "ChromaDB",
    "Vector Embeddings",
    "LLM Prompting",
    "OpenAI API",
    "Reinforcement Learning (DQN)"
  ],
  webApis: ["React.js", "FastAPI", "Django", "REST APIs", "HTML5", "CSS3", "Tailwind CSS"],
  genAiAutomation: [
    "Google Gemini AI",
    "Tavily AI Search",
    "n8n Workflow Automation",
    "Prompt Engineering",
    "GPT Embeddings",
    "LLM Integration"
  ],
  databasesTools: [
    "MySQL",
    "SQLite",
    "Supabase",
    "ChromaDB",
    "Django ORM",
    "Git",
    "GitHub",
    "Vercel",
    "Render",
    "Railway",
    "VS Code"
  ],
  coreCs: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"]
};
