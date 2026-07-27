export const portfolio = {
  name: "Naveen Kumar",
  title: "Senior Java Full-Stack Engineer",
  shortTitle: "Full-Stack Developer",
  location: "USA",
  experience: "6+ years",
  image: "https://github.com/NaveenKumarM9.png?size=320",
  headline:
    "Building secure, scalable enterprise platforms across banking, healthcare, insurance, and investment services.",
  summary:
    "I’m a Senior Java Full-Stack Engineer with 6+ years of experience modernizing enterprise systems and delivering high-volume applications with Java, Spring Boot, React, Angular, Kafka, AWS, and Azure.",
  detail:
    "My work spans secure OAuth 2.0 APIs, microservices, identity and access management, mainframe integrations, event-driven services, cloud delivery, automated testing, and production support.",
  links: {
    github: "https://github.com/NaveenKumarM9",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-1b83a4205/",
    email: "naveenk.dev11@gmail.com",
    phone: "+1 (630) 634-2111",
  },
  coreStack: [
    "Java",
    "Spring Boot",
    "Microservices",
    "React",
    "Angular",
    "Kafka",
    "AWS",
    "Azure",
  ],
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "impact", label: "Impact" },
  { id: "case-studies", label: "Case Studies" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const metrics = [
  { value: "1.2M+", label: "records processed per batch cycle" },
  { value: "22", label: "secure REST APIs delivered" },
  { value: "500+", label: "identities managed through IAM automation" },
  { value: "250K+", label: "monthly financial transactions supported" },
  { value: "41", label: "healthcare workflows orchestrated" },
  { value: "15+", label: "microservices deployed" },
];

export const experiences = [
  {
    role: "Senior Java Full-Stack Developer (AI)",
    company: "Bank of America",
    date: "May 2025 — Present",
    location: "USA",
    summary:
      "Modernizing regulated enterprise integrations and building secure identity, credential, and incident-management services.",
    bullets: [
      "Reverse-engineered Mule 4 integrations into Spring Boot microservices supporting 12 downstream enterprise systems.",
      "Designed 22 REST APIs with Spring Security and OAuth 2.0 and processed 1.2M+ records per batch cycle.",
      "Built a metadata-driven provisioning and credential-vaulting engine managing 500+ service identities.",
      "Developed AI-assisted Splunk alert summaries and dynamic HTML notifications to improve incident triage.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "Angular",
      "IBM DB2",
      "Docker",
      "Jenkins",
    ],
  },
  {
    role: "Senior Java Full-Stack Developer",
    company: "PharmaCord",
    date: "Nov 2024 — May 2025",
    location: "USA",
    summary:
      "Delivered a patient-services platform coordinating eligibility, enrollment, and support workflows.",
    bullets: [
      "Orchestrated 41 BPMN and Camunda healthcare workflows handling 100K+ monthly transactions.",
      "Built 15+ Angular operational screens and Spring Boot services backed by MySQL and MongoDB.",
      "Integrated 10+ systems using MuleSoft, Kafka, and ActiveMQ.",
      "Shipped 12+ releases through AWS, Docker, Kubernetes, and Jenkins delivery pipelines.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Camunda",
      "Angular",
      "MySQL",
      "MongoDB",
      "Kafka",
      "AWS",
    ],
  },
  {
    role: "Java Full-Stack Developer",
    company: "Liberty Mutual",
    date: "Mar 2024 — Nov 2024",
    location: "USA",
    summary:
      "Built policy-servicing capabilities across underwriting, billing, claims, and customer workflows.",
    bullets: [
      "Developed Spring Boot modules processing 120K+ policy transactions per month.",
      "Built 20+ React and Angular screens and managed persistence across 15+ relational tables.",
      "Integrated eight downstream services using Kafka and REST APIs.",
      "Validated 90+ automated tests and released 10+ application builds.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Angular",
      "Kafka",
      "Hibernate",
      "AWS",
      "JUnit",
    ],
  },
  {
    role: "Java Full-Stack Developer",
    company: "Tata Consultancy Services",
    client: "Client: New York Life Insurance",
    date: "Nov 2020 — Oct 2022",
    summary:
      "Delivered high-volume insurance and financial-services applications as a TCS client engagement.",
    bullets: [
      "Built Spring Boot microservices supporting 250K+ monthly transactions.",
      "Introduced GraphQL services for 6+ frontend consumers and 10+ Kafka-driven workflows.",
      "Improved 12+ high-traffic data paths through Hibernate caching and query tuning.",
      "Delivered 20+ pipelines using Jenkins, Kubernetes, Azure DevOps, and Azure services.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "GraphQL",
      "Angular",
      "Kafka",
      "Azure",
      "Cosmos DB",
      "Kubernetes",
    ],
  },
  {
    role: "Java Full-Stack Developer",
    company: "Tata Consultancy Services",
    client: "Client: Vanguard",
    date: "Aug 2019 — Nov 2020",
    summary:
      "Developed investment-services applications and supported production operations as a TCS client engagement.",
    bullets: [
      "Supported 60K+ monthly requests using Java, Spring MVC, JDBC, and REST APIs.",
      "Created 12+ responsive React screens and improved modularity across 25+ service classes.",
      "Built Spring Boot services with Hibernate and MySQL and validated 80+ test scenarios.",
      "Released 8+ builds through Jenkins, Docker, Kubernetes, and AWS while supporting 24/7 on-call rotations.",
    ],
    tech: [
      "Java",
      "Spring MVC",
      "Spring Boot",
      "React",
      "Hibernate",
      "MySQL",
      "Docker",
      "AWS",
    ],
  },
];

export const caseStudies = [
  {
    title: "Enterprise IAM Provisioning & Vaulting Engine",
    eyebrow: "Banking · Identity & Access Management",
    description:
      "A metadata-driven Java platform that automates service-ID creation, role enforcement, password generation, vaulting, rotation, de-provisioning, and credential lifecycle operations.",
    metrics: ["500+ managed identities", "300+ daily transactions"],
    tech: ["Java", "Spring Boot", "Spring Security", "IBM DB2"],
  },
  {
    title: "AI-Powered Incident Notification Service",
    eyebrow: "Operations · AI-assisted automation",
    description:
      "A Spring Boot service that processes Splunk webhooks, extracts operational metadata, produces concise AI-assisted incident summaries, and generates context-aware HTML notifications.",
    metrics: ["Faster incident triage", "Automated warning and failure alerts"],
    tech: ["Spring Boot", "Splunk", "AI summarization", "HTML"],
  },
  {
    title: "MuleSoft-to-Spring Boot Modernization",
    eyebrow: "Enterprise integration · Modernization",
    description:
      "Reverse-engineered Mule 4 flows and rebuilt them as scalable Spring Boot microservices with consistent API execution and transactional integration patterns.",
    metrics: ["12 downstream systems", "15+ services deployed"],
    tech: ["MuleSoft", "Spring Boot", "REST APIs", "Docker"],
  },
];

export const projects = [
  {
    title: "Aeromix",
    subtitle: "Weather-Aware Cocktail Recommendations",
    description:
      "A production-ready application that combines live weather and geocoding data with rule-driven JSON and XML catalogs to generate personalized cocktail recommendations.",
    impact:
      "Delivers 50+ recommendation possibilities with search, filtering, preference controls, recipe details, and favorites.",
    tech: [
      "Java 25",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "GitHub Actions",
    ],
    link: "https://github.com/NaveenKumarM9/aeromix-weather-cocktail-recommendation-app",
    linkLabel: "View source",
    type: "Full-stack application",
    mark: "AX",
    year: "2026",
  },
  {
    title: "COVID-19 Data Analytics Platform",
    subtitle: "Cloud Data & Reporting",
    description:
      "A cloud-based analytics platform that ingested, transformed, modeled, and analyzed more than one million COVID-19 records.",
    impact:
      "Enabled interactive public-health trend analysis and reporting through Power BI dashboards.",
    tech: ["Power BI", "Azure Data Factory", "Azure Data Lake", "Data Modeling"],
    type: "Data platform",
    mark: "DA",
    year: "Portfolio project",
  },
  {
    title: "Online Banking Web Application",
    subtitle: "Secure Multi-Tier Banking",
    description:
      "A secure multi-tier web application supporting authentication, account management, transaction processing, and more than 10 core banking functions.",
    impact:
      "Applied layered application design across a Java backend, Angular interface, Hibernate persistence, and SQL data store.",
    tech: ["Java", "Hibernate", "Angular", "HTML", "CSS", "SQL"],
    type: "Enterprise web application",
    mark: "OB",
    year: "Portfolio project",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java 8 / 11 / 17", "JavaScript ES6", "TypeScript", "SQL", "Python"],
    core: ["Java 8 / 11 / 17", "SQL"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Hibernate",
      "JPA",
      "JDBC",
      "JPQL",
    ],
    core: ["Spring Boot", "Spring Security", "Microservices"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
    core: ["React", "Angular", "TypeScript"],
  },
  {
    title: "Data & Messaging",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "IBM DB2",
      "DynamoDB",
      "Azure SQL",
      "Cosmos DB",
      "Kafka",
      "ActiveMQ",
      "RabbitMQ",
    ],
    core: ["IBM DB2", "Kafka", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Azure DevOps",
      "Maven",
      "Git",
      "CI/CD",
    ],
    core: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Quality & Operations",
    skills: [
      "JUnit 5",
      "Mockito",
      "Postman",
      "Selenium",
      "Splunk",
      "JIRA",
      "Agile / Scrum",
      "Production Support",
      "On-call Support",
    ],
    core: ["JUnit 5", "Mockito", "Production Support"],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Purdue University Northwest",
    location: "Hammond, Indiana",
    date: "Aug 2022 — Dec 2023",
  },
];

export const industries = [
  "Banking",
  "Identity & Access Management",
  "Financial Services",
  "Insurance",
  "Healthcare",
  "Investment Services",
  "Enterprise Integration",
  "Cloud Modernization",
];
