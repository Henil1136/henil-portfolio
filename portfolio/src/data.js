// All content comes from Henil's CV. Edit here to update the site.

export const profile = {
  name: "Henil Prajapati",
  title: "Full-Stack Developer (MERN)",
  location: "Ahmedabad, Gujarat, India",
  email: "henilprajapati750@gmail.com",
  github: "https://github.com/Henil1136",
  linkedin: "https://linkedin.com/in/henil-prajapati-6b9950273",
  cv: "/Henil_Prajapati_CV.pdf",
  summary: [
    "I'm a full-stack developer and a final-year B.E. Information Technology student at SAL College of Engineering, Ahmedabad (GTU), graduating in May 2027. I'm looking for a Junior Full-Stack Developer or Software Engineer role.",
    "I've built and shipped three MERN/PERN applications using React.js, Node.js, Express.js, MongoDB and PostgreSQL, with REST APIs, JWT authentication, role-based admin routes and unit testing. I also completed a React.js internship and published a research paper on lightweight IoT cryptography.",
  ],
};

export const projects = [
  {
    name: "Traveloops",
    kind: "Full-stack travel planning platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vitest"],
    points: [
      "End-to-end travel planning application (React.js frontend, Express.js REST API, MongoDB) for browsing destinations, hotels, restaurants and activities, secured with JWT authentication.",
      "Multi-step trip builder with itinerary days, budget tracking, packing checklists and a live-total cart, using React Context API and reusable custom hooks for global state.",
      "Admin-only catalog management routes and database seeding scripts, plus a Vitest unit test suite for core frontend features to enable safer refactoring.",
    ],
    links: [{ label: "Source code", href: "https://github.com/Henil1136/traveloops" }],
  },
  {
    name: "NoteVerse-GTU",
    kind: "Study material sharing platform (team project)",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    points: [
      "Built the React.js frontend of a deployed PERN-stack platform where GTU students browse, filter and download notes and past exam papers by subject, branch and semester.",
      "Responsive, mobile-friendly UI with real-time search, filtering and pagination for fast discovery across large document collections.",
      "Integrated JWT-authenticated REST APIs for multi-format uploads (PDF, DOC, DOCX, MP4), delivering a complete upload-to-download user flow.",
    ],
    links: [
      { label: "Live demo", href: "https://note-verse-gtu.vercel.app" },
      { label: "Source code", href: "https://github.com/Henil1136/NoteVerseGTU" },
    ],
  },
  {
    name: "PassOP",
    kind: "Password manager",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Full-stack credential manager with complete CRUD operations through a REST API connecting React.js to an Express.js/MongoDB backend.",
      "Clean, responsive Tailwind CSS interface with copy-to-clipboard and instant UI updates on add, edit and delete without page reloads.",
    ],
    links: [{ label: "Source code", href: "https://github.com/Henil1136/PassOP" }],
  },
];

export const experience = [
  {
    role: "React Intern",
    org: "InfoLabz IT Services Pvt. Ltd., Ahmedabad",
    date: "Jul 2026",
    points: [
      "Built an API-driven React.js application that fetches and renders external REST API data using reusable, component-based architecture.",
      "Applied JavaScript (ES6+), state management and API integration practices under mentor guidance, and reused the same patterns in personal MERN projects.",
    ],
  },
  {
    role: "Skill-Based Training Intern",
    org: "CloudThat × SAL College of Engineering (Microsoft Program 2026)",
    date: "Jul 2026",
    points: [
      "Completed an industry-aligned Microsoft Program 2026 training curriculum and earned a Certificate of Internship.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "Java", "SQL", "HTML5", "CSS3"] },
  {
    group: "Frontend",
    items: ["React.js", "React Hooks", "Context API", "Custom Hooks", "Tailwind CSS", "Responsive Design"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "RESTful API design", "JWT authentication", "Role-based access control", "Prisma ORM (basic)"],
  },
  { group: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { group: "Tools and testing", items: ["Git", "GitHub", "Postman", "Vitest", "VS Code", "Vercel"] },
];

export const education = {
  degree: "B.E. in Information Technology",
  school: "SAL College of Engineering, Ahmedabad (GTU)",
  date: "Expected May 2027",
  detail: "CGPA: 7.83",
};

export const publication = {
  title: "Lightweight Cryptography for IoT Devices",
  venue: "International Journal of Scientific Development and Research (IJSDR), Vol. 11, Issue 4",
  date: "Apr 2026",
};

export const certifications = [
  {
    title: "Meta Web Development Fundamentals Specialization",
    org: "Meta (Coursera)",
    date: "Apr 2026",
    note: "Front-end development, HTML and CSS, Python, databases for back-end, Django.",
  },
  { title: "Technology Job Simulation", org: "Deloitte Australia (Forage)", date: "2026" },
  {
    title: "Participant, TarkShaastra 2k26 24-hour hackathon",
    org: "L.D. College of Engineering, Ahmedabad",
    date: "Apr 2026",
  },
];

export const languages = "English (professional), Hindi (native), Gujarati (native)";
