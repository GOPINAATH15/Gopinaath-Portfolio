// Single source of truth for all resume content.
// Edit this file to update the site — components just render it.

export const profile = {
  name: "Gopinaath A",
  role: "Software Developer",
  tagline: "Entry-level Software Developer",
  location: "Cuddalore, Tamil Nadu, India",
  email: "gopinaath515@gmail.com",
  phone: "+91 9345884778",
  linkedin: "https://www.linkedin.com/in/gopiii-a-15g/",
  github: "https://github.com/GOPINAATH15",
  summary:
    "Computer Science graduate with hands-on experience in Java, JDBC, MySQL, React.js, and modern web technologies. Built a Java-based Inventory Management System during a development internship and a React-based Employee Management System as a final year project. Comfortable across the stack, from OOP fundamentals and database integration to building responsive user interfaces, and looking for an entry-level software developer role to grow into.",
  typingStrings: [
    "Software Developer",
    "Java & React Enthusiast",
    "CRUD > Chaos",
    "Building things that build things.",
  ],
};

export const skills = [
  { name: "Java", level: 80, group: "Programming" },
  { name: "SQL", level: 75, group: "Database" },
  { name: "React.js", level: 78, group: "Web" },
  { name: "JavaScript", level: 75, group: "Web" },
  { name: "HTML & CSS", level: 85, group: "Web" },
  { name: "JDBC", level: 72, group: "Backend Connectivity" },
  { name: "J2EE", level: 60, group: "Framework" },
  { name: "Git & GitHub", level: 78, group: "Tools" },
];

export const experience = [
  {
    id: "nlcil",
    company: "NLCIL",
    role: "Java Developer Intern",
    period: "1 Month",
    commit: "feat(inventory): add core CRUD + JDBC integration",
    points: [
      "Developed modules for a Java-based Inventory Management System",
      "Implemented CRUD operations using Core Java and JDBC",
      "Integrated a MySQL database for inventory tracking",
      "Applied OOP concepts, and handled debugging and testing",
    ],
    stack: ["Core Java", "JDBC", "MySQL", "Eclipse", "Git"],
  },
  {
    id: "dataprompt",
    company: "DataPrompt International Pvt Ltd",
    role: "Data Analyst (Trainee)",
    period: "April 2024 – July 2024",
    commit: "feat(analytics): clean datasets, ship insight reports",
    points: [
      "Cleaned and processed datasets using SPSS",
      "Generated analytical reports to support business insights",
    ],
    stack: ["SPSS", "Data Cleaning", "Reporting"],
  },
];

export const projects = [
  {
    id: "ems",
    title: "Employee Management System",
    subtitle: "Final Year Project",
    description:
      "A responsive Employee Management System with full CRUD operations for employee records, built on React Hooks for state management and backed by a Node.js server, with form validation to keep data entry accurate.",
    stack: ["React.js", "JavaScript (ES6)", "HTML5", "CSS3", "Node.js"],
    highlights: [
      "Create, Read, Update, Delete flows for employee records",
      "React Hooks (useState, useEffect) for state management",
      "Form validation for accurate data entry",
    ],
    links: { github: "https://github.com/GOPINAATH15", live: null },
  },
  {
    id: "ims",
    title: "Inventory Management System",
    subtitle: "Development Internship — NLCIL",
    description:
      "A Java-based inventory tracking system connecting Core Java to a MySQL database through JDBC, applying OOP concepts across modules with an emphasis on clean debugging and testing.",
    stack: ["Core Java", "JDBC", "MySQL", "Eclipse"],
    highlights: [
      "CRUD operations for inventory records",
      "MySQL integration via JDBC",
      "OOP-driven module design",
    ],
    links: { github: "https://github.com/GOPINAATH15", live: null },
  },
  {
    id: "elearn",
    title: "Student E-Learning System",
    subtitle: "Mini Project",
    description:
      "A responsive e-learning interface for browsing courses and viewing course details, focused on an interactive, user-friendly front-end experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Responsive course browsing interface",
      "Interactive course detail views",
    ],
    links: { github: "https://github.com/GOPINAATH15", live: null },
  },
];

export const education = [
  {
    id: "mca",
    school: "KGiSL IIM, Coimbatore",
    degree: "MCA",
    period: "2025 – 2027(Pursuing)",
    detail: "CGPA: 8.0 / 10",
  },
  {
    id: "bsc",
    school: "Sri Krishna Arts and Science College, Coimbatore",
    degree: "B.Sc Computer Science with Cognitive Systems",
    period: "2021 – 2024",
    detail: "CGPA: 7.8 / 10",
  },
  // {
  //   id: "hsc",
  //   school: "Saratha Matriculation Higher Secondary School",
  //   degree: "HSC, State Board",
  //   period: "2020 – 2021",
  //   detail: "79%",
  // },
];

export const languages = ["English", "Tamil"];
