// All the text on the site lives here. Edit this file to update your portfolio.
export const profile = {
  name: 'Abhishek Khambat',
  fullName: 'Abhishek Subhash Khambat',
  tagline: 'Full stack developer who builds MERN apps with secure logins, role-based dashboards, and clean REST APIs. Based in Chhatrapati Sambhajinagar, open to entry-level roles.',
  email: 'abhishekkhambat35@gmail.com',
  phone: '+91 95293 03811',
  phoneLink: 'tel:+919529303811',
  whatsapp: 'https://wa.me/919529303811?text=Hi%20Abhishek%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.',
  linkedin: 'https://linkedin.com/in/abhishek-khambat-564895321',
  github: 'https://github.com/AbhishekKhambat',
  leetcode: 'https://leetcode.com/u/AbhishekKhambat',
}

export const roles = ['secure login systems', 'REST APIs', 'React interfaces', 'full-stack MERN apps']

export const stats = [
  { n: 3.5, d: 1, label: 'month full-stack internship' },
  { n: 2, d: 0, label: 'full-stack projects' },
  { n: 7.8, d: 1, label: 'CGPA out of 10' },
  { text: 'MERN', label: 'main tech stack' },
]

export const marquee = ['JavaScript','Java','React.js','Node.js','Express.js','MongoDB','MySQL','REST APIs','JWT','Tailwind CSS','Redux Toolkit','Git & GitHub','Postman','Vite']

export const projects = [
  {
    title: 'Employee Management System', mock: 'dash',
    stack: ['React.js','Node.js','Express.js','MongoDB','JWT','Tailwind CSS'],
    points: [
      'Full-stack MERN app with separate Admin and Employee dashboards to manage employee records, attendance, and roles.',
      'JWT authentication with role-based access control, so each user sees only what their role allows.',
      'RESTful CRUD APIs consumed through Axios, backed by MongoDB schemas modeled for employee data.',
      'Reusable, responsive React components styled with Tailwind CSS.',
    ],
  },
  {
    title: 'BlogSphere', mock: 'blog',
    stack: ['React.js','Vite','Appwrite','Redux Toolkit','React Router','Tailwind CSS'],
    points: [
      'Responsive blogging platform with Appwrite authentication, session management, and protected routes.',
      'Full CRUD for blog posts, with client-side routing in React Router and auth state managed in Redux Toolkit.',
      'Mobile-friendly Tailwind CSS interface, with the codebase managed in Git and GitHub.',
    ],
  },
]

export const experience = {
  role: 'Full Stack Developer Trainee',
  meta: 'SBS Mindscript Software Solutions, Jan 2024 to Apr 2024',
  points: [
    'Worked across the full software development cycle in a 3.5-month internship: requirements, design, coding, debugging, and testing.',
    'Built and integrated frontend and backend parts of an internal web app, with code reviews from senior developers.',
    'Delivered the capstone project ahead of schedule, rated as exceeding expectations by the engineering team.',
  ],
}

export const skills = [
  { label: 'Languages', items: ['JavaScript','Java','SQL'] },
  { label: 'Frontend', items: ['React.js','Redux Toolkit','React Router','HTML5','CSS3','Tailwind CSS','Bootstrap'] },
  { label: 'Backend', items: ['Node.js','Express.js','REST APIs','JWT','Role-based access'] },
  { label: 'Databases and tools', items: ['MongoDB','MySQL','Appwrite','Git','GitHub','Postman','Vite'] },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  school: 'Maharashtra Institute of Technology, Chhatrapati Sambhajinagar',
  when: 'Nov 2020 to Jul 2024 \u00B7 CGPA 7.80 / 10',
}

export const api={
"/profile":{name:"Abhishek Subhash Khambat",role:"Full Stack Developer (MERN)",location:"Chhatrapati Sambhajinagar, India",education:"B.Tech Computer Science, CGPA 7.80",openTo:["Software Engineer","Full Stack Developer"],status:"available"},
"/skills":{frontend:["React.js","Redux Toolkit","Tailwind CSS"],backend:["Node.js","Express.js","REST APIs","JWT"],databases:["MongoDB","MySQL"],tools:["Git","GitHub","Postman","Vite"]},
"/projects":[{name:"Employee Management System",stack:"MERN + JWT",highlights:["Admin and Employee dashboards","Role-based access control"]},{name:"BlogSphere",stack:"React + Appwrite + Redux",highlights:["Protected routes","Full blog CRUD"]}],
"/experience":{company:"SBS Mindscript Software Solutions",title:"Full Stack Developer Trainee",duration:"Jan 2024 - Apr 2024",result:"Capstone delivered ahead of schedule"}
};
