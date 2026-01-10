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
        { name: "React. js", level: 80 },
        { name:  "JavaScript", level: 80 },
        { name: "HTML & CSS", level: 98 },
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
        { name: "Node.js", level: 81 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        
      ],
      order: 2
    },
    {
      _id: "3",
      category: "Languages",
      icon: "Code",
      color: "#10b981",
      items: [
        { name: "JavaScript", level: 86 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 },
        { name: "TypeScript", level: 70 }
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
      title: "School Website Redesign",
      description: "School Website Redesign is a UI-focused web project aimed at Modernizing. ",
      longDescription: "School Website Redesign is a UI-focused web project aimed at modernizing an outdated school website to improve usability, accessibility, and visual appeal. The redesign prioritizes a clean layout, intuitive navigation, and a student- and parent-friendly user experience.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      category: "Full Stack",
      githubLink:  "https://github.com/princekotharii/SGPS-Schol-Website",
      liveLink: "https://shivalikgangespublicschool.vercel.app/",
      image: "https://res.cloudinary.com/dpolkd3ev/image/upload/v1768040149/Screenshot_2026-01-10_154456_uawtar.png",
      featured: true,
      status: "Completed",
      order: 1
    },
    {
      _id: "2",
      title: "Samsung India Clone",
      description: "Samsung India Clone Website is a fully responsive front-end web project inspired by the official Samsung India website.",
      longDescription: "Samsung India Clone Website is a fully responsive front-end web project inspired by the official Samsung India website. The goal of this project was to closely replicate a real-world commercial website while focusing on clean UI, structured layouts, and smooth user experience.",
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      githubLink: "https://github.com/princekotharii/Samsung-India",
      liveLink: "https://samsungindia.vercel.app/",
      image: "https://res.cloudinary.com/dpolkd3ev/image/upload/v1768040689/Screenshot_2026-01-10_155413_m1u532.png",
      featured: true,
      status: "Completed",
      order: 2
    },
    {
      _id: "3",
      title: "Film Website ",
      description: "Film Website Project is an academic web development project",
      longDescription: "Film Website Project is an academic web development project assigned by the college, focused on designing and developing a complete website for a film. The objective was to present film-related content in a structured, visually appealing, and user-friendly format.",
      techStack: ["React", "Firebase", "Material-UI"],
      category: "Frontend",
      githubLink: "https://github.com/princekotharii/Varnan-Films",
      liveLink: "https://varnanfilms.vercel.app/",
      image: "https://res.cloudinary.com/dpolkd3ev/image/upload/v1768041036/Screenshot_2026-01-10_160020_gftcrt.png",
      featured: false,
      status: "Completed",
      order: 3
    },
    {
      _id: "4",
      title: "Roadengo-Bike Services",
      description: "Roadengo-Bike Services is a web development project focused on providing a platform for bike services.",
      longDescription: "Roadengo-Bike Services is a web development project focused on providing a platform for bike services. The website allows users to book services, view service history, and manage their profiles.",
      techStack: ["React", "Node.js", "Material-UI"],
      category: "Frontend",
      githubLink: "https://github.com/DevNest-Prince/roadengo",
      liveLink: "https://roadengo.vercel.app/",
      image: "https://res.cloudinary.com/dpolkd3ev/image/upload/v1768054172/Screenshot_2026-01-10_193819_js6n4a.png",
      featured: false,
      status: "Completed",
      order: 4
    }
  ],

  // Education Section
  education: [
    {
      _id: "1",
      degree: "Bachelor of Computer Applications",
      field: "Computer Science & Engineering",
      institution: "Motherhood University",
      location: "Uttrakhand, India",
      duration: "2024 - 2026",
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
      institution: "Shivalik Ganges Public School",
      location: "Uttrakhand, India",
      duration: "2022 - 2023",
      // grade: "Percentage: 92%",
      description: "Physics, Chemistry, Mathematics with Computer Science.  Strong foundation in programming and problem-solving.",
      highlights: [
        "Science Exhibition Winner"
      ],
      icon: "BookOpen",
      color: "from-blue-500 to-cyan-500",
      order: 2
    },
    {
      _id: "3",
      degree:  "Secondary (10th)",
      field: "General Studies",
      institution: "Shivalik Ganges Public School",
      location: "Uttrakhand, India",
      duration: "2022 - 2023",
      // grade: "Percentage: 71%",
      description: "Physics, Chemistry, Mathematics with Computer Science.  Strong foundation in programming and problem-solving.",
      highlights: [
        "Active in school activities",
      ],
      icon: "BookOpen",
      color: "from-green-500 to-emerald-500",
      order: 3
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