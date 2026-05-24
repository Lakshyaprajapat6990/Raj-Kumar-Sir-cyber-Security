import React from 'react';
import { Link } from 'react-scroll';
import { Shield, Mail, Phone, MapPin, Zap, Link2, GitBranch, MessageSquare, Lock } from 'lucide-react';

const quickLinks = ['Services', 'Skills', 'Certifications', 'Dark Web', 'Process', 'Why Us', 'Contact'];
const linkTargets = ['services', 'skills', 'certifications', 'darkweb', 'process', 'why', 'contact'];

const serviceList = [
  'Cybersecurity Consulting',
  'Cryptography & PKI',
  'Penetration Testing',
  'Cloud Security',
  'SSL/TLS Management',
  'Linux Hardening',
  'Network Security',
  'Dark Web Monitoring',
];

const WHATSAPP_URL = `https://wa.me/919424054049?text=${encodeURIComponent('Hi Rajkumar, I would like to discuss a cybersecurity requirement.')}`;

const contactDetails = [
  { Icon: Mail, text: 'ceoraj@cybersecuritycloud.online', href: 'mailto:ceoraj@cybersecuritycloud.online' },
  { Icon: Phone, text: '+91 94240 54049', href: 'tel:+919424054049' },
  { Icon: MapPin, text: 'India (Remote Worldwide)', href: null },
  { Icon: Zap, text: 'Response: <24 hours', href: null },
];

const socials = [
  { Icon: Link2, label: 'LinkedIn', href: '#' },
  { Icon: GitBranch, label: 'GitHub', href: '#' },
  { Icon: MessageSquare, label: 'Twitter', href: '#' },
  { Icon: Lock, label: 'HackerOne', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#030306',
      borderTop: '1px solid rgba(0,212,255,0.1)',
      padding: '60px 0 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48, marginBottom: 48,
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 22, color: '#fff',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <Shield size={22} color="var(--cyan)" />
              RAJKUMAR
              <span style={{ color: 'var(--green)', fontSize: 12, marginLeft: 2 }}>SEC</span>
            </div>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--cyan)',
              letterSpacing: 1, marginBottom: 16,
            }}>
              // Committed to Enhancing System Security and User Safety
            </p>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>
              Aspiring Cybersecurity Analyst | Ethical Hacker | Network Defense Specialist.
              Protecting your digital assets with certified expertise.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map(({ Icon, label, href }, i) => (
                <a key={i} href={href} aria-label={label} style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(0,212,255,0.06)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,212,255,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <Icon size={16} color="var(--muted)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--cyan)', marginBottom: 20, letterSpacing: 1 }}>
              QUICK LINKS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((l, i) => (
                <Link key={i} to={linkTargets[i]} spy smooth offset={-68} duration={600}
                  style={{ fontSize: 15, color: 'var(--muted)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                  &rsaquo; {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--cyan)', marginBottom: 20, letterSpacing: 1 }}>
              SERVICES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceList.map((s, i) => (
                <span key={i} style={{ fontSize: 15, color: 'var(--muted)' }}>&rsaquo; {s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--cyan)', marginBottom: 20, letterSpacing: 1 }}>
              CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactDetails.map(({ Icon, text, href }, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15, color: 'var(--muted)' }}>
                  <Icon size={14} color="var(--cyan)" strokeWidth={1.5} />
                  {href
                    ? <a href={href} style={{ color: 'var(--muted)', textDecoration: 'none' }}
                        onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                        onMouseLeave={e => e.target.style.color = 'var(--muted)'}>{text}</a>
                    : <span>{text}</span>
                  }
                </div>
              ))}
              {/* WhatsApp */}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)',
                borderRadius: 8, padding: '8px 14px', textDecoration: 'none',
                color: '#25d366', fontSize: 12, fontFamily: 'var(--mono)',
                marginTop: 4, width: 'fit-content',
                transition: 'box-shadow 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 12px rgba(37,211,102,0.2)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <MessageSquare size={14} color="#25d366" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(0,212,255,0.08)', padding: '20px 24px' }}>
        <div style={{
          maxWidth: '100%', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
            &copy; 2026 Rajkumar | Cybersecurity Expert. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--green)', boxShadow: '0 0 8px var(--green)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)' }}>
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
