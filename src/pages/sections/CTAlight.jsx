import { useState } from "react";

// const companies = [
//   { name: "Google", color: "#4285F4" },
//   { name: "Flipkart", color: "#0052CC" },
//   { name: "Microsoft", color: "#00A4EF" },
//   { name: "Accenture", color: "#E91E8C" },
//   { name: "Infosys", color: "#0052CC" },
//   { name: "Google", color: "#4285F4" },
//   { name: "Flipkart", color: "#0052CC" },
//   { name: "Microsoft", color: "#00A4EF" },
// ];

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
        {/* Left Side - Content */}
        <div style={styles.leftContent}>
          <h2 style={styles.heading}>
            Transform Your Career with{" "}
            <span style={styles.accentText}>Industry-Leading Programs</span>
          </h2>
          
          <p style={styles.subheading}>
            Join thousands of professionals who've successfully transitioned into high-paying roles at top companies through our comprehensive, hands-on training programs.
          </p>
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
    paddingTop: "110px",
    paddingBottom: "110px",
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
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    alignItems: "center",
    minHeight: "500px",
  },

  // Left content styling
  leftContent: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingRight: "20px",
  },

  badge: {
    backgroundColor: "#EEF3FF",
    border: "1px solid #C7D7FF",
    borderRadius: "50px",
    padding: "8px 16px",
    display: "inline-flex",
    alignItems: "center",
  },

  badgeText: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#0052CC",
    fontFamily: "'DM Sans', sans-serif",
  },

  heading: {
    fontSize: "48px",
    fontWeight: "900",
    color: "#0A0E27",
    marginBottom: "0",
    lineHeight: "1.2",
    letterSpacing: "-0.8px",
    fontFamily: "'DM Sans', sans-serif",
  },

  subheading: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#4B5563",
    lineHeight: "1.6",
    marginBottom: "0",
    fontFamily: "'DM Sans', sans-serif",
  },

  statsContainer: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
  },

  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  statNumber: {
    fontSize: "32px",
    fontWeight: "900",
    color: "#0052CC",
    lineHeight: "1",
    fontFamily: "'DM Sans', sans-serif",
  },

  statLabel: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#6B7280",
    marginTop: "4px",
    fontFamily: "'DM Sans', sans-serif",
  },

  // companiesText: {
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "12px",
  // },

  // companiesLabel: {
  //   fontSize: "14px",
  //   fontWeight: "500",
  //   color: "#6B7280",
  //   fontFamily: "'DM Sans', sans-serif",
  // },

  // companiesList: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   gap: "16px",
  // },

  // companyName: {
  //   fontSize: "15px",
  //   fontWeight: "600",
  //   color: "#374151",
  //   fontFamily: "'DM Sans', sans-serif",
  // },

  accentText: {
    color: "#0052CC",
  },

  formCard: {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "55px 40px",
    boxShadow: "0 10px 40px rgba(0, 82, 204, 0.15)",
    minHeight: "520px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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