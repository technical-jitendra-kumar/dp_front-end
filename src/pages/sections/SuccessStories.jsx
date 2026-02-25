import { useState } from "react";
import { Play, TrendingUp } from "lucide-react";
import story1 from "../../assets/mentor1.jpg";
import story2 from "../../assets/mentor2.jpg";
import story3 from "../../assets/mentor3.jpg";
import story4 from "../../assets/mentor4.jpg";
import story5 from "../../assets/mentor5.jpg";

const storiesData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Data Scientist at Google",
    image: story1,
    hike: "300% Hike",
    beforeLPA: "4.5",
    afterLPA: "18",
    testimonial:
      "Datapreneur transformed my career completely. The mentorship and real projects made all the difference.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "ML Engineer at Microsoft",
    image: story2,
    hike: "340% Hike",
    beforeLPA: "5",
    afterLPA: "22",
    testimonial:
      "The placement support was incredible. From resume building to mock interviews, everything was top-notch.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Data Analyst at Amazon",
    image: story3,
    hike: "240% Hike",
    beforeLPA: "3.5",
    afterLPA: "12",
    testimonial:
      "The curriculum was perfectly aligned with industry needs. I felt confident from day one at my new job.",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Senior BI Developer at Accenture",
    image: story4,
    hike: "280% Hike",
    beforeLPA: "4",
    afterLPA: "15",
    testimonial:
      "The hands-on projects and mentorship helped me secure a senior role. Best investment in my career.",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    role: "Data Scientist at IBM",
    image: story5,
    hike: "320% Hike",
    beforeLPA: "3.8",
    afterLPA: "16",
    testimonial:
      "Outstanding support throughout the journey. The community and guidance made all the difference in my success.",
  },
];

export default function SuccessStoriesSection() {
  return (
    <section style={styles.section}>
      <style>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .success-scroll-container {
          animation: scrollRight 40s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          @keyframes scrollRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .success-scroll-container {
            animation: scrollRight 40s linear infinite;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerSection}>
          <h2 style={styles.heading}>Success Stories</h2>
          <p style={styles.description}>Real transformations from our alumni</p>
        </div>

        {/* Animated Scrolling Container */}
        <div style={styles.scrollWrapper}>
          <div className="success-scroll-container" style={styles.scrollContainer}>
            {/* First set of stories */}
            {storiesData.map((story) => (
              <div key={`${story.id}-1`} style={styles.storyCard}>
                {/* Image with Play Button */}
                <div style={styles.imageWrapper}>
                  <img
                    src={story.image}
                    alt={story.name}
                    style={styles.storyImage}
                  />
                  <div style={styles.playButton}>
                    <Play
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "white",
                        fill: "white",
                      }}
                    />
                  </div>

                  {/* Hike Badge */}
                  <div style={styles.hikeBadge}>
                    <TrendingUp
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "white",
                      }}
                    />
                    <span style={{ marginLeft: "4px" }}>{story.hike}</span>
                  </div>
                </div>

                {/* Info Section */}
                <div style={styles.infoSection}>
                  <h3 style={styles.name}>{story.name}</h3>
                  <p style={styles.role}>{story.role}</p>

                  {/* Before After LPA */}
                  <div style={styles.lpaContainer}>
                    <div style={styles.lpaBox}>
                      <p style={styles.lpaLabel}>Before</p>
                      <p style={styles.lpaValueBefore}>₹{story.beforeLPA} LPA</p>
                    </div>

                    <div style={styles.arrow}>→</div>

                    <div style={styles.lpaBox}>
                      <p style={styles.lpaLabel}>After</p>
                      <p style={styles.lpaValueAfter}>₹{story.afterLPA} LPA</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p style={styles.testimonial}>
                    <span style={styles.quoteIcon}>❝</span>
                    {story.testimonial}
                  </p>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {storiesData.map((story) => (
              <div key={`${story.id}-2`} style={styles.storyCard}>
                {/* Image with Play Button */}
                <div style={styles.imageWrapper}>
                  <img
                    src={story.image}
                    alt={story.name}
                    style={styles.storyImage}
                  />
                  <div style={styles.playButton}>
                    <Play
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "white",
                        fill: "white",
                      }}
                    />
                  </div>

                  {/* Hike Badge */}
                  <div style={styles.hikeBadge}>
                    <TrendingUp
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "white",
                      }}
                    />
                    <span style={{ marginLeft: "4px" }}>{story.hike}</span>
                  </div>
                </div>

                {/* Info Section */}
                <div style={styles.infoSection}>
                  <h3 style={styles.name}>{story.name}</h3>
                  <p style={styles.role}>{story.role}</p>

                  {/* Before After LPA */}
                  <div style={styles.lpaContainer}>
                    <div style={styles.lpaBox}>
                      <p style={styles.lpaLabel}>Before</p>
                      <p style={styles.lpaValueBefore}>₹{story.beforeLPA} LPA</p>
                    </div>

                    <div style={styles.arrow}>→</div>

                    <div style={styles.lpaBox}>
                      <p style={styles.lpaLabel}>After</p>
                      <p style={styles.lpaValueAfter}>₹{story.afterLPA} LPA</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <p style={styles.testimonial}>
                    <span style={styles.quoteIcon}>❝</span>
                    {story.testimonial}
                  </p>
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
    paddingTop: "80px",
    paddingBottom: "80px",
    backgroundColor: "#0F1729",
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
    marginBottom: "60px",
  },

  heading: {
    fontSize: "48px",
    fontWeight: "900",
    color: "white",
    marginBottom: "16px",
    lineHeight: "1.2",
  },

  description: {
    fontSize: "18px",
    color: "#9CA3AF",
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
    gap: "24px",
    width: "fit-content",
  },

  storyCard: {
    flex: "0 0 360px",
    backgroundColor: "#1A2A4A",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "300px",
  },

  storyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "60px",
    backgroundColor: "rgba(79, 39, 245, 0.9)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  hikeBadge: {
    position: "absolute",
    top: "16px",
    right: "16px",
    backgroundColor: "#10B981",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  infoSection: {
    padding: "24px",
    backgroundColor: "#0F1729",
  },

  name: {
    fontSize: "20px",
    fontWeight: "700",
    color: "white",
    margin: "0 0 4px 0",
  },

  role: {
    fontSize: "14px",
    color: "#9CA3AF",
    margin: "0 0 16px 0",
  },

  lpaContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
    backgroundColor: "#1A2A4A",
    padding: "12px",
    borderRadius: "12px",
  },

  lpaBox: {
    flex: 1,
    textAlign: "center",
  },

  lpaLabel: {
    fontSize: "11px",
    color: "#9CA3AF",
    margin: "0 0 4px 0",
    textTransform: "uppercase",
    fontWeight: "500",
  },

  lpaValueBefore: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0",
    fontWeight: "600",
  },

  lpaValueAfter: {
    fontSize: "13px",
    color: "#10B981",
    margin: "0",
    fontWeight: "600",
  },

  arrow: {
    color: "#6B7280",
    fontSize: "16px",
    fontWeight: "bold",
  },

  testimonial: {
    fontSize: "14px",
    color: "#D1D5DB",
    margin: "0",
    lineHeight: "1.6",
    fontStyle: "italic",
  },

  quoteIcon: {
    fontSize: "24px",
    color: "#0052CC",
    marginRight: "4px",
  },

  gradientLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100px",
    background: "linear-gradient(to right, #0F1729, transparent)",
    pointerEvents: "none",
    zIndex: 10,
  },

  gradientRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "100px",
    background: "linear-gradient(to left, #0F1729, transparent)",
    pointerEvents: "none",
    zIndex: 10,
  },
};