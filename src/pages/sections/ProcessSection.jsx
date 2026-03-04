import { useInView } from "../../hooks/useInView";
import { STEPS } from "../../data/companies";

export default function ProcessSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="process" ref={ref} style={styles.section}>
      {/* Background */}
      <div style={styles.backgroundBlur1} />
      <div style={styles.backgroundBlur2} />

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.subtitle}>HOW IT WORKS</div>

          <h2 style={styles.heading}>
            <span style={styles.whiteText}>Your Path </span>
            <span style={styles.blueText}>from Student </span>
            <span style={styles.whiteText}>to </span>
            <span style={styles.blueText}>Professional</span>
          </h2>

          <p style={styles.description}>
            A structured 4-step journey designed so you never feel lost,
            overwhelmed, or alone.
          </p>
        </div>

        {/* Steps */}
        <div className="dp-steps-grid" style={styles.stepsGrid}>
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              style={{
                ...styles.stepCard,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.6s ease",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div style={styles.stepNumberBg}>{step.n}</div>
              <div style={styles.stepNumber}>{step.n}</div>
              <div style={styles.stepTitle}>{step.title}</div>
              <div style={styles.stepDescription}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dp-steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .dp-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 5%",
    background: "#0A0E27",
    position: "relative",
    overflow: "hidden",
  },

  backgroundBlur1: {
    position: "absolute",
    top: "30%",
    left: "20%",
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "rgba(0,82,204,.08)",
    filter: "blur(80px)",
  },

  backgroundBlur2: {
    position: "absolute",
    top: "20%",
    right: "15%",
    width: 350,
    height: 350,
    borderRadius: "50%",
    background: "rgba(0,82,204,.05)",
    filter: "blur(80px)",
  },

  container: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    margin: "0 auto",
  },

  header: {
    maxWidth: "850px",
    margin: "0 auto 4rem auto",
    textAlign: "center",
  },

  subtitle: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#0052CC",
    marginBottom: "1rem",
    fontFamily: "'DM Sans', sans-serif",
  },

  heading: {
    fontSize: "clamp(2rem, 3vw, 3.4rem)",
    fontWeight: 900,
    lineHeight: 1.15,
    letterSpacing: "-1px",
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto 1.5rem auto",
    fontFamily: "'DM Sans', sans-serif",
  },

  whiteText: {
    color: "#ffffff",
  },

  blueText: {
    color: "#0052CC",
  },

  description: {
    fontSize: "18px",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'DM Sans', sans-serif",
  },

  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    marginTop: "3rem",
  },

  stepCard: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    borderRadius: 20,
    padding: "2.5rem 2rem",
    border: "1px solid rgba(255,255,255,0.1)",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  },

  stepNumberBg: {
    position: "absolute",
    top: -15,
    right: -10,
    fontSize: "6rem",
    fontWeight: 900,
    color: "rgba(255,255,255,0.03)",
    fontFamily: "'DM Sans', sans-serif",
  },

  stepNumber: {
    fontSize: "2.5rem",
    fontWeight: 900,
    color: "#0052CC",
    marginBottom: "1rem",
    fontFamily: "'DM Sans', sans-serif",
  },

  stepTitle: {
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#fff",
    marginBottom: "0.75rem",
    fontFamily: "'DM Sans', sans-serif",
  },

  stepDescription: {
    fontSize: "0.9rem",
    color: "#94A3B8",
    lineHeight: 1.6,
    fontFamily: "'DM Sans', sans-serif",
  },
};