import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What are the eligibility criteria for the programs?',
    answer: 'Our programs are open to graduates and working professionals from any background. Basic computer knowledge and English proficiency are required. No prior coding experience is needed for beginner programs.'
  },
  {
    question: 'What is the duration of the programs?',
    answer: 'Program duration varies from 4 to 8 months depending on the course you choose. All programs include flexible schedules with weekend and evening batches available.'
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes! We offer 360° placement support including resume building, mock interviews, portfolio development, and direct connections with 500+ hiring partners. Our placement rate is 95%.'
  },
  {
    question: 'What is the fee structure and payment options?',
    answer: 'We offer flexible payment plans including EMI options, income-share agreements, and scholarships for deserving candidates. Contact our counselors for detailed fee information.'
  },
  {
    question: 'Can I switch careers with no technical background?',
    answer: 'Absolutely! Many of our successful alumni come from non-technical backgrounds. Our programs are designed to take you from basics to industry-ready skills with personalized support.'
  },
  {
    question: 'What kind of projects will I work on?',
    answer: 'You\'ll work on real-world capstone projects in areas like predictive analytics, ML models, data pipelines, and business intelligence dashboards. Projects are based on actual industry scenarios.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={styles.section}>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-item {
          animation: slideInUp 0.5s ease-out forwards;
        }

        .chevron-rotate {
          transition: transform 0.3s ease;
        }
      `}</style>

      <div style={styles.container}>
        {/* Left Side - Content */}
        <div style={styles.leftContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.heading}>
              Have Questions?
              <span style={styles.accentText}> We Have Answers</span>
            </h2>

            <p style={styles.description}>
              Everything you need to know about our programs, eligibility, placement support, and career guidance. Our expert counselors are here to help you make the best decision for your career transformation.
            </p>

            <div style={styles.highlightsContainer}>
              <div style={styles.highlightItem}>
                <div style={styles.highlightIcon}>✓</div>
                <div>
                  <h4 style={styles.highlightTitle}>Expert Guidance</h4>
                  <p style={styles.highlightText}>1-on-1 career counseling sessions</p>
                </div>
              </div>

              <div style={styles.highlightItem}>
                <div style={styles.highlightIcon}>✓</div>
                <div>
                  <h4 style={styles.highlightTitle}>360° Support</h4>
                  <p style={styles.highlightText}>Resume, interviews, placement</p>
                </div>
              </div>

              <div style={styles.highlightItem}>
                <div style={styles.highlightIcon}>✓</div>
                <div>
                  <h4 style={styles.highlightTitle}>Flexible Learning</h4>
                  <p style={styles.highlightText}>Weekend and evening batches</p>
                </div>
              </div>

              <div style={styles.highlightItem}>
                <div style={styles.highlightIcon}>✓</div>
                <div>
                  <h4 style={styles.highlightTitle}>95% Placement Rate</h4>
                  <p style={styles.highlightText}>Proven success with alumni</p>
                </div>
              </div>
            </div>

            <p style={styles.cta}>
              Still have questions? Reach out to our team for personalized guidance!
            </p>
          </motion.div>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div style={styles.rightContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={styles.faqHeading}>
              Frequently Asked Questions
            </h3>
            <p style={styles.faqSubtitle}>
              Get instant answers to common questions
            </p>
          </motion.div>

          <div style={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                style={styles.faqItem}
                className="faq-item"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{
                    ...styles.faqButton,
                    borderColor: openIndex === index ? '#0052CC' : '#ffffff1a',
                    backgroundColor: openIndex === index ? '#ffffff08' : '#ffffff05',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff10';
                    e.currentTarget.style.borderColor = '#ffffff20';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = openIndex === index ? '#ffffff08' : '#ffffff05';
                    e.currentTarget.style.borderColor = openIndex === index ? '#0052CC' : '#ffffff1a';
                  }}
                >
                  <div style={styles.faqQuestion}>
                    <h4 style={styles.faqQuestionText}>{faq.question}</h4>
                    <ChevronDown
                      style={{
                        ...styles.chevron,
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      className="chevron-rotate"
                    />
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={styles.faqAnswer}
                      >
                        <p style={styles.faqAnswerText}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: '80px',
    paddingBottom: '80px',
    backgroundColor: '#0F1729',
    overflow: 'hidden',
  },

  container: {
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '40px',
    paddingRight: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '60px',
    alignItems: 'flex-start',
  },

  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingTop: '20px',
  },

  heading: {
    fontSize: '42px',
    fontWeight: '900',
    color: 'white',
    marginBottom: '0',
    lineHeight: '1.3',
    letterSpacing: '-0.5px',
  },

  accentText: {
    color: '#0052CC',
    display: 'block',
  },

  description: {
    fontSize: '16px',
    color: '#9CA3AF',
    lineHeight: '1.8',
    marginBottom: '0',
  },

  highlightsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  highlightItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },

  highlightIcon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#0052CC',
    color: 'white',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    flexShrink: 0,
  },

  highlightTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 4px 0',
  },

  highlightText: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0',
  },

  cta: {
    fontSize: '14px',
    color: '#9CA3AF',
    fontStyle: 'italic',
    marginBottom: '0',
  },

  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },

  faqHeading: {
    fontSize: '28px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 8px 0',
  },

  faqSubtitle: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0',
  },

  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  faqItem: {
    marginBottom: '0',
  },

  faqButton: {
    width: '100%',
    textAlign: 'left',
    backgroundColor: '#ffffff05',
    backdropFilter: 'blur(10px)',
    border: '1px solid #ffffff1a',
    borderRadius: '16px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    appearance: 'none',
    fontFamily: 'inherit',
  },

  faqQuestion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
  },

  faqQuestionText: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'white',
    margin: '0',
    lineHeight: '1.5',
  },

  chevron: {
    width: '20px',
    height: '20px',
    color: '#0052CC',
    flexShrink: 0,
    marginTop: '2px',
  },

  faqAnswer: {
    overflow: 'hidden',
  },

  faqAnswerText: {
    fontSize: '14px',
    color: '#9CA3AF',
    lineHeight: '1.7',
    marginTop: '16px',
    marginBottom: '0',
  },
};