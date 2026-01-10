export const fallbackData = {
  // Hero Section
  hero: {
    name: "Prince Kothari",
    role: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    description: "Passionate about creating seamless user experiences and robust backend systems",
    resumeLink: "/resume.pdf",
    githubLink: "https://github.com/princekotharii",
    linkedinLink: "https://www.linkedin.com/in/princekothari/",
    twitterLink: "https://x.com/princekotharii",
    email: "princekothari016@gmail.com",
    phone: "+91 7300879646",
    location: "Uttrakhand, India"
  },

  // About Section
  about:  {
    profileImage: "https://avatars.githubusercontent.com/u/197196645?v=4",
    description: "Passionate full-stack developer with expertise in MERN stack.  I love creating seamless user experiences and robust backend systems.  Always eager to learn new technologies and solve complex problems.",
    availableForWork: true,
    location: "Uttrakhand, India",
    email: "princekothari016@gmail.com",
    phone: "+91 7300879646",
    githubLink: "https://github.com/princekotharii",
    linkedinLink: "https://www.linkedin.com/in/princekothari/",
    twitterLink: "https://x.com/princekotharii",
    highlights: [
      { icon: "Zap", text: "Fast Learner", color: "#eab308" },
      { icon: "Target", text: "Goal Oriented", color: "#10b981" },
      { icon: "Heart", text: "Passionate", color: "#ec4899" },
      { icon: "Code", text: "Clean Coder", color: "#3b82f6" }
    ],
    stats: [
      { icon: "Code", value: "50+", label: "Projects", color: "#a855f7" },
      { icon: "Award", value: "10+", label: "Certificates", color: "#3b82f6" },
      { icon: "Users", value:  "500+", label: "Commits", color: "#10b981" },
      { icon: "Trophy", value: "5+", label: "Hackathons", color: "#f97316" }
    ]
  },

  // Skills Section
  skills: [
    {
      _id: "1",
      category: "Frontend",
      icon: "Globe",
      color: "#a855f7",
      items: [
        { name: "React. js", level: 90 },
        { name:  "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Redux", level: 75 }
      ],
      order: 1
    },
    {
      _id: "2",
      category: "Backend",
      icon: "Terminal",
      color: "#3b82f6",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ],
      order: 2
    },
    {
      _id: "3",
      category: "Languages",
      icon: "Code",
      color: "#10b981",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 },
        { name: "TypeScript", level: 80 }
      ],
      order: 3
    },
    {
      _id:  "4",
      category: "Tools & Others",
      icon: "Wrench",
      color: "#f97316",
      items: [
        { name: "Git & GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Vercel", level: 88 }
      ],
      order: 4
    }
  ],

  // Projects Section
  projects: [
    {
      _id: "1",
      title: "Portfolio Website",
      description: "A modern MERN stack portfolio with admin panel and dynamic content management",
      longDescription: "Full-featured portfolio website with backend API, admin authentication, and real-time content updates. Built with React, Node.js, Express, and MongoDB. Features include dynamic content management, responsive design, and smooth animations.",
      techStack: ["React", "Node. js", "MongoDB", "Express", "Tailwind CSS"],
      category: "Full Stack",
      githubLink:  "https://github.com/princekotharii/portfolio",
      liveLink: "https://princekothari.vercel.app",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f? w=800&q=80",
      featured: true,
      status: "Completed",
      order: 1
    },
    {
      _id: "2",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription: "Complete e-commerce platform with user authentication, product management, shopping cart, payment integration with Stripe, order tracking, and admin dashboard.",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      githubLink: "https://github.com/princekotharii/ecommerce",
      liveLink: "https://ecommerce-demo.vercel.app",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      featured: true,
      status: "Completed",
      order: 2
    },
    {
      _id: "3",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      longDescription: "Real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and Firebase real-time database integration.",
      techStack: ["React", "Firebase", "Material-UI"],
      category: "Frontend",
      githubLink: "https://github.com/princekotharii/task-app",
      liveLink: "https://task-app-demo.vercel.app",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      featured: false,
      status: "Completed",
      order: 3
    }
  ],

  // Education Section
  education: [
    {
      _id: "1",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Your University Name",
      location: "Uttrakhand, India",
      duration: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      description: "Focused on software engineering, data structures, algorithms, web development, and database management.  Completed major projects in full-stack development.",
      highlights: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award",
        "Led college technical fest organizing committee"
      ],
      icon: "GraduationCap",
      color: "from-purple-500 to-pink-500",
      order: 1
    },
    {
      _id: "2",
      degree:  "Senior Secondary (12th)",
      field: "Science (PCM with Computer Science)",
      institution: "Your School Name",
      location: "Uttrakhand, India",
      duration: "2018 - 2020",
      grade: "Percentage: 92%",
      description: "Physics, Chemistry, Mathematics with Computer Science.  Strong foundation in programming and problem-solving.",
      highlights: [
        "School Topper in Computer Science",
        "Science Exhibition Winner"
      ],
      icon: "BookOpen",
      color: "from-blue-500 to-cyan-500",
      order: 2
    }
  ],

// Achievements Section
achievements: [
  {
    _id: "1",
    title: "Hackathon Winner",
    description: "Won first place in national level hackathon with innovative solution",
    date: "2024",
    icon: "Trophy",
    color: "#f59e0b",
    badge: "🏆 1st Place",
    category: "Competition",
    organization: "Tech Hackathon 2024",
    certificateLink: "https://example.com/certificate1. pdf", // ✅ ADD THIS
    order: 1
  },
  {
    _id: "2",
    title: "Google Cloud Certified",
    description: "Associate Cloud Engineer - Demonstrated expertise in Google Cloud Platform",
    date: "2024",
    icon: "Award",
    color: "#3b82f6",
    badge: "✅ Certified",
    category: "Certification",
    organization: "Google",
    certificateLink: "https://example.com/certificate2.pdf", // ✅ ADD THIS
    order: 2
  },
  {
    _id: "3",
    title: "Open Source Contributor",
    description:  "Active contributor with 100+ contributions across multiple projects",
    date: "2023-24",
    icon: "Github",
    color: "#a855f7",
    badge: "💻 Active",
    category: "Other",
    certificateLink: "", // ✅ Optional - leave empty if no certificate
    order: 3
  },
  {
    _id: "4",
    title: "Open Source Contributor",
    description:  "Active contributor with 100+ contributions across multiple projects",
    date: "2023-24",
    icon: "Github",
    color: "#a855f7",
    badge: "💻 Active",
    category: "Other",
    certificateLink: "", // ✅ Optional - leave empty if no certificate
    order: 4
  }
],

  // Profile Status
  status: {
    hireable: true,
    availableForWork: true,
    currentStatus: "Available",
    statusMessage: "Open to freelance opportunities and full-time positions"
  }
};