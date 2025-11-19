export const personalInfo = {
  name: "Sanskar Vaibhav",
  title: "Software Developer",
  location: "Begusarai, India",
  currentLocation: "Greater Noida",
  tagline: "Building innovative solutions with Java, Python, and AI/ML",
  bio: `A results-driven and enthusiastic Computer Science student specializing in AIML, seeking opportunities to gain experience and expand my knowledge in software development. I'm passionate about contributing to collaborative teams and using my skills in data structures, algorithms, and full-stack development to build innovative solutions.`,
  education: "B.Tech - Computer Science and Engineering (AIML)",
  university: "Galgotias University",
  cgpa: "8.5",
  graduationYear: "2026",
  email: "sanskarvaibhav602@gmail.com",
  phone: "+91-9142036674",
  resumeUrl: "/api/resume",
  social: {
    github: "https://github.com/SanskarVaibhav",
    linkedin: "https://www.linkedin.com/in/sanskar-vaibhav",
    leetcode: "https://leetcode.com/SanskarVaibhav",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/SanskarVaibhav"
  }
};

export const skills = {
  primary: [
    { name: "Java", icon: "fab fa-java", level: 90 },
    { name: "Python", icon: "fab fa-python", level: 85 },
    { name: "SQL", icon: "fas fa-database", level: 80 },
    { name: "C++", icon: "fas fa-code", level: 75 },
    { name: "JavaScript", icon: "fab fa-js", level: 80 },
    { name: "DSA", icon: "fas fa-project-diagram", level: 85 }
  ],
  webDev: [
    { name: "HTML5", icon: "fab fa-html5", level: 90 },
    { name: "CSS3", icon: "fab fa-css3-alt", level: 85 },
    { name: "React.js", icon: "fab fa-react", level: 80 },
    { name: "Node.js", icon: "fab fa-node-js", level: 75 },
    { name: "Express", icon: "fas fa-server", level: 75 },
    { name: "Spring Boot", icon: "fas fa-leaf", level: 70 }
  ],
  aiml: [
    { name: "TensorFlow", icon: "fas fa-brain", level: 75 },
    { name: "PyTorch", icon: "fas fa-fire", level: 70 },
    { name: "Scikit-learn", icon: "fas fa-chart-line", level: 80 },
    { name: "Pandas", icon: "fas fa-table", level: 85 },
    { name: "NumPy", icon: "fas fa-calculator", level: 85 },
    { name: "Jupyter", icon: "fas fa-book", level: 80 }
  ],
  cloud: [
    { name: "AWS EC2", icon: "fab fa-aws", level: 75 },
    { name: "AWS S3", icon: "fab fa-aws", level: 75 },
    { name: "AWS Lambda", icon: "fab fa-aws", level: 70 },
    { name: "CloudWatch", icon: "fas fa-cloud", level: 70 },
    { name: "Terraform", icon: "fas fa-tools", level: 65 }
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt", level: 85 },
    { name: "GitHub", icon: "fab fa-github", level: 85 },
    { name: "VS Code", icon: "fas fa-code", level: 90 },
    { name: "IntelliJ IDEA", icon: "fas fa-laptop-code", level: 85 },
    { name: "PyCharm", icon: "fas fa-laptop-code", level: 80 },
    { name: "Postman", icon: "fas fa-network-wired", level: 80 }
  ],
  databases: [
    { name: "MySQL", icon: "fas fa-database", level: 80 },
    { name: "MongoDB", icon: "fas fa-leaf", level: 75 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Full-Stack Auction Platform",
    description: "Engineered a web-based auction platform with responsive frontend built using React and backend powered by Node.js. Integrated secure authentication with bcrypt and JWT.",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Bcrypt", "Nodemailer"],
    github: "https://github.com/SanskarVaibhav/AuctionWeb",
    liveDemo: null,
    year: "2025",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Text Emotion Detection",
    description: "Developed a machine learning pipeline to detect emotions (joy, anger, sadness) from text using Python. Built and deployed a web application with Flask for real-time emotion detection.",
    techStack: ["Python", "Scikit-learn", "Flask", "TF-IDF", "Machine Learning"],
    github: "https://github.com/SanskarVaibhav/Text-Emotion-Detection",
    liveDemo: null,
    year: "2025",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "SGPA Calculator",
    description: "Developed a Java-based SGPA Calculator with Swing GUI interface for academic grading automation. Implemented features for subject input, credit handling, and dynamic SGPA computation.",
    techStack: ["Java", "Swing", "MySQL", "Eclipse IDE"],
    github: "https://github.com/SanskarVaibhav/SGPA-CALCULATOR",
    liveDemo: null,
    year: "2023",
    category: "Desktop App"
  },
  {
    id: 4,
    title: "Mental Health Chatbot",
    description: "AI-powered chatbot focused on mental health awareness and support developed during Techdesk Hackathon. Provides empathetic responses and mental health resources.",
    techStack: ["Python", "NLP", "AI/ML", "Flask"],
    github: "https://github.com/SanskarVaibhav/Mental-Health-Model",
    liveDemo: null,
    year: "2025",
    category: "AI/ML"
  },
  {
    id: 5,
    title: "Face Detection Model",
    description: "Computer vision model for real-time face detection using deep learning. Implemented with high accuracy and optimized for performance.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
    github: "https://github.com/SanskarVaibhav/Face-Detection-model",
    liveDemo: null,
    year: "2025",
    category: "AI/ML"
  },
  {
    id: 6,
    title: "Alexa Voice Clone",
    description: "Voice assistant application inspired by Amazon Alexa with speech recognition and natural language processing capabilities.",
    techStack: ["Python", "Speech Recognition", "NLP", "API Integration"],
    github: "https://github.com/SanskarVaibhav/Alexa-Clone",
    liveDemo: null,
    year: "2025",
    category: "AI/ML"
  },
  {
    id: 7,
    title: "Flashcard Generator",
    description: "Educational tool for generating flashcards automatically from text content. Helps in studying and memorization with smart card creation.",
    techStack: ["Python", "NLP", "Text Processing"],
    github: "https://github.com/SanskarVaibhav/flashcard_generator",
    liveDemo: null,
    year: "2025",
    category: "Education"
  },
  {
    id: 8,
    title: "ChatBot Application",
    description: "Interactive chatbot built with Java featuring natural conversation flow and context awareness for various use cases.",
    techStack: ["Java", "NLP", "Machine Learning"],
    github: "https://github.com/SanskarVaibhav/ChatBot",
    liveDemo: null,
    year: "2025",
    category: "AI/ML"
  }
];

export const internships = [
  {
    id: 1,
    company: "Eduskills Academy",
    role: "AWS Cloud Intern",
    duration: "October - December 2024",
    logo: "fab fa-aws",
    responsibilities: [
      "Deployed and managed scalable applications using AWS services like EC2, S3, Lambda, and RDS",
      "Automated infrastructure provisioning using AWS CloudFormation and Terraform",
      "Monitored application performance and logs using CloudWatch and AWS X-Ray",
      "Implemented secure authentication and access control using IAM roles and policies"
    ]
  },
  {
    id: 2,
    company: "Eduskills Foundation",
    role: "Google AIML Intern",
    duration: "April - June 2025",
    logo: "fab fa-google",
    responsibilities: [
      "Developed and deployed machine learning models using Python and AI/ML libraries such as TensorFlow and Scikit-learn",
      "Built and integrated AI/ML solutions with cloud-based platforms, leveraging AWS services",
      "Monitored model deployment performance and logs using CloudWatch and AWS X-Ray",
      "Implemented secure authentication and access control for AI applications using IAM roles",
      "Gained hands-on experience in data preprocessing, feature engineering, and model evaluation"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Python Essentials 1 and 2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    icon: "fas fa-certificate"
  },
  {
    id: 2,
    title: "Compiler Design",
    issuer: "NPTEL",
    date: "2024",
    icon: "fas fa-certificate"
  },
  {
    id: 3,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2024",
    icon: "fas fa-certificate"
  },
  {
    id: 4,
    title: "GeeksforGeeks API BootCamp",
    issuer: "Sponsored by Postman",
    date: "2024",
    icon: "fas fa-certificate"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Techdesk Hackathon",
    description: "Developed an AI-powered chatbot focused on mental health awareness and support",
    date: "2025",
    icon: "fas fa-trophy"
  },
  {
    id: 2,
    title: "LAUNCHPAD Hackathon",
    description: "Developed an automated Sensor model focused on Detection of the level of Garbage inside the dustbin and give signal to Cleaner Nearby location",
    date: "2025",
    icon: "fas fa-trophy"
  }
];
