// Central Data Store for Portfolio - Resume as Source of Truth

export const achievementsData = [
  {
    id: "leetcode",
    title: "214 LeetCode Problems",
    badge: "DSA_PROGRESS",
    tag: "ALGO_DIAGNOSTIC",
    iconType: "code",
    color: "#ef4444",
    totalSolved: 214,
    totalQuestions: 4018,
    breakdown: [
      { level: "Easy", solved: 90, total: 958, color: "#14b8a6" },
      { level: "Medium", solved: 99, total: 2098, color: "#f59e0b" },
      { level: "Hard", solved: 25, total: 962, color: "#ef4444" },
    ],
    description:
      "Consistent practice in Data Structures and Algorithms with a focus on technical interview problem solving.",
  },
  {
    id: "ai-bootcamp",
    title: "AI Simulation Bootcamp",
    badge: "AI_EXPLORATION",
    tag: "TECH_LEARNING",
    iconType: "ai",
    color: "#8b5cf6",
    description:
      "Completed an AI Simulation Bootcamp focused on exploring artificial intelligence concepts and practical applications.",
  },
  {
    id: "production-apps",
    title: "Production-Level Applications",
    badge: "FULL_STACK_BUILD",
    tag: "SYSTEM_ARCH",
    iconType: "production",
    color: "#06b6d4",
    description:
      "Built multiple production-level MERN applications covering CRM, project management, payments, booking systems, complaints, and business workflows.",
  },
];

export const experiencesData = [
  {
    id: "lealava",
    role: "Full Stack Developer",
    company: "Lealava Technologies Pvt. Ltd.",
    duration: "Mar 2026 — Aug 2026",
    responsibilities: [
      "Developed scalable backend services.",
      "Designed 15+ REST APIs.",
      "Optimized MongoDB queries.",
      "Collaborated in Agile teams.",
    ],
  },
  {
    id: "spcl",
    role: "MERN Stack Developer Intern",
    company: "SPCL Infotech Services Pvt. Ltd.",
    duration: "Mar 2026 — Jun 2026",
    description: "Delivered 5 full-stack applications.",
  },
  {
    id: "techzex",
    role: "MERN Stack Intern",
    company: "Techzex Software Pvt. Ltd.",
    duration: "Aug 2024 — Dec 2024",
    description: "Built scalable web applications and intuitive interfaces.",
  },
];

export const educationData = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Nalanda Institute of Technology",
    duration: "2022 — 2026",
    cgpa: "8.3",
    focus: "Java • Full Stack Development • DSA • DBMS • System Design",
  },
  {
    degree: "Council Of Higher Secondary Education, Odisha",
    institution: "Kalinga Xavier College of Sc. & Comm.",
    duration: "2020 — 2022",
    cgpa: "69%",
    focus: "Physics • Chemistry • Mathematics • Biology",
  },
  {
    degree: "Board Of Secondary Education, Odisha",
    institution: "Govt High School Damsal",
    duration: "2019 — 2020",
    cgpa: "",
    focus: "Mathematics • Science • Social Science",
  },
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "AI Simulation Bootcamp",
    issuer: "AI Simulation Program",
    date: "2024",
    credentialId: "AIB-2026",
    category: "AI & Machine Learning",
    image: "/ai-bootcamp.jpeg",
    link: "#",
  },
  {
    id: "cert-2",
    title: "Full Stack Web Development",
    issuer: "SPCL Infotech Services",
    date: "2024",
    credentialId: "MERN-FS-2026",
    category: "Web Development",
    image: "/spcl.jpeg",
    link: "https://github.com/Shiba-rana",
  },
  {
    id: "cert-3",
    title: "MERN Stack Intern",
    issuer: "Techzex Software",
    date: "2024",
    credentialId: "MERN-I-2024",
    category: "Backend Development",
    image: "/",
    link: "https://github.com/Shiba-rana",
  },
  {
    id: "cert-4",
    title: "Oracle Java Foundation Certificate",
    issuer: "LinkedIn",
    date: "2026",
    credentialId: "JAVA-BE-2026",
    category: "Programming",
    image: "/oracle_java_foundation.jpeg",
    link: "https://github.com/Shiba-rana",
  },{
    id: "cert-5",
    title: "Mastering Java Fundamentals",
    issuer: "Scaler Academy",
    date: "2026",
    credentialId: "JAVA-BE-2026",
    category: "Programming",
    image: "/java-mastering_fundamentals.jpeg",
    link: "https://github.com/Shiba-rana",
  },
  {
    id: "cert-6",
    title: "Java OOPs Mastering",
    issuer: "Scaler Academy",
    date: "2026",
    credentialId: "DSA",
    category: "Programming",
    image: "/java-oops_mastering.jpeg",
    link: "https://github.com/Shiba-rana",
  },
  {
    id: "cert-7",
    title: "Docker & Kubernetes",
    issuer: "UpGrad",
    date: "2026",
    credentialId: "DOCKER-K8S-2026",
    category: "DevOps",
    image: "/ducker&kubernetes.jpeg",
    link: "https://github.com/Shiba-rana",
  },
];

export const projectsData = [
  {
    title: "CRM & Project Management System",
    description:
      "Enterprise Customer Relationship Management and project tracking platform featuring client management, invoice tracking, payment logs, interactive dashboard, JWT authentication, and Role-Based Access Control (RBAC).",
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB", "JWT", "RBAC", "Tailwind CSS"],
    github: "https://github.com/Silurana",
    demo: "https://github.com/Silurana",
    image: "/port_img1.jpeg",
    features: [
      "Project management",
      "Client management",
      "Invoice tracking",
      "Payment tracking",
      "Dashboard",
      "JWT authentication",
      "RBAC",
    ],
    color: "#ef4444",
  },
  {
    title: "Hotel & Restaurant MS",
    description:
      "Comprehensive hospitality and restaurant management system supporting room bookings, table reservations, digital restaurant order processing, automated billing, and real-time administrator reporting.",
    tags: ["MERN", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Silurana",
    demo: "https://github.com/Silurana",
    image: "/port_img2.jpeg",
    features: [
      "Room booking",
      "Table reservations",
      "Restaurant orders",
      "Billing",
      "Admin dashboard",
    ],
    color: "#dc2626",
  },
  {
    title: "Car Rental Website",
    description:
      "Modern vehicle rental web application offering interactive vehicle listings, seamless reservation booking, secure user authentication, and a full administrative control panel.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Silurana",
    demo: "https://github.com/Silurana",
    image: "/port_img3.jpeg",
    features: [
      "Vehicle listings",
      "Booking",
      "Authentication",
      "Admin panel",
    ],
    color: "#b91c1c",
  },
  {
    title: "University Dues Portal",
    description:
      "Secure academic financial portal managing student fee accounts, secure authentication, student grant verification, digital receipts, and administrative payment tracking.",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/Silurana",
    demo: "https://github.com/Silurana",
    image: "/port_img1.jpeg",
    features: [
      "Student fee management",
      "Secure authentication",
      "Payment tracking",
    ],
    color: "#991b1b",
  },
  {
    title: "Campus Complaint Management System",
    description:
      "Digital grievance and complaint portal enabling students to submit issues online with real-time status tracking, administrator resolution workflows, and role-based permissions.",
    tags: ["TypeScript", "Node.js", "Express", "MongoDB", "RBAC", "Tailwind CSS"],
    github: "https://github.com/Silurana",
    demo: "https://github.com/Silurana",
    image: "/port_img2.jpeg",
    features: [
      "Complaint submission",
      "Complaint tracking",
      "Complaint resolution",
      "Student/admin workflows",
    ],
    color: "#f87171",
  },
];

export const skillsCategoriesData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: "FaJava", color: "#e76f51" },
      { name: "JavaScript", icon: "FaJs", color: "#f7df1e" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178c6" },
      { name: "Python (Basic)", icon: "FaPython", color: "#3776ab" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: "SiSpringboot", color: "#6db33f" },
      { name: "Node.js", icon: "FaNodeJs", color: "#3c873a" },
      { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
      { name: "REST APIs", icon: "FaCode", color: "#007acc" },
      { name: "JWT Authentication", icon: "SiJsonwebtokens", color: "#d63aff" },
      { name: "RBAC", icon: "FaUserShield", color: "#a855f7" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "FaReact", color: "#61dbfb" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "HTML5", icon: "FaHtml5", color: "#f06529" },
      { name: "CSS3", icon: "FaCss3Alt", color: "#2965f1" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38bdf8" },
      { name: "Bootstrap", icon: "SiBootstrap", color: "#7952b3" },
      { name: "Material UI", icon: "SiMui", color: "#007fff" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "SiMongodb", color: "#47a248" },
      { name: "MySQL", icon: "SiMysql", color: "#4479a1" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "FaGitAlt", color: "#f05032" },
      { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
      { name: "Postman", icon: "SiPostman", color: "#ff6c37" },
      { name: "AWS", icon: "FaAws", color: "#ff9900" },
      { name: "Vercel", icon: "SiVercel", color: "#ffffff" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "OOP", icon: "FaCubes", color: "#818cf8" },
      { name: "DSA", icon: "FaProjectDiagram", color: "#2dd4bf" },
      { name: "DBMS", icon: "FaDatabase", color: "#06b6d4" },
      { name: "Operating Systems", icon: "FaDesktop", color: "#c084fc" },
      { name: "Computer Networks", icon: "FaNetworkWired", color: "#fb7185" },
      { name: "SDLC", icon: "FaSync", color: "#fbbf24" },
      { name: "Agile", icon: "FaUsersCog", color: "#f43f5e" },
      { name: "System Design", icon: "FaLayerGroup", color: "#34d399" },
    ],
  },
];
