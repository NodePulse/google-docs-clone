export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `Dear [Recipient Name],

I am writing to [state purpose of the letter]. 

Sincerely,
[Your Name]`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `Dear Hiring Manager,

I am writing to express my interest in the [Job Title] position at [Company Name]. My background in [Your Field] and my experience with [relevant experience] make me a strong candidate for this role.

Thank you for considering my application.

Best regards,
[Your Name]`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `Dear [Recipient Name],

I hope this letter finds you well. I wanted to reach out and [reason for writing].

Warm regards,
[Your Name]`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `Project Title: [Enter Title Here]

Objective:
- [List key objectives]

Timeline:
- Start Date: [MM/DD/YYYY]
- End Date: [MM/DD/YYYY]

Budget:
- Estimated Cost: [Amount]

Prepared by: [Your Name]`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `Name: [Your Name]
  Email: [you@example.com] | Phone: [+1-234-567-8901] | LinkedIn: [linkedin.com/in/yourprofile]
  
  Professional Summary:
  Results-oriented professional with 5+ years of experience in software development, specializing in building scalable web applications using React, Node.js, and MongoDB. Proven ability to lead teams, deliver projects on time, and improve system performance by 30%.
  
  Work Experience:
  - Software Engineer | ABC Tech Solutions | Jan 2020 - Present
    • Developed and maintained a client-facing dashboard used by 100,000+ users.
    • Led a migration project from REST to GraphQL, reducing API latency by 40%.
    • Mentored 4 junior developers and conducted monthly code reviews.
  
  - Frontend Developer | CreativeApps Inc. | Jul 2017 - Dec 2019
    • Built reusable UI components in React for an e-commerce platform.
    • Collaborated with designers to improve UX, leading to a 20% increase in conversions.
  
  Education:
  - B.S. in Computer Science | XYZ University | Graduated: 2017
  
  Certifications:
  - AWS Certified Developer – Associate
  - Google UX Design Certificate
  
  Technical Skills:
  - Frontend: React, Redux, HTML5, CSS3, Tailwind CSS
  - Backend: Node.js, Express, MongoDB, PostgreSQL
  - Tools: Git, Docker, Figma, Jira, Webpack
  
  Projects:
  - Portfolio Website – Built a 3D animated portfolio using Three.js and React.
  - Task Tracker App – Created a full-stack productivity app with user auth and real-time updates.
  
  References available upon request.`,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `Project Title: Smart Inventory Management System
  
  Prepared For: [Client Name]
  Prepared By: [Your Name / Company Name]
  Date: [MM/DD/YYYY]
  
  Executive Summary:
  This proposal outlines the development of a Smart Inventory Management System to help businesses track, manage, and optimize stock levels in real-time using automation and analytics.
  
  Goals and Objectives:
  - Reduce inventory holding costs by 25% within 6 months.
  - Enable real-time alerts for low-stock and overstocked items.
  - Integrate seamlessly with existing ERP systems.
  
  Features:
  - Dashboard with inventory KPIs and trend analytics
  - Barcode and QR code scanning
  - Real-time stock tracking and alerts
  - Supplier management module
  - Role-based access and permissions
  
  Technology Stack:
  - Frontend: React, Redux, Tailwind CSS
  - Backend: Node.js, Express, MongoDB
  - Other: Firebase (for auth and real-time DB), Docker (for containerization)
  
  Development Timeline:
  - Phase 1: Requirements & Wireframing (1 week)
  - Phase 2: UI/UX Design (1 week)
  - Phase 3: Frontend + Backend Development (3 weeks)
  - Phase 4: Testing & Deployment (1 week)
  - Total: 6 weeks
  
  Budget Estimate:
  - Development: $5,000
  - Maintenance (6 months): $1,200
  
  Conclusion:
  We are confident that our solution will deliver long-term value, improve operational efficiency, and reduce manual inventory errors. We look forward to partnering with you on this project.
  
  Contact:
  [Your Name]
  [Your Email]
  [Your Website or Company]`,
  },
];
