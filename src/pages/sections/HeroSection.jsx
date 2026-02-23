import { Link } from "react-router-dom";
import img1 from "../../assets/hore1.png";
import img2 from "../../assets/hore2.png";

const floatCards = [
  { icon: "📊", title: "Data Analytics", sub: "3 months · Live", border: "#C7D7FF", anim: "floatA 4s ease-in-out infinite" },
  { icon: "🤖", title: "Agentic AI", sub: "New Batch ⚡", border: "#DDD6FE", anim: "floatB 5s ease-in-out infinite .5s" },
  { icon: "💹", title: "Inv. Banking", sub: "6 months · Live", border: "#FCA5A5", anim: "floatA 6s ease-in-out infinite 1s" },
  { icon: "🧠", title: "Data Science", sub: "🔥 Most Popular", border: "#6EE7B7", anim: "floatB 4.5s ease-in-out infinite 1.5s" },
];

const stats = [
  { num: "2,400+", label: "Alumni Placed" },
  { num: "94%", label: "Placement Rate" },
  { num: "180+", label: "Hiring Partners" },
  { num: "4.9★", label: "Average Rating" },
];

export default function HeroSection() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5% 60px", position: "relative", overflow: "hidden" }}>
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 680, animation: "fadeUp .6s ease both" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", padding: ".35rem 1rem", borderRadius: 100, background: "rgba(238,243,255,.9)", border: "1px solid #C7D7FF", color: "#0057FF", fontSize: "0.8rem", fontWeight: 600, marginBottom: "1.5rem", backdropFilter: "blur(8px)" }}>
          🏆 Microsoft Certified · 180+ Hiring Partners
        </div>

        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(2.8rem,5vw,4.4rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-1.5px", color: "#0F172A", marginBottom: "1.5rem", animation: "fadeUp .6s ease .1s both" }}>
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
          <button style={{ padding: ".9rem 2.2rem", borderRadius: 10, border: "none", background: "#0057FF", color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,87,255,.35)", transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#0047DD"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#0057FF"; e.currentTarget.style.transform = "none"; }}>
            Book Free Counselling
          </button>
          <Link to="#programs" onClick={e => { e.preventDefault(); document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" }); }} style={{ textDecoration: "none" }}>
            <button style={{ padding: ".9rem 2.2rem", borderRadius: 10, border: "1.5px solid #CBD5E1", background: "rgba(255,255,255,.8)", color: "#0F172A", fontSize: "1rem", fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", transition: "all .2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#0057FF"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#CBD5E1"}>
              Explore Programs ↓
            </button>
          </Link>
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: "2rem", animation: "fadeUp .6s ease .4s both" }}>
          {["🎓 Live Classes", "✅ 100% Placement Support", "🏅 Dual Certificate", "📞 24/7 Mentor Access"].map(p => (
            <span key={p} style={{ padding: ".4rem .9rem", borderRadius: 100, background: "rgba(255,255,255,.85)", border: "1px solid #E2E8F0", fontSize: "0.8rem", fontWeight: 500, color: "#475569", boxShadow: "0 1px 4px rgba(0,0,0,.06)", backdropFilter: "blur(6px)" }}>{p}</span>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap", animation: "fadeUp .6s ease .45s both" }}>
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: "2.2rem", fontWeight: 900, color: "#0057FF", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "#94A3B8", marginTop: ".3rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Images */}
      <div
        className="hero-image-container"
        style={{
          position: "absolute",
          right: "5%",
          top: "42%",   // 👈 pehle 50% tha, ab thoda upar
          transform: "translateY(-50%)",
          width: "520px",
          maxWidth: "48vw",
          zIndex: 1,
          animation: "fadeUp .7s ease .5s both"
        }}
      >
        <div className="hero-image-wrapper">

          {/* Main Image */}
          <img
            src={img1}
            alt="Main"
            className="hero-main-img"
          />

          {/* Secondary Image */}
          <img
            src={img2}
            alt="Secondary"
            className="hero-second-img"
          />

        </div>
      </div>
      <style>{`

.hero-image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: visible;
}

/* MAIN IMAGE */
.hero-main-img {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 40px 80px rgba(0,0,0,.18);
  animation: floatImage 6s ease-in-out infinite;
}

/* SECOND IMAGE (layered effect) */
.hero-second-img {
  position: absolute;
  width: 70%;
  bottom: -40px;
  left: -60px;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0,0,0,.15);
  animation: floatImage2 7s ease-in-out infinite;
}

/* Floating Animations */
@keyframes floatImage {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0px); }
}

@keyframes floatImage2 {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0px); }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-image-container {
    display: none;
  }
}

`}</style>
    </section>
  );
}
