import React from 'react';
import { useInView, useCounter } from "../../hooks/useInView";
import { FEATURES } from "../../data/companies";
import { CheckCircle2, Star, ShieldCheck, Globe } from 'lucide-react';

function Num({ target, inView }) {
  const v = useCounter(target, inView);
  return <>{v}</>;
}

// Icon Components
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconBriefcase = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 4V2m-8 2V2M2 11h20"></path>
  </svg>
);

const IconAward = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconShield = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 12 15 15 9"></polyline>
  </svg>
);

const IconGlobe = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export default function WhySection() {
  const [ref, inView] = useInView(0.1);
  const dmSans = { fontFamily: "'DM Sans', sans-serif" };

  return (
    <section id="why" ref={ref} style={{ 
      ...dmSans,
      background: "#FFFFFF", 
      padding: "8rem 5%", 
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle Background Glow */}
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "400px", height: "400px", background: "rgba(0, 87, 255, 0.03)", filter: "blur(100px)", borderRadius: "50%", zIndex: 0 }}></div>

      <div className="dp-why-grid" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "6rem", alignItems: "center" }}>

        {/* Left Content */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0057FF", marginBottom: "1rem" }}>
            <span style={{ width: "20px", height: "1px", background: "#0057FF" }}></span>
            Why DataPreneur
          </div>
          
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#0F172A", marginBottom: "1.5rem" }}>
            Education built for <br />
            <span style={{ color: "#0057FF" }}>Real-World Outcomes</span>
          </h2>
          
          <p style={{ fontSize: "1.1rem", color: "#64748B", lineHeight: 1.6, maxWidth: "520px", marginBottom: "3rem" }}>
            We aren't a typical course platform. We are a career accelerator designed by industry veterans to bridge the gap between learning and earning.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {FEATURES.map((feat, i) => (
              <div key={feat.title} style={{ 
                transition: "all 0.5s ease",
                opacity: inView ? 1 : 0, 
                transform: inView ? "none" : "translateY(20px)",
                transitionDelay: `${i * 0.1}s`
              }}>
                <div style={{ color: "#0057FF", marginBottom: "0.75rem" }}>{feat.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0F172A", marginBottom: "0.4rem" }}>{feat.title}</div>
                <div style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.5 }}>{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Metrics & Trust */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          
          {/* Main Success Metric */}
          <div style={{ 
            background: "#0F172A", 
            borderRadius: "24px", 
            padding: "3rem 2rem", 
            color: "#fff", 
            textAlign: "center", 
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
          }}>
            <div style={{ fontSize: "4rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
              {inView ? <><Num target={94} inView={inView} />%</> : "0%"}
            </div>
            <div style={{ fontSize: "1rem", color: "#94A3B8", fontWeight: 500 }}>Overall Placement Rate</div>
            <div style={{ position: "absolute", top: "15px", right: "20px", opacity: 0.2 }}>
              <CheckCircle2 size={40} />
            </div>
          </div>

          {/* Sub Metrics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem" }}>
            {[
              { n: 2400, suf: "+", lbl: "Alumni", icon: <IconUsers /> },
              { n: 180, suf: "+", lbl: "Partners", icon: <IconBriefcase /> },
              { n: 4.9, suf: "★", lbl: "Rating", icon: <Star size={14} /> }
            ].map((m, i) => (
              <div key={m.lbl} style={{ 
                background: "#F8FAFC", 
                borderRadius: "20px", 
                padding: "1.5rem 1rem", 
                border: "1px solid #EDF2F7", 
                textAlign: "center"
              }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A" }}>
                   {m.lbl === "Rating" ? "4.9★" : <>{inView ? <Num target={m.n} inView={inView} /> : 0}{m.suf}</>}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "4px" }}>{m.lbl}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div style={{ 
            background: "#FFFFFF", 
            borderRadius: "20px", 
            padding: "1.75rem", 
            border: "1px solid #EDF2F7",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
          }}>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0F172A", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ShieldCheck size={18} color="#10B981" /> Recognized & Trusted By
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { text: "Microsoft Partner", icon: <IconAward /> },
                { text: "ISO 9001 Certified", icon: <IconShield /> },
                { text: "NASSCOM Member", icon: <IconGlobe /> }
              ].map(b => (
                <span key={b.text} style={{ 
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.5rem 0.8rem", borderRadius: "8px", 
                  background: "#F1F5F9", fontSize: "0.75rem", fontWeight: 600, color: "#475569" 
                }}>
                  {b.icon} {b.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { 
          .dp-why-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } 
        }
      `}</style>
    </section>
  );
} 