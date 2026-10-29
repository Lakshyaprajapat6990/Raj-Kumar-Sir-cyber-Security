import React from 'react';
import { Link } from 'react-scroll';
import { Shield, Mail, Phone, MapPin, Zap, Link2, GitBranch, MessageSquare, Lock } from 'lucide-react';

const quickLinks = ['Cloud & Resiliency', 'Services', 'Digital', 'NetSec', 'Dark Web', 'Why Us', 'Contact'];
const linkTargets = ['rajcyber', 'services', 'digital', 'netsec', 'darkweb', 'why', 'contact'];

const serviceList = [
  'rajcyber DaaS',
  'rajcyber CloudInfinit CKS',
  'Hosted Private Cloud',
  'Managed Public Cloud',
  'CloudInfinit+AI',
  'Network Security',
  'Penetration Testing (CEH)',
  'Dark Web Monitoring',
];

const WHATSAPP_URL = `https://wa.me/919424054049?text=${encodeURIComponent('Hi Rajkumar, I would like to discuss a cybersecurity requirement.')}`;

const contactDetails = [
  { Icon: Mail, text: 'inforaj@cybersecuritycloudai.com', href: 'mailto:inforaj@cybersecuritycloudai.com' },
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
      background: '#0a0c08',
      borderTop: '1px solid rgba(212,248,74,0.18)',
      padding: '60px 0 0',
      color: '#f4f5f1',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48, marginBottom: 48,
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, color: '#f4f5f1',
              marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #d4f84a, #b6d92a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Shield size={18} color="#0a0c08" />
              </div>
              Rajkumar
              <span style={{ color: '#d4f84a', fontSize: 12, marginLeft: 2, fontWeight: 600 }}>SECcloud</span>
            </div>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: 12, color: '#d4f84a', fontWeight: 600,
              letterSpacing: 1, marginBottom: 16, textTransform: 'uppercase',
            }}>
              Security that people can understand and trust
            </p>
            <p style={{ fontSize: 14, color: 'rgba(244,245,241,0.72)', lineHeight: 1.7, marginBottom: 24 }}>
              Cybersecurity analyst, ethical hacker, and network defender.
              I help protect what your business depends on, with care and clarity.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map(({ Icon, label, href }, i) => (
                <a key={i} href={href} aria-label={label} style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,248,74,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#d4f84a';
                    e.currentTarget.style.background = 'rgba(212,248,74,0.12)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(212,248,74,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(212,248,74,0.22)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={16} color="#f4f5f1" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--display)', fontSize: 14, fontWeight: 700,
              color: '#d4f84a', marginBottom: 20, letterSpacing: 0.5,
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map((l, i) => (
                <Link key={i} to={linkTargets[i]} spy smooth offset={-110} duration={600}
                  style={{ fontSize: 15, color: 'rgba(244,245,241,0.78)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#d4f84a'}
                  onMouseLeave={e => e.target.style.color = 'rgba(244,245,241,0.78)'}>
                  › {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'var(--display)', fontSize: 14, fontWeight: 700,
              color: '#d4f84a', marginBottom: 20, letterSpacing: 0.5,
            }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {serviceList.map((s, i) => (
                <span key={i} style={{ fontSize: 15, color: 'rgba(244,245,241,0.72)' }}>› {s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--display)', fontSize: 14, fontWeight: 700,
              color: '#d4f84a', marginBottom: 20, letterSpacing: 0.5,
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactDetails.map(({ Icon, text, href }, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15, color: 'rgba(244,245,241,0.78)' }}>
                  <Icon size={15} color="#d4f84a" strokeWidth={1.8} />
                  {href
                    ? <a href={href} style={{ color: 'rgba(244,245,241,0.78)', textDecoration: 'none' }}
                        onMouseEnter={e => e.target.style.color = '#d4f84a'}
                        onMouseLeave={e => e.target.style.color = 'rgba(244,245,241,0.78)'}>{text}</a>
                    : <span>{text}</span>
                  }
                </div>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.4)',
                borderRadius: 10, padding: '10px 14px', textDecoration: 'none',
                color: '#6ee7a0', fontSize: 13, fontFamily: 'var(--sans)', fontWeight: 600,
                marginTop: 4, width: 'fit-content',
                transition: 'box-shadow 0.2s, background 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(37,211,102,0.25)';
                  e.currentTarget.style.background = 'rgba(37,211,102,0.16)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(37,211,102,0.1)';
                }}
              >
                <MessageSquare size={14} color="#6ee7a0" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(212,248,74,0.12)',
        background: '#070906',
        padding: '20px 24px',
      }}>
        <div style={{
          maxWidth: '100%', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{ fontSize: 14, color: 'rgba(244,245,241,0.65)', fontFamily: 'var(--sans)' }}>
            © 2020 ISO 27035 Rajkumar | Cybersecurity Expert. All rights reserved.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#d4f84a', boxShadow: '0 0 8px rgba(212,248,74,0.55)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 600, color: '#d4f84a' }}>
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
