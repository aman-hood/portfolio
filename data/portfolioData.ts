import {
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Wrench,
  Palette
} from "lucide-react";

export const portfolioData = {
  hero: {
    name: "Aman Kumar",
    title: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies.",
    image: "/aman.png", // Next.js public assets use absolute root path
    cta: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Contact Me", href: "#contact" }
    }
  },
  about: {
    summary: "I am a passionate Full Stack Developer with experience in building end-to-end web applications. My journey started with a deep curiosity about how things work on the internet, which led me to dive into both frontend and backend technologies. I am committed to continuous learning and enjoy tackling complex problems to deliver robust, user-centric solutions. With a strong foundation in modern JavaScript frameworks and database management, I aim to drive innovation and create impactful digital experiences.",
    image: "/aboutme.jpeg",
  },
  skills: [
    {
      category: "Languages",
      icon: Terminal,
      items: ["C++", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend",
      icon: Layout,
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "Next.js API"]
    },
    {
      category: "Database",
      icon: Database,
      items: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "VS Code", "Postman"]
    }
  ],
  projects: [
    {
      title: "ARHomeSpace",
      description: "An online furniture store that uses augmented reality to let users visualize and choose furniture in their real space before purchasing.",
      techStack: ["ReactJS", "JavaScript", "NodeJS", "Express","Tailwind CSS", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/aman-hood/Online_Furniture_Store_with_AR_Preview",
      image: "/ARhomespace.jpeg"
    },
    {
      title: "GraphPath Visualizer",
      description: "An interactive web-based simulation tool that visualizes  and compares shortest path algorithms in real time using dynamic graph construction.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "Canvas API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/aman-hood/GraphProject",
      image: "/graph.png"
    },
    {
      title: "Agent Connect",
      description: "Built a platform to connect with potential agents and facilitate application process and hiring.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "jQuery", "PHP"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/aman-hood/FullStack-Project",
      image: "/agentconnect.png"
    },
    {
      title: "Secure File Management",
      description: "Web-based program that allowed users to have a secure platform for uploading, storing, and managing files securely.",
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "jQuery", "PHP-Mailer", "CryptoJS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/aman-hood/CSE-316",
      image: "/sfms.png"
    },    
    {
      title: "AI Festival & Event Finder",
      description: "AI-powered chatbot that alerted users about upcoming cultural festivals and events based on interest and location.",
      techStack: ["HTML", "CSS", "JavaScript", "Gemini-API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/aman-hood/AI-ChatBot",
      image: "/AIchatbot.png"
    }
  ],
  experience: [
    {
      role: "Winter Intern",
      company: "IIT Ropar",
      logo: "/iitropar_logo.jpg",
      duration: "Dec 2025 - Jan 2026",
      responsibilities: [
        "Solved 42 real-world case studies to apply full-stack concepts, improving practical implementation skills and logical thinking in application development.",
        "Participated in daily stand-up meetings and breakout room sessions, enhancing consistency, communication skills, accountability, and collaborative problem-solving through peer coding and discussions.",
        "Gained hands-on experience in the MERN stack (TypeScript, React, Express, MongoDB) through structured learning and real-world case studies on the Vibe platform during a stipend-based internship."
      ]
    },
    {
      role: "DSA Training",
      company: "Hitbullseye",
      logo: "/hitbullseye_logo.png",
      duration: "Jun 2025 - Jul 2025",
      responsibilities: [
        "Strengthened problem-solving skills through structured DSA practice, developing intuition by breaking problems into logical components before implementation.",
        "Applied pattern recognition across core data structures to solve interview-level problems using optimized and strategic approaches."
      ]
    }
  ],
  education: [
    {
      logo: "/lpu logo.png",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      university: "Lovely Professional University",
      year: "2023 - 2027",
      achievements: [
        "CGPA: 8.27",
        "Solved 400+ Coding Problems on Leetcode",
        "Relevant Coursework: Data Structures, Algorithms, OOPs, DBMS, CN, OS, Web Development."
      ]
    },
    {
      logo: "/paul_logo.png",
      degree: "Intermediate",
      university: "St. Paul’s Inter College",
      year: "2022 - 2023",
      achievements: [
        "Percentage: 87.6%",
        "Cleared NDA & secured AIR 188 (Cleared SSB Interview in First Attempt)",
        "Represented my School at 18th St. Mother Teresa Memorial Inter School Athletic Meet"
      ]
    },
    {
      logo: "/dp_logo.png",
      degree: "Matriculation",
      university: "D P Public School",
      year: "2020 - 2021",
      achievements: [
        "Percentage: 93.4%",
        "Cleared NTSE Stage-1 & secured State Rank - 9",
        "Represented my School at ALFRESCO, Boys' High School and College, Prayagraj"
      ]
    }
  ],
  certifications: [
    {
      logo: "/nptel_logo.jpg",
      title: "Introduction to Internet of Things",
      organization: "NPTEL",
      date: "Nov 2025",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS147S105870024010355660"
    },
    {
      logo: "/nptel_logo.jpg",
      title: "Data Base Management System",
      organization: "NPTEL",
      date: "Sep 2025",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS145S53750033509166084"
    },
    {
      logo: "/pwskills_logo.jpg",
      title: "Backend Development Course",
      organization: "PW Skills",
      date: "Jun 2025",
      link: "https://pwskills.com/learn/certificate/e440f6b8-d3c1-4e5f-8cfd-65cd01079f9f/"
    },
    {
      logo: "/pwskills_logo.jpg",
      title: "Web Development Basics",
      organization: "PW Skills",
      date: "May 2025",
      link: "https://pwskills.com/learn/certificate/c2e6087b-cecc-47c8-a63d-3eb000c417c7/"
    },    
    {
      logo: "/nptel_logo.jpg",
      title: "Cloud Computing",
      organization: "NPTEL",
      date: "May 2025",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S133730093004229141"
    },
    {
      logo: "/nptel_logo.jpg",
      title: "Programming In Java",
      organization: "NPTEL",
      date: "May 2025",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS57S124750049104229141"
    },
    {
      logo: "/nptel_logo.jpg",
      title: "Programming In Modern C++",
      organization: "NPTEL",
      date: "May 2025",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs58/Course/NPTEL25CS58S34750034104229141.pdf"
    },
    {
      logo: "/nptel_logo.jpg",
      title: "Programming, Data Structures And Algorithms Using Python",
      organization: "NPTEL",
      date: "Apr 2025",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS59S44230030101237699"
    },
    {
      logo: "/cipherschool_logo.jpg",
      title: "Data Structures & Algorithms Using C++",
      organization: "CipherSchools",
      date: "Dec 2024",
      link: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_amankumar21dec%40gmail.com_CS2024-10054"
    },
    {
      logo: "/pwskills_logo.jpg",
      title: "Decode C++ with DSA",
      organization: "PW Skills",
      date: "Oct 2024",
      link: "https://pwskills.com/learn/certificate/dba0382b-1e37-4b14-a544-b4d1440723ea/"
    }
  ],
  achievements: [
    {
      title: "NPTEL DOMAIN SCHOLAR IN PROGRAMMING",
      description: "Awarded the NPTEL Domain Scholar certificate in Programming for successfully completing the required core and elective courses. I was also invited and recognized at the NPTEL STAR Interaction Event at IIT Kanpur on January 18, 2026.",
      date: "Jan 2026",
      image: "/domain.jpg",
      link: "https://www.linkedin.com/posts/aman188_nptel-star-once-more-not-alone-this-time-activity-7421148325174816769-Iyej?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYyO1cB8kENrpa8Dg45s4IaQmnI8r9fDc4"
    },
    {
      title: "NPTEL STAR BELIEVER",
      description: "I’ve been awarded the NPTEL Believer certificate for the Jan–Apr 2025 semester. Also I was invited and felicitated at IIT Kanpur on July 12, 2025. This recognition is given to candidates who appear in and successfully complete 4 or more NPTEL courses in single semester.",
      date: "Jul 2025",
      image: "/believer.jpg",
      link: "https://www.linkedin.com/posts/aman188_jee-nda-cuet-activity-7350512503182802944-Iikp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYyO1cB8kENrpa8Dg45s4IaQmnI8r9fDc4"
    },
    {
      title: "2nd Runner Up in Code Mastery Challenge",
      description: "I secured 3rd position in the Code Mastery Challenge—a coding competition organized by the Dynamic Developers Vertos Club under the aegis of LPU CPE.",
      date: "Nov 2024",
      image: "/cpe.jpg",
      link: "https://www.linkedin.com/posts/aman188_codingjourney-activity-7261749728034340864-fArZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYyO1cB8kENrpa8Dg45s4IaQmnI8r9fDc4"
    },
    {
      title: "AIR 188 in NDA , SSB Recommended",
      description: "Cleared the NDA/NA exam conducted by UPSC and got SSB recommended in my first attempt while appearing for Class 12. Secured AIR 188 and was honored by the PW team at their Noida headquarters, where I had the opportunity to meet Alakh Pandey sir.",
      date: "Jul 2023",
      image: "/nda.jpg",
      link: "https://www.linkedin.com/posts/aman188_pw-defencewallah-nda-activity-7121305142397669376-88NC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYyO1cB8kENrpa8Dg45s4IaQmnI8r9fDc4"
    }
  ],
  contact: {
    email: "amankumar21dec@gmail.com",
    linkedin: "https://linkedin.com/in/aman188",
    github: "https://github.com/aman-hood",
    location: "Jalandhar, Punjab"
  }
};
