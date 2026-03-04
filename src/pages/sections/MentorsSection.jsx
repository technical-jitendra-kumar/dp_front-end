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
    borderColor: "#A855F7",
    image: img2,
  },
  {
    id: 3,
    name: "Shubham",
    role: "Senior Data Scientist",
    company: "RSPL Group",
    years: "5+ years",
    skills: ["Python", "Machine Learning", "SQL"],
    borderColor: "#F97316",
    image: img3,
  },
  {
    id: 4,
    name: "Akshat Khandelwal",
    role: "Senior Finance BI Developer",
    company: "Autodesk",
    years: "5+ years",
    skills: ["Power BI", "Python", "SQL"],
    borderColor: "#0052CC",
    image: img4,
  },
  {
    id: 5,
    name: "Prabhat Singh",
    role: "Data Scientist",
    company: "Cognizant",
    years: "4+ years",
    skills: ["Python", "Machine Learning", "Analytics"],
    borderColor: "#60A5FA",
    image: img5,
  },
];

export default function MentorsSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Header */}
        <div style={styles.headerSection}>
          <p style={styles.subtitle}>LEARN FROM THE BEST</p>
          <h2 style={styles.heading}>Meet Your Mentors</h2>
          <p style={styles.description}>
            Industry veterans from top companies who share real-world
            experience and practical insights.
          </p>
        </div>

        {/* Mentor Grid */}
        <div className="mentor-grid" style={styles.grid}>
          {mentorsData.slice(0,4).map((mentor) => (
            <div
              key={mentor.id}
              style={{
                ...styles.card,
                borderTopColor: mentor.borderColor,
              }}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                style={styles.image}
              />

              <h3 style={styles.name}>{mentor.name}</h3>
              <p style={styles.role}>{mentor.role}</p>

              <div style={styles.info}>
                <Briefcase size={14} color="#0052CC"/>
                <span>{mentor.company}</span>
              </div>

              <div style={styles.info}>
                <Clock size={14} color="#0052CC"/>
                <span>{mentor.years}</span>
              </div>

              <div style={styles.skills}>
                {mentor.skills.map((skill,i)=>(
                  <span key={i} style={styles.skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive Grid */}
      <style>{`
      
      .mentor-grid{
        display:grid;
        grid-template-columns: repeat(4,1fr);
        gap:24px;
      }

      @media (max-width: 1024px){
        .mentor-grid{
          grid-template-columns: repeat(2,1fr);
        }
      }

      @media (max-width: 600px){
        .mentor-grid{
          grid-template-columns: 1fr;
        }
      }

      `}</style>

    </section>
  );
}

const styles = {

section:{
padding:"80px 5%",
background:"#f0f4f8"
},

container:{
maxWidth:"1200px",
margin:"0 auto"
},

headerSection:{
textAlign:"center",
marginBottom:"50px"
},

subtitle:{
color:"#F97316",
fontSize:"13px",
fontWeight:"bold",
letterSpacing:"2px",
textTransform:"uppercase",
marginBottom:"10px"
},

heading:{
fontSize:"40px",
fontWeight:"900",
color:"#0A0E27",
marginBottom:"15px"
},

description:{
maxWidth:"600px",
margin:"0 auto",
color:"#6B7280",
lineHeight:"1.6"
},

grid:{},

card:{
background:"#fff",
borderRadius:"16px",
borderTop:"4px solid",
padding:"20px",
boxShadow:"0 6px 16px rgba(0,0,0,0.08)",
transition:"0.3s"
},

image:{
width:"100%",
height:"170px",
objectFit:"cover",
borderRadius:"12px",
marginBottom:"15px"
},

name:{
fontSize:"18px",
fontWeight:"700",
color:"#0A0E27"
},

role:{
fontSize:"13px",
color:"#6B7280",
marginBottom:"10px"
},

info:{
display:"flex",
alignItems:"center",
gap:"8px",
fontSize:"13px",
marginBottom:"6px",
color:"#374151"
},

skills:{
display:"flex",
flexWrap:"wrap",
gap:"6px",
marginTop:"12px"
},

skill:{
fontSize:"11px",
padding:"4px 8px",
borderRadius:"6px",
background:"#EEF2FF",
color:"#0052CC",
fontWeight:"600"
}

};