import { useState, useEffect } from "react";
import { Clock, Briefcase } from "lucide-react";
import img1 from "../../assets/mentor1.jpg";
import img2 from "../../assets/mentor2.jpg";
import img3 from "../../assets/mentor3.jpg";
import img4 from "../../assets/mentor4.jpg";
import img5 from "../../assets/mentor5.jpg";

const mentorsData = [
  {
    id: 1,
    name: "Heena Arora",
    role: "Associate Data Scientist",
    company: "PwC (ex-Amazon)",
    years: "3+ years",
    skills: ["Data Science", "Image Analytics", "Python", "SQL"],
    experience: "9+ years",
    borderColor: "#14B8A6",
    image: img1,
  },
  {
    id: 2,
    name: "Anand Tripathi",
    role: "Data Analyst",
    company: "Google",
    years: "1 year",
    skills: ["Data Analytics", "Big Data", "Product Analytics"],
    experience: "8+ years",
    borderColor: "#A855F7",
    image: img2,
  },
  {
    id: 3,
    name: "Shubham",
    role: "Senior Data Scientist",
    company: "RSPL Group",
    years: "5+ years",
    skills: ["Python", "Machine Learning", "SQL", "Advanced Analytics"],
    experience: "7+ years",
    borderColor: "#F97316",
    image: img3,
  },
  {
    id: 4,
    name: "Akshat Khandelwal",
    role: "Senior Finance BI Developer",
    company: "Autodesk",
    years: "5+ years",
    skills: ["Power BI", "Python", "SQL", "Finance BI"],
    experience: "6+ years",
    borderColor: "#0052CC",
    image: img4,
  },
  {
    id: 5,
    name: "Prabhat Singh",
    role: "Data Scientist",
    company: "Cognizant",
    years: "4+ years",
    skills: ["Python", "EDI", "Machine Learning", "Analytics"],
    experience: "8+ years",
    borderColor: "#60A5FA",
    image: img5,
  },
];

const getSkillColor = (skill) => {
  const colors = {
    "Data Science": "#A855F7",
    "Image Analytics": "#14B8A6",
    Python: "#3B82F6",
    SQL: "#0052CC",
    "Data Analytics": "#A855F7",
    "Big Data": "#8B5CF6",
    "Product Analytics": "#06B6D4",
    "Machine Learning": "#F97316",
    "Advanced Analytics": "#F97316",
    "Power BI": "#0052CC",
    "Finance BI": "#0052CC",
    EDI: "#14B8A6",
    Analytics: "#06B6D4",
  };
  return colors[skill] || "#0052CC";
};

export default function MentorsSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section style={styles.section}>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .mentors-scroll-container {
          animation: scroll 30s linear infinite;
        }

        .mentors-scroll-container:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerSection}>
          <p style={styles.subtitle}>LEARN FROM THE BEST</p>
          <h2 style={styles.heading}>Meet Your Mentors</h2>
          <p style={styles.description}>
            Industry veterans from top companies who don't just teach theory - they share real-world
            playbooks from the trenches.
          </p>
        </div>

        {/* Animated Scrolling Container */}
        <div style={styles.scrollWrapper}>
          <div className="mentors-scroll-container" style={styles.scrollContainer}>
            {/* First set of mentors */}
            {mentorsData.map((mentor) => (
              <div
                key={`${mentor.id}-1`}
                style={{
                  ...styles.mentorCard,
                  borderTopColor: mentor.borderColor,
                }}
              >
                {/* ✅ FIXED: Properly display image */}
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    borderRadius: "12px",
                    objectFit: "cover",
                    objectPosition: "center",
                    marginBottom: "16px",
                    backgroundColor: "#e8eef8",
                  }}
                />

                <div style={styles.cardContent}>
                  <h3 style={styles.mentorName}>{mentor.name}</h3>
                  <p style={styles.mentorRole}>{mentor.role}</p>

                  <div style={styles.infoRow}>
                    <Briefcase style={{ width: "16px", height: "16px", color: "#0052CC" }} />
                    <span style={styles.infoText}>{mentor.company}</span>
                  </div>

                  <div style={styles.infoRow}>
                    <Clock style={{ width: "16px", height: "16px", color: "#0052CC" }} />
                    <span style={styles.infoText}>{mentor.years}</span>
                  </div>

                  <div style={styles.skillsContainer}>
                    {mentor.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          ...styles.skillTag,
                          backgroundColor: getSkillColor(skill) + "20",
                          color: getSkillColor(skill),
                          borderColor: getSkillColor(skill),
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {mentorsData.map((mentor) => (
              <div
                key={`${mentor.id}-2`}
                style={{
                  ...styles.mentorCard,
                  borderTopColor: mentor.borderColor,
                }}
              >
                {/* ✅ FIXED: Properly display image in duplicate set */}
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    borderRadius: "12px",
                    objectFit: "cover",
                    objectPosition: "center",
                    marginBottom: "16px",
                    backgroundColor: "#e8eef8",
                  }}
                />

                <div style={styles.cardContent}>
                  <h3 style={styles.mentorName}>{mentor.name}</h3>
                  <p style={styles.mentorRole}>{mentor.role}</p>

                  <div style={styles.infoRow}>
                    <Briefcase style={{ width: "16px", height: "16px", color: "#0052CC" }} />
                    <span style={styles.infoText}>{mentor.company}</span>
                  </div>

                  <div style={styles.infoRow}>
                    <Clock style={{ width: "16px", height: "16px", color: "#0052CC" }} />
                    <span style={styles.infoText}>{mentor.years}</span>
                  </div>

                  <div style={styles.skillsContainer}>
                    {mentor.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          ...styles.skillTag,
                          backgroundColor: getSkillColor(skill) + "20",
                          color: getSkillColor(skill),
                          borderColor: getSkillColor(skill),
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div style={styles.gradientLeft}></div>
          <div style={styles.gradientRight}></div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: "60px",
    paddingBottom: "60px",
    backgroundColor: "#f0f4f8",
    overflow: "hidden",
  },

  container: {
    maxWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "24px",
    paddingRight: "24px",
    position: "relative",
  },

  headerSection: {
    textAlign: "center",
    marginBottom: "50px",
  },

  subtitle: {
    color: "#F97316",
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },

  heading: {
    fontSize: "44px",
    fontWeight: "900",
    color: "#0A0E27",
    marginBottom: "16px",
    lineHeight: "1.2",
  },

  description: {
    fontSize: "16px",
    color: "#6B7280",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  scrollWrapper: {
    position: "relative",
    overflow: "hidden",
    marginTop: "40px",
  },

  scrollContainer: {
    display: "flex",
    gap: "20px",
    width: "fit-content",
  },

  mentorCard: {
    flex: "0 0 280px",
    backgroundColor: "white",
    borderRadius: "16px",
    borderTop: "4px solid",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 82, 204, 0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  mentorName: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0A0E27",
    margin: "0",
  },

  mentorRole: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0 0 8px 0",
    fontWeight: "500",
  },

  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#4B5563",
  },

  infoText: {
    fontSize: "12px",
    color: "#4B5563",
  },

  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginTop: "12px",
  },

  skillTag: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "11px",
    fontWeight: "600",
    border: "1px solid",
    whiteSpace: "nowrap",
  },

  gradientLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100px",
    background: "linear-gradient(to right, #f0f4f8, transparent)",
    pointerEvents: "none",
    zIndex: 10,
  },

  gradientRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "100px",
    background: "linear-gradient(to left, #f0f4f8, transparent)",
    pointerEvents: "none",
    zIndex: 10,
  },
};