import { Shield, Briefcase, QrCode, Globe, CheckCircle, Linkedin } from 'lucide-react';
import img from '../../assets/certifications-infosys.jpg';

export default function CertificationsSection() {
  const badges = [
    {
      icon: Shield,
      title: 'Verified Digital Credential',
      color: '#1E40AF'
    },
    {
      icon: Briefcase,
      title: 'LinkedIn Ready',
      color: '#1E40AF'
    },
    {
      icon: QrCode,
      title: 'QR Verification',
      color: '#1E40AF'
    },
    {
      icon: Globe,
      title: 'Globally Accepted',
      color: '#1E40AF'
    }
  ];

  const stats = [
    {
      number: '12,000+',
      label: 'CERTIFICATES ISSUED',
      color: '#1E3A8A'
    },
    {
      number: '92%',
      label: 'CAREER GROWTH',
      color: '#1E3A8A'
    },
    {
      number: '400+',
      label: 'HIRING PARTNERS',
      color: '#1E3A8A'
    },
    {
      number: '25+',
      label: 'COUNTRIES',
      color: '#9CA3AF'
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

        {/* Right Side - Certificate Image with Badges */}
        <div style={styles.rightContent}>
          {/* Top Right Badge - Verified Credential */}
          <div style={styles.topRightBadge}>
            <CheckCircle style={{ width: '20px', height: '20px', color: 'white', backgroundColor: '#10B981', borderRadius: '50%' }} />
            <div>
              <div style={styles.badgeTitle}>Verified Credential</div>
              <div style={styles.badgeSubtitle}>Digitally Secured</div>
            </div>
          </div>

          {/* Certificate Image Placeholder */}
          <div style={styles.certificateImageContainer}>
            <img
              src={img}
              alt="Certificates"
              style={styles.certificateImage}
            />
            {/* Fallback placeholder */}
            <div style={styles.certificatePlaceholder}>
              <div style={styles.placeholderText}>Microsoft Certified & Linkway Certificate Images</div>
            </div>
          </div>

          {/* Bottom Left Badge - LinkedIn Ready */}
          <div style={styles.bottomLeftBadge}>
            <Linkedin style={{ width: '20px', height: '20px', color: '#0A66C2' }} />
            <div>
              <div style={styles.badgeTitle}>LinkedIn Ready</div>
              <div style={styles.badgeSubtitle}>Share Instantly</div>
            </div>
          </div>

          {/* Bottom Right Badge - Industry Recognized */}
          <div style={styles.bottomRightBadge}>
            <div style={styles.badgeIconBlue}>🏆</div>
            <div>
              <div style={styles.badgeTitle}>Industry Recognized</div>
              <div style={styles.badgeSubtitle}>400+ Partners</div>
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
    backgroundColor: '#F5F3F0',
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
    backgroundColor: '#1E40AF',
    borderRadius: '2px',
  },

  subtitle: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#1E40AF',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },

  heading: {
    fontSize: '48px',
    fontWeight: '900',
    color: '#0F1729',
    marginBottom: '0',
    lineHeight: '1.2',
    letterSpacing: '-0.7px',
  },

  accentText: {
    color: '#1E40AF',
    textDecoration: 'underline',
    textDecorationColor: '#1E40AF',
    textDecorationThickness: '3px',
    textUnderlineOffset: '4px',
  },

  description: {
    fontSize: '16px',
    color: '#6B7280',
    lineHeight: '1.8',
    marginBottom: '0',
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
    backgroundColor: '#EFF6FF',
    borderRadius: '24px',
    padding: '12px 20px',
    transition: 'all 0.3s ease',
    border: 'none',
  },

  badgeText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1E40AF',
  },

  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    backgroundColor: '#F0F4F8',
    borderRadius: '20px',
    padding: '32px 24px',
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
    fontFamily: 'Georgia, serif',
  },

  statLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  rightContent: {
    position: 'relative',
    width: '100%',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

  certificateImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
  },

  certificateImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },

  certificatePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    border: '2px dashed #D1D5DB',
  },

  placeholderText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#6B7280',
    textAlign: 'center',
  },

  badgeTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#1F2937',
  },

  badgeSubtitle: {
    fontSize: '11px',
    color: '#6B7280',
  },

  bottomLeftBadge: {
    position: 'absolute',
    bottom: '-30px',
    left: '0',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    zIndex: 20,
  },

  bottomRightBadge: {
    position: 'absolute',
    bottom: '-30px',
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

  badgeIconBlue: {
    width: '40px',
    height: '40px',
    backgroundColor: '#1E40AF',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
};