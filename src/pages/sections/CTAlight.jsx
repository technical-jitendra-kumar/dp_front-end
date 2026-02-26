import { useState } from "react";

const companies = [
  { name: "Google", color: "#4285F4" },
  { name: "Flipkart", color: "#0052CC" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Accenture", color: "#E91E8C" },
  { name: "Infosys", color: "#0052CC" },
  { name: "Google", color: "#4285F4" },
  { name: "Flipkart", color: "#0052CC" },
  { name: "Microsoft", color: "#00A4EF" },
];

export default function CTASection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    program: "Not Sure Yet",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We will contact you soon.");
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      program: "Not Sure Yet",
    });
  };

  return (
    <section style={styles.section}>
      <style>{`
        @keyframes scrollCompanies {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .companies-scroll-container {
          animation: scrollCompanies 15s linear infinite;
          will-change: transform;
        }

        input:focus,
        select:focus {
          border-color: #0052CC !important;
          background-color: #FFFFFF !important;
          box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.1);
        }

        input::placeholder,
        select::placeholder {
          color: #C4C9D4 !important;
        }
      `}</style>

      <div style={styles.container}>
        {/* Left Side - Content - Vertically Centered */}
        <div style={styles.leftContent}>
          <h2 style={styles.heading}>
            Join 12,000+ professionals who{" "}
            <span style={styles.accentText}>transformed their careers</span> and
            landed roles at{" "}
            <span style={styles.accentText}>world-class companies</span>.
          </h2>

          {/* Animated Company Logos */}
          <div style={styles.companiesWrapper}>
            <div className="companies-scroll-container" style={styles.companiesContainer}>
              {companies.map((company, idx) => (
                <div key={idx} style={styles.companyBadge}>
                  <span style={{ color: company.color, fontWeight: "700", fontSize: "13px" }}>
                    {company.name}
                  </span>
                  <div style={styles.dot}></div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div style={styles.gradientLeft}></div>
            <div style={styles.gradientRight}></div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={styles.formCard}>
          <h3 style={styles.formHeading}>
            Upgrade Your Skills to Achieve Your Dream Job
          </h3>

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Full Name */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            {/* Email */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            {/* Phone */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Number</label>
              <div style={styles.phoneContainer}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  style={styles.countryCodeSelect}
                >
                  <option value="+91">IN +91</option>
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+86">CN +86</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="81234 56789"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={styles.phoneInput}
                />
              </div>
            </div>

            {/* Program Preference */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Program preference</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                style={styles.select}
              >
                <option>Not Sure Yet</option>
                <option>Data Analytics</option>
                <option>Business Analytics</option>
                <option>Data Science and AI</option>
                <option>Agentic AI & Prompt Engineering</option>
                <option>Investment Banking</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.submitButton}>
              Submit Now
            </button>
          </form>
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
    maxWidth: "1400px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "50px",
    alignItems: "center",
    minHeight: "500px",
  },

  // ✅ FIXED: Vertically centered left content
  leftContent: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#0A0E27",
    marginBottom: "0",
    lineHeight: "1.3",
    letterSpacing: "-0.5px",
  },

  accentText: {
    color: "#0052CC",
  },

  companiesWrapper: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
  },

  companiesContainer: {
    display: "flex",
    gap: "12px",
    width: "fit-content",
  },

  companyBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "white",
    padding: "8px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxShadow: "0 2px 8px rgba(0, 82, 204, 0.1)",
  },

  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#10B981",
  },

  gradientLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "80px",
    background: "linear-gradient(to right, #f0f4f8, transparent)",
    pointerEvents: "none",
    zIndex: 10,
  },

  gradientRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "80px",
    background: "linear-gradient(to left, #f0f4f8, transparent)",
    pointerEvents: "none",
    zIndex: 10,
  },

  formCard: {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "40px 36px",
    boxShadow: "0 10px 40px rgba(0, 82, 204, 0.15)",
  },

  formHeading: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#0A0E27",
    marginBottom: "26px",
    textAlign: "center",
    lineHeight: "1.4",
    letterSpacing: "-0.3px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  label: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#4B5563",
    letterSpacing: "0.3px",
  },

  input: {
    width: "100%",
    padding: "10px 14px",
    fontSize: "13px",
    border: "1.5px solid #E5E7EB",
    borderRadius: "6px",
    backgroundColor: "#F9FAFB",
    color: "#0A0E27",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  phoneContainer: {
    display: "flex",
    gap: "10px",
  },

  countryCodeSelect: {
    width: "100px",
    padding: "10px 10px",
    fontSize: "12px",
    border: "1.5px solid #E5E7EB",
    borderRadius: "6px",
    backgroundColor: "#F9FAFB",
    color: "#0A0E27",
    outline: "none",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
  },

  phoneInput: {
    flex: 1,
    padding: "10px 14px",
    fontSize: "13px",
    border: "1.5px solid #E5E7EB",
    borderRadius: "6px",
    backgroundColor: "#F9FAFB",
    color: "#0A0E27",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  select: {
    width: "100%",
    padding: "10px 14px",
    fontSize: "13px",
    border: "1.5px solid #E5E7EB",
    borderRadius: "6px",
    backgroundColor: "#F9FAFB",
    color: "#0A0E27",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },

  submitButton: {
    width: "100%",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "700",
    color: "white",
    backgroundColor: "#0052CC",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "4px",
  },
}; 