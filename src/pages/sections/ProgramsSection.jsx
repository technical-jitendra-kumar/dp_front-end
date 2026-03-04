import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { 
  FaPython, 
  FaDatabase, 
  FaChartLine, 
  FaChartBar, 
  FaRobot, 
  FaFire, 
  FaSearch, 
  FaHdd, 
  FaLink,
  FaBrain 
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiDocker, 
  SiOpenai 
} from 'react-icons/si';
import { 
  FiSettings, 
  FiCloud 
} from 'react-icons/fi';
import { BsLightning } from 'react-icons/bs';

const programsData = [
  {
    title: "Data Analytics",
    badge: "Data Tools & Visualization",
    heading: "Data Analytics",
    tagline: "Launch your analytics career in just 6 months",
    description:
      "Master Excel, SQL, Python, Tableau, and Power BI by solving real business problems. Walk out with a portfolio that proves you can deliver insights, not just run queries.",
    tools: [
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Tableau", icon: <FaChartLine /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "Excel", icon: <FiSettings /> },
    ],
    level: "Beginner to Advanced",
    popular: true,
  },
  {
    title: "Business Analytics",
    badge: "Business Intelligence",
    heading: "Business Analytics",
    tagline: "Transform data into business value",
    description:
      "Learn data-driven decision making, KPI frameworks, and business strategy with analytics.",
    tools: [
      { name: "Excel", icon: <FiSettings /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
    level: "Beginner to Advanced",
    popular: false,
  },
  {
    title: "Data Science and AI",
    badge: "AI & Machine Learning",
    heading: "Data Science and AI",
    tagline: "Master AI from fundamentals to deployment",
    description:
      "The complete journey — from Python fundamentals to neural networks, NLP, generative AI, and deployment.",
    tools: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <FaFire /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "AWS", icon: <FiCloud /> },
      { name: "BERT", icon: <FaBrain /> },
    ],
    level: "Beginner to Advanced",
    popular: false,
  },
  {
    title: "Agentic AI & Prompt Engineering",
    badge: "Gen AI",
    heading: "Agentic AI & Prompt Engineering",
    tagline: "Build the future of AI automation",
    description:
      "Build AI agents, automation workflows, and advanced prompting systems.",
    tools: [
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "LangChain", icon: <FaLink /> },
      { name: "RAG", icon: <FaSearch /> },
      { name: "Vector DB", icon: <FaHdd /> },
    ],
    level: "Beginner to Advanced",
    popular: false,
  },
  {
    title: "Investment Banking",
    badge: "Finance & Valuation",
    heading: "Investment Banking",
    tagline: "Master financial modeling and deals",
    description:
      "Master financial modeling, valuation, M&A, and deal structuring for top finance roles.",
    tools: [
      { name: "Excel", icon: <FiSettings /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Python", icon: <FaPython /> },
    ],
    level: "Beginner to Advanced",
    popular: false,
  },
];

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProgram = programsData[activeIndex];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Heading Section */}
        <div style={styles.headingSection}>
          <div style={styles.labelRow}>
            <span style={styles.labelLine}></span>
            <span style={styles.label}>Programs</span>
          </div>

          <h2 style={styles.mainHeading}>
            Choose Your Path.{" "}
            <span style={styles.accentText}>Own Your Future.</span>
          </h2>
        </div>

        {/* Main Card Container */}
        <div style={styles.mainCard}>
          {/* LEFT SIDEBAR MENU */}
          <div style={styles.sidebar}>
            {programsData.map((program, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  ...styles.menuItem,
                  ...(activeIndex === index
                    ? styles.menuItemActive
                    : styles.menuItemInactive),
                }}
              >
                <span>{program.title}</span>
                <ArrowRight
                  className="w-4 h-4"
                  style={{
                    color: activeIndex === index ? "#0052CC" : "#d1d5db",
                    transition: "color 0.3s",
                  }}
                />
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT AREA */}
          <div key={activeIndex} style={styles.contentArea}>
            {/* Top Section with Tagline and Badge */}
            <div style={{
              ...styles.topSection,
              opacity: 0,
              transform: "translateX(20px)",
              animation: "slideInContent 0.4s ease-out 0.1s forwards"
            }}>
              <div style={styles.taglineContainer}>
                <Zap className="w-5 h-5" style={{ color: "#0052CC" }} />
                <p style={styles.tagline}>{activeProgram.tagline}</p>
              </div>
              {activeProgram.popular && (
                <div style={styles.popularBadge}>
                  <div style={styles.popularDot}></div>
                  <span style={styles.popularText}>Most Popular</span>
                </div>
              )}
            </div>

            {/* Main Heading */}
            <h3 style={{
              ...styles.contentHeading,
              opacity: 0,
              transform: "translateX(20px)",
              animation: "slideInContent 0.4s ease-out 0.2s forwards"
            }}>{activeProgram.heading}</h3>

            {/* Badge */}
            <div style={{
              ...styles.badge,
              opacity: 0,
              transform: "translateX(20px)",
              animation: "slideInContent 0.4s ease-out 0.3s forwards"
            }}>
              <Zap className="w-4 h-4" style={{ color: "white" }} />
              {activeProgram.badge}
            </div>

            {/* Description */}
            <p style={{
              ...styles.description,
              opacity: 0,
              transform: "translateX(20px)",
              animation: "slideInContent 0.4s ease-out 0.4s forwards"
            }}>{activeProgram.description}</p>

            {/* Tools Tags */}
            <div style={{
              ...styles.toolsContainer,
              opacity: 0,
              transform: "translateX(20px)",
              animation: "slideInContent 0.4s ease-out 0.5s forwards"
            }}>
              {activeProgram.tools.map((tool, i) => (
                <span key={i} style={styles.toolTag}>
                  <span style={{ marginRight: '6px', display: 'inline-flex', alignItems: 'center' }}>
                    {tool.icon}
                  </span>
                  {tool.name}
                </span>
              ))}
            </div>

            {/* Level and Button */}
            <div style={{
              ...styles.bottomSection,
              opacity: 0,
              transform: "translateX(20px)",
              animation: "slideInContent 0.4s ease-out 0.6s forwards"
            }}>
              <p style={styles.levelText}>{activeProgram.level}</p>
              <button style={styles.button}>
                Discover Program
                <ArrowRight className="w-5 h-5" style={{ marginLeft: "12px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: "40px",
    paddingBottom: "40px",
    backgroundColor: "#f0f4f8",
    minHeight: "auto",
    display: "flex",
    alignItems: "center",
  },

  container: {
    maxWidth: "80rem",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "24px",
    paddingRight: "24px",
    width: "100%",
  },

  headingSection: {
    marginBottom: "40px",
  },

  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },

  labelLine: {
    width: "40px",
    height: "2px",
    backgroundColor: "#0052CC",
  },

  label: {
    color: "#0052CC",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontFamily: "'DM Sans', sans-serif",
  },

  mainHeading: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#0A0E27",
    lineHeight: "1.2",
    fontFamily: "'DM Sans', sans-serif",
  },

  accentText: {
    color: "#0052CC",
  },

  mainCard: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  sidebar: {
    width: "320px",
    backgroundColor: "#f9fafb",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
  },

  menuItem: {
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingTop: "24px",
    paddingBottom: "24px",
    cursor: "pointer",
    transition: "all 0.3s",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeft: "4px solid transparent",
    fontFamily: "'DM Sans', sans-serif",
  },

  menuItemActive: {
    backgroundColor: "white",
    borderLeftColor: "#0052CC",
    color: "#0A0E27",
    fontWeight: "600",
  },

  menuItemInactive: {
    borderLeftColor: "transparent",
    color: "#9ca3af",
  },

  contentArea: {
    flex: 1,
    padding: "48px",
    backgroundImage: "linear-gradient(135deg, #e8eef8 0%, #f0f4f8 100%)",
    transition: "all 0.3s ease-in-out",
  },

  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "28px",
  },

  taglineContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  tagline: {
    fontSize: "14px",
    color: "#0052CC",
    fontWeight: "500",
    transition: "all 0.3s ease-in-out",
    fontFamily: "'DM Sans', sans-serif",
  },

  popularBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
    backgroundColor: "#e8eef8",
    border: "1px solid #d0dff0",
    borderRadius: "9999px",
  },

  popularDot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#0052CC",
    borderRadius: "50%",
  },

  popularText: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#0052CC",
    fontFamily: "'DM Sans', sans-serif",
  },

  contentHeading: {
    fontSize: "36px",
    fontWeight: "900",
    color: "#0A0E27",
    marginBottom: "20px",
    transition: "all 0.3s ease-in-out",
    fontFamily: "'DM Sans', sans-serif",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#0052CC",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "24px",
    boxShadow: "0 10px 15px -3px rgba(0, 82, 204, 0.2)",
    transition: "all 0.3s ease-in-out",
    fontFamily: "'DM Sans', sans-serif",
  },

  description: {
    color: "#4B5563",
    maxWidth: "48rem",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "32px",
    transition: "all 0.3s ease-in-out",
    fontFamily: "'DM Sans', sans-serif",
  },

  toolsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "40px",
    transition: "all 0.3s ease-in-out",
  },

  toolTag: {
    paddingLeft: "14px",
    paddingRight: "14px",
    paddingTop: "8px",
    paddingBottom: "8px",
    backgroundColor: "white",
    border: "2px solid #d0dff0",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#0A0E27",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "all 0.3s",
    fontFamily: "'DM Sans', sans-serif",
  },

  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  levelText: {
    color: "#7A8494",
    fontSize: "13px",
    fontWeight: "500",
    fontFamily: "'DM Sans', sans-serif",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    paddingLeft: "28px",
    paddingRight: "28px",
    paddingTop: "12px",
    paddingBottom: "12px",
    borderRadius: "8px",
    border: "none",
    color: "white",
    backgroundColor: "#0052CC",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "0 2px 8px rgba(0, 82, 204, 0.3)",
    fontFamily: "'DM Sans', sans-serif",
  },
};