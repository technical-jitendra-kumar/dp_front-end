import React from 'react';

export const HIRING_ROWS = [
  [
    { name: "Google",         role: "AI / ML Engineer"       },
    { name: "Amazon",         role: "Data Engineer"          },
    { name: "Microsoft",      role: "Cloud Data Architect"   },
    { name: "Deloitte",       role: "Analytics Consultant"   },
    { name: "JPMorgan",       role: "Quant Analyst"          },
    { name: "Goldman Sachs",  role: "IB Analyst"             },
    { name: "TCS",            role: "Data Scientist"         },
    { name: "Infosys",        role: "Software Engineer"      },
    { name: "Wipro",          role: "AI Engineer"            },
    { name: "Tech Mahindra",  role: "DevOps Engineer"        },
  ],
  [
    { name: "Fractal",        role: "Decision Scientist"     },
    { name: "Sony Pictures",  role: "Media Tech Lead"        },
    { name: "AT&T",           role: "Platform Engineer"      },
    { name: "SpringWorks",    role: "Product Engineer"       },
    { name: "Turing",         role: "Remote AI Engineer"     },
    { name: "IDFC First Bank",role: "Risk Analyst"           },
    { name: "AXA",            role: "ML Operations"          },
    { name: "BNY Mellon",     role: "Quant Developer"        },
    { name: "Saint-Gobain",   role: "Data Analyst"           },
    { name: "Genpact",        role: "Process Automation"     },
  ],
  [
    { name: "Sprinklr",       role: "NLP Engineer"           },
    { name: "Bandhan Bank",   role: "Credit Risk ML"         },
    { name: "GlobalLogic",    role: "Solutions Architect"    },
    { name: "Uptime AI",      role: "Applied ML"             },
    { name: "PwC",            role: "Data Consultant"        },
    { name: "Autodesk",       role: "ML Engineer"            },
    { name: "Booking.com",    role: "Data Analyst"           },
    { name: "EaseMyTrip",     role: "BI Developer"           },
    { name: "Accenture",      role: "Tech Consultant"        },
    { name: "EY",             role: "Business Analyst"       },
  ],
  [
    { name: "Razorpay",       role: "Backend Engineer"       },
    { name: "Capgemini",      role: "Data Analyst"           },
    { name: "KPMG",           role: "Risk Analytics"         },
    { name: "IBM",            role: "Data Platform Engineer" },
    { name: "Adobe",          role: "Analytics Engineer"     },
    { name: "Flipkart",       role: "Data Scientist"         },
    { name: "Zomato",         role: "ML Engineer"            },
    { name: "Paytm",          role: "Risk Analyst"           },
    { name: "Swiggy",         role: "Demand Forecasting"     },
    { name: "Goldman Sachs",  role: "Equity Research"        },
  ],
];

export const LOGO_COLORS = {
  Google: null,
  Amazon: "#FF9900", 
  Microsoft: null, 
  Deloitte: "#86BC25",
  JPMorgan: "#003087", 
  "Goldman Sachs": "#1a1a2e", 
  TCS: "#1C4DA1",
  Infosys: "#007CC3", 
  Wipro: "#341C6A", 
  "Tech Mahindra": "#E31837",
  Fractal: "#FF5722", 
  "Sony Pictures": "#111", 
  "AT&T": "#00A8E0",
  SpringWorks: "#2563EB", 
  Turing: "#7C3AED", 
  "IDFC First Bank": "#FF6B00",
  AXA: "#00008F", 
  "BNY Mellon": "#009B77", 
  "Saint-Gobain": "#E4002B",
  Genpact: "#9B1D6A", 
  Sprinklr: "#0047AB", 
  "Bandhan Bank": "#E31837",
  GlobalLogic: "#00539B", 
  "Uptime AI": "#10B981", 
  PwC: "#D04A02",
  Autodesk: "#0696D7", 
  "Booking.com": "#003580", 
  EaseMyTrip: "#FF6B00",
  Accenture: "#A100FF", 
  EY: "#FFE600", 
  Razorpay: "#3395FF",
  Capgemini: "#0070AD", 
  KPMG: "#00338D", 
  IBM: "#1F70C1",
  Adobe: "#FF0000", 
  Flipkart: "#F74F00", 
  Zomato: "#E23744",
  Paytm: "#002970", 
  Swiggy: "#FC8019",
};

export const TESTIMONIALS = [
  { 
    name: "Priya Ramesh",  
    role: "Data Analyst · Amazon",          
    avatar: "PR", 
    color: "#0057FF", 
    stars: 5, 
    text: "DataPreneur completely changed my trajectory. Went from a non-technical marketing role to Data Analyst at Amazon in 4 months. The placement team is genuinely invested in you." 
  },
  { 
    name: "Arjun Khanna",  
    role: "IB Analyst · Goldman Sachs",     
    avatar: "AK", 
    color: "#D97706", 
    stars: 5, 
    text: "The IB course was incredibly thorough. I cracked my Goldman Sachs interview using the exact financial models we built in class. Every rupee well spent." 
  },
  { 
    name: "Sneha Mishra",  
    role: "ML Engineer · Razorpay",         
    avatar: "SM", 
    color: "#059669", 
    stars: 5, 
    text: "Zero coding background when I started. The structure was so clear. By month 3 I had a working ML model. Now I'm a junior ML Engineer at Razorpay!" 
  },
  { 
    name: "Rohit Sharma",  
    role: "AI Engineer · Microsoft",        
    avatar: "RS", 
    color: "#7C3AED", 
    stars: 5, 
    text: "The Agentic AI course is cutting-edge. I demo'd my RAG-powered chatbot in every interview. It became my biggest talking point and helped me land Microsoft." 
  },
  { 
    name: "Neha Pillai",   
    role: "Business Analyst · Deloitte",    
    avatar: "NP", 
    color: "#DC2626", 
    stars: 5, 
    text: "Switched from civil engineering. DataPreneur's small batches meant I could ask every question. Got placed at Deloitte 2 months after completing the program." 
  },
  { 
    name: "Vikram Nair",   
    role: "Data Scientist · Flipkart",      
    avatar: "VN", 
    color: "#0891B2", 
    stars: 5, 
    text: "The capstone project with real Flipkart data was a game-changer. I literally discussed my project results in the Flipkart interview. Best career decision I've made." 
  },
];

// Icon SVG Components
const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconUsers = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10Z"></path>
    <path d="M12 9v6M9 12h6"></path>
  </svg>
);

const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 4V2m-8 2V2M2 11h20"></path>
  </svg>
);

const IconStar = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const FEATURES = [
  { 
    icon: <IconClock />, 
    title: "Industry-First Curriculum", 
    desc: "Built with hiring managers at Google, JPMorgan & Amazon. Updated every quarter." 
  },
  { 
    icon: <IconUsers />, 
    title: "Small Batches, Big Impact", 
    desc: "Max 25 students per cohort. Your mentor knows your name, goals, and blockers." 
  },
  { 
    icon: <IconCode />, 
    title: "Real-World Projects", 
    desc: "Capstone projects using real datasets from Swiggy, HDFC & MakeMyTrip." 
  },
  { 
    icon: <IconBriefcase />, 
    title: "100% Placement Support", 
    desc: "Resume reviews, mock interviews, LinkedIn optimization and direct referrals." 
  },
  { 
    icon: <IconStar />, 
    title: "Microsoft Certified", 
    desc: "Official Microsoft Learning Partner. Recognized globally across FAANG & MNCs." 
  },
  { 
    icon: <IconPhone />, 
    title: "Mentor-on-Call", 
    desc: "Stuck at 11pm on a project? Your mentor is reachable. We don't close at 5pm." 
  },
];

export const STEPS = [
  { n: "01", title: "Free Counselling",  desc: "30-min 1:1 session with a career advisor. We map the right program to your skills and target role." },
  { n: "02", title: "Learn by Building", desc: "Live classes, real datasets, weekly projects. Every session has a tangible deliverable." },
  { n: "03", title: "Career Prep",       desc: "Resume makeover, mock interviews with working professionals, and LinkedIn optimization." },
  { n: "04", title: "Get Hired",         desc: "Access exclusive job listings, direct referrals and alumni intros — until you land the role." },
];