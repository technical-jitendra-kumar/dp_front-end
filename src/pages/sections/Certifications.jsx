import { useState, useEffect } from 'react';
import { Shield, Briefcase, QrCode, Globe, CheckCircle, Linkedin } from 'lucide-react';
import img from '../../assets/certificate.png';
import img1 from '../../assets/certificate2.png';
import img2 from '../../assets/certificate3.png';

export default function CertificationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const certificates = [img, img1, img2];
  const badges = [
    {
      icon: Shield,
      title: 'Verified Digital Credential',
      color: '#0052CC'
    },
    {
      icon: Briefcase,
      title: 'LinkedIn Ready',
      color: '#0052CC'
    },
    {
      icon: QrCode,
      title: 'QR Verification',
      color: '#0052CC'
    },
    {
      icon: Globe,
      title: 'Globally Accepted',
      color: '#0052CC'
    }
  ];

  const stats = [
    {
      number: '12,000+',
      label: 'CERTIFICATES ISSUED',
      color: '#0052CC'
    },
    {
      number: '92%',
      label: 'CAREER GROWTH',
      color: '#0052CC'
    },
    {
      number: '400+',
      label: 'HIRING PARTNERS',
      color: '#0052CC'
    },
    {
      number: '25+',
      label: 'COUNTRIES',
      color: '#64748B'
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Side - Content */}
        <div style={styles.leftContent}>
          {/* Subtitle */}
          <div style={styles.subtitleContainer}>
            <div style={styles.subtitleLine}></div>
            <span style={styles.subtitle}>INDUSTRY-RECOGNIZED CREDENTIALS</span>
          </div>

          {/* Heading */}
          <h2 style={styles.heading}>
            Earn Certificates
            <br />
            That <span style={styles.accentText}>Actually Matter</span>
          </h2>

          {/* Description */}
          <p style={styles.description}>
            Not just paper credentials. Our certifications are recognized by{' '}
            <span style={{ fontWeight: '700', color: '#1F2937' }}>400+ hiring partners</span> and
            validate the skills that top employers are actively searching for.
          </p>

          {/* Badges */}
          <div style={styles.badgesContainer}>
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} style={styles.badge}>
                  <Icon style={{ width: '18px', height: '18px', color: badge.color }} />
                  <span style={styles.badgeText}>{badge.title}</span>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <div style={{ ...styles.statNumber, color: stat.color }}>
                  {stat.number}
                </div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Certificates Grid */}
        <div style={styles.rightContent}>
          {/* Top Right Badge - Verified Credential */}
          <div style={styles.topRightBadge}>
            <CheckCircle style={{ width: '20px', height: '20px', color: 'white', backgroundColor: '#10B981', borderRadius: '50%' }} />
            <div>
              <div style={styles.badgeTitle}>Verified Credential</div>
              <div style={styles.badgeSubtitle}>Digitally Secured</div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div style={styles.certificatesGrid}>
            {certificates.map((cert, index) => (
              <div
                key={index}
                style={{
                  ...styles.certificateCard,
                  gridColumn: index === 2 ? '1 / span 2' : 'auto',
                  justifySelf: index === 2 ? 'center' : 'stretch',
                  maxWidth: index === 2 ? '85%' : '100%',
                  position: 'relative'
                }}
              >
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  style={styles.certificateImage}
                />
                {/* Industry Recognized Badge - attached to bottom certificate */}
                {index === 2 && (
                  <div style={styles.bottomCertificateBadge}>
                    <div style={styles.badgeIconBlue}>🏆</div>
                    <div>
                      <div style={styles.badgeTitle}>Industry Recognized</div>
                      <div style={styles.badgeSubtitle}>400+ Partners</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Left Badge - LinkedIn Ready */}
          <div style={styles.bottomLeftBadge}>
            <Linkedin style={{ width: '20px', height: '20px', color: '#0A66C2' }} />
            <div>
              <div style={styles.badgeTitle}>LinkedIn Ready</div>
              <div style={styles.badgeSubtitle}>Share Instantly</div>
            </div>
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
    backgroundColor: '#f0f4f8',
    overflow: 'visible',
  },

  container: {
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '40px',
    paddingRight: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '80px',
    alignItems: 'center',
  },

  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  subtitleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  subtitleLine: {
    width: '40px',
    height: '3px',
    backgroundColor: '#0052CC',
    borderRadius: '2px',
  },

  subtitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#0052CC',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: "'DM Sans', sans-serif",
  },

  heading: {
    fontSize: '48px',
    fontWeight: '900',
    color: '#0A0E27',
    marginBottom: '0',
    lineHeight: '1.2',
    letterSpacing: '-0.7px',
    fontFamily: "'DM Sans', sans-serif",
  },

  accentText: {
    color: '#0052CC',
    textDecoration: 'underline',
    textDecorationColor: '#0052CC',
    textDecorationThickness: '3px',
    textUnderlineOffset: '4px',
  },

  description: {
    fontSize: '16px',
    color: '#4B5563',
    lineHeight: '1.8',
    marginBottom: '0',
    fontFamily: "'DM Sans', sans-serif",
  },

  badgesContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },

  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '14px 18px',
    transition: 'all 0.3s ease',
    border: '1.5px solid #E2E8F0',
    boxShadow: '0 2px 8px rgba(0, 82, 204, 0.08)',
  },

  badgeText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#0052CC',
    fontFamily: "'DM Sans', sans-serif",
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px 24px',
    border: '1.5px solid #E2E8F0',
    boxShadow: '0 4px 16px rgba(0, 82, 204, 0.08)',
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  statNumber: {
    fontSize: '28px',
    fontWeight: '900',
    marginBottom: '8px',
    fontFamily: "'DM Sans', sans-serif",
  },

  statLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#64748B',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    fontFamily: "'DM Sans', sans-serif",
  },

  rightContent: {
    position: 'relative',
    width: '100%',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  certificatesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '20px',
    width: '100%',
    height: '100%',
  },

  certificateCard: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'visible',
    boxShadow: '0 8px 24px rgba(0, 82, 204, 0.12)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    minHeight: '200px',
  },

  certificateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    transition: 'transform 0.3s ease',
    padding: '10px',
  },

  topRightBadge: {
    position: 'absolute',
    top: '-30px',
    right: '0',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    zIndex: 20,
  },

  bottomLeftBadge: {
    position: 'absolute',
    bottom: '-10px',
    left: '40px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    zIndex: 20,
  },

  bottomCertificateBadge: {
    position: 'absolute',
    top: '-10px',
    right: '-150px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    zIndex: 20,
  },

  badgeIconBlue: {
    fontSize: '20px',
  },

  badgeTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#0A0E27',
    fontFamily: "'DM Sans', sans-serif",
  },

  badgeSubtitle: {
    fontSize: '11px',
    color: '#64748B',
    fontFamily: "'DM Sans', sans-serif",
  },
};