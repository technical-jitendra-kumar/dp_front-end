import { Link } from "react-router-dom";
import img1 from "../../assets/hore2.png";
// Import real icons
import { Award, MonitorPlay, ShieldCheck, Headphones, GraduationCap } from 'lucide-react';

const stats = [
  { num: "2,400+", label: "Alumni Placed" },
  { num: "100%", label: "Placement Rate" },
  { num: "180+", label: "Hiring Partners" },
  { num: "4.9★", label: "Average Rating" },
];

export default function HeroSection() {
  const fontStyle = { fontFamily: "'DM Sans', sans-serif" };

  return (
    <section style={{ ...fontStyle, minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 60px", position: "relative", overflow: "hidden" }}>
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 680, animation: "fadeUp .6s ease both" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".35rem 1rem", borderRadius: 100, background: "rgba(238,243,255,.9)", border: "1px solid #C7D7FF", color: "#0057FF", fontSize: "0.8rem", fontWeight: 600, marginBottom: "1.5rem", backdropFilter: "blur(8px)" }}>
          <Award size={14} /> Microsoft Certified · 180+ Hiring Partners
        </div>

        <h1 style={{ ...fontStyle, fontSize: "clamp(2.8rem,5vw,4.4rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: "1.5rem", animation: "fadeUp .6s ease .1s both" }}>
          Launch Your{" "}
          <span style={{ background: "linear-gradient(135deg,#0057FF,#7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Data Career
          </span>
          <br />with India's Best
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "#475569", maxWidth: 520, marginBottom: "2.5rem", animation: "fadeUp .6s ease .2s both" }}>
          Live cohorts in Data Analytics, Data Science, AI & Investment Banking.
          Real projects, real mentors, real placement support — until you're hired.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp .6s ease .3s both" }}>
          <button style={{ ...fontStyle, padding: ".9rem 2.2rem", borderRadius: 10, border: "none", background: "#0057FF", color: "#fff", fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,87,255,.35)", transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#0047DD"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0057FF"; e.currentTarget.style.transform = "none"; }}>
            Book Free Counselling
          </button>
          <Link to="#programs" onClick={e => { e.preventDefault(); document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }); }} style={{ textDecoration: "none" }}>
            <button style={{ ...fontStyle, padding: ".9rem 2.2rem", borderRadius: 10, border: "1.5px solid #CBD5E1", background: "rgba(255,255,255,.8)", color: "#0F172A", fontSize: "1rem", fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", transition: "all .2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#0057FF"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#CBD5E1"}>
              Explore Programs ↓
            </button>
          </Link>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: "2rem", animation: "fadeUp .6s ease .4s both" }}>
          {[
            { icon: <MonitorPlay size={14} />, text: "Live Classes" },
            { icon: <ShieldCheck size={14} />, text: "100% Placement Support" },
            { icon: <GraduationCap size={14} />, text: "Dual Certificate" },
            { icon: <Headphones size={14} />, text: "24/7 Mentor Access" }
          ].map((p, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: ".4rem .9rem", borderRadius: 100, background: "rgba(255,255,255,0.85)", border: "1px solid #E2E8F0", fontSize: "0.8rem", fontWeight: 500, color: "#475569", boxShadow: "0 1px 4px rgba(0,0,0,.06)", backdropFilter: "blur(6px)" }}>
              {p.icon} {p.text}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap", animation: "fadeUp .6s ease .45s both" }}>
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div style={{ ...fontStyle, fontSize: "2.2rem", fontWeight: 900, color: "#0057FF", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "#94A3B8", marginTop: ".3rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Visual (as requested)
      <div className="hero-visual" style={{ opacity: 1 }}>
        <div className="hero-center">
          <img src={img1} alt="Student" />
        </div> */}
        
        {/* Keeping existing orbits but they can be styled as static in CSS */}
        {/* <div className="orbit orbit1">
          <span>React</span>
          <span>Node</span>
          <span>MongoDB</span>
          <span>Express</span>
        </div> */}

        {/* <div className="orbit orbit2">
          <span>AI</span>
          <span>Python</span>
          <span>SQL</span>
          <span>DSA</span>
        </div>
      </div> */}

      <style>{`
        @media (max-width: 900px) { .hero-visual { display: none !important; } }
      `}</style>
    </section>
  );
}