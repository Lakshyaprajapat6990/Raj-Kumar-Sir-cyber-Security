import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Zap, Mail, Award, Clock, Lock, Star } from 'lucide-react';
import Animate from './Animate';

const stats = [
  { value: '8+', label: 'Core Certifications', icon: <Award size={16} color="var(--cyan)" /> },
  { value: '24/7', label: 'Incident Response', icon: <Clock size={16} color="var(--cyan)" /> },
  { value: '100%', label: 'Confidentiality', icon: <Lock size={16} color="var(--cyan)" /> },
  { value: '5+', label: 'Years Experience', icon: <Star size={16} color="var(--cyan)" /> },
];

const titles = [
  'Cybersecurity Consulting & Risk Management',
  'Cryptography Expert (PKI & Key Management)',
  'CEH - Ethical Hacking & Penetration Testing',
  'Cloud Data Security (AWS, Azure, GCP)',
  'SSL/TLS Certificate Management',
  'Linux Server Hardening & Security',
  'Network Security & Defense (CCNA)',
  'Dark Web Monitoring & Threat Intelligence',
  'IT Maintenance Core Framework',
  'IT Infrastructure Delivery Matrix',
  'IT Implementation Best Practices',
  'IT Asset Management (ITAM) Lifecycle',
  'IT SLAs & OLAs Framework',
  'IT Documentation & Knowledge Management',
];

const heroImages = [
  '/hero/hero-bg-1.jpg',
  '/hero/hero-bg-2.jpg',
  '/hero/hero-bg-3.jpg',
];

const SLIDE_MS = 9000;

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((titleIdx + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIdx((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 130,
      overflow: 'hidden',
    }}>
      {/* Rotating full-bleed backgrounds */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            opacity: i === bgIdx ? 1 : 0,
            transform: i === bgIdx ? 'scale(1.04)' : 'scale(1)',
            transition: 'opacity 1.2s ease, transform 9s linear',
            zIndex: 0,
          }}
        />
      ))}

      {/* Brand wash for readable text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(105deg, rgba(244,245,241,0.94) 0%, rgba(244,245,241,0.82) 42%, rgba(244,245,241,0.45) 68%, rgba(244,245,241,0.22) 100%),
            linear-gradient(180deg, rgba(244,245,241,0.35) 0%, transparent 35%, rgba(238,240,234,0.55) 100%)
          `,
        }}
      />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 780 }}>
          <Animate type="fadeDown" delay="0s">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(107,143,0,0.28)',
              backdropFilter: 'blur(8px)',
              borderRadius: 20, padding: '6px 16px', marginBottom: 28,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: 'var(--green)',
                boxShadow: '0 0 8px var(--green)', display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--green)' }}>
                Available for Security Engagements
              </span>
            </div>
          </Animate>

          <Animate type="fadeLeft" delay="0.15s">
            <h1 style={{
              fontFamily: 'var(--display)', fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', marginBottom: 20,
            }}>
              Securing Your<br />
              <span style={{ color: 'var(--accent)', textShadow: '0 8px 24px rgba(182,217,42,0.25)' }}>
                Digital World
              </span>
            </h1>
          </Animate>

          <Animate type="fadeLeft" delay="0.25s">
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 'clamp(20px, 2.5vw, 26px)',
              color: 'var(--muted)', marginBottom: 16, minHeight: 36,
            }}>
              <span style={{ color: 'var(--cyan)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--green)' }}>{displayed}</span>
              <span style={{
                display: 'inline-block', width: 2, height: '1em',
                background: 'var(--green)', marginLeft: 2,
                animation: 'blink 1s step-end infinite',
              }} />
            </div>
          </Animate>

          <Animate type="fadeUp" delay="0.35s">
            <p style={{
              fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--cyan)',
              letterSpacing: 2, marginBottom: 20,
            }}>
              {'{'}{'}'} Committed to Enhancing System Security and User Safety
            </p>
          </Animate>

          <Animate type="fadeUp" delay="0.45s">
            <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 620, marginBottom: 40, lineHeight: 1.8 }}>
              Expert cybersecurity professional specializing in penetration testing, cryptography,
              cloud security, and dark web threat intelligence. Protecting organizations from
              advanced persistent threats with certified expertise and proven methodologies.
            </p>
          </Animate>

          <Animate type="fadeUp" delay="0.55s">
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link to="services" spy smooth offset={-68} duration={600}>
                <button className="btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
                  <Zap size={16} /> Explore Services
                </button>
              </Link>
              <Link to="contact" spy smooth offset={-68} duration={600}>
                <button className="btn-outline" style={{
                  fontSize: 15, padding: '14px 32px',
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(6px)',
                }}>
                  <Mail size={16} /> Contact Me
                </button>
              </Link>
            </div>
          </Animate>

          {/* Slide indicators */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 40 }} aria-label="Hero slideshow">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show background ${i + 1}`}
                onClick={() => setBgIdx(i)}
                style={{
                  width: i === bgIdx ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  background: i === bgIdx ? 'var(--primary)' : 'rgba(10,12,8,0.22)',
                  transition: 'width 0.35s ease, background 0.35s ease',
                }}
              />
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
            className="stats-grid">
            {stats.map((s, i) => (
              <Animate key={i} type="popIn" delay={`${0.65 + i * 0.1}s`}>
                <div style={{
                  textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                  paddingRight: 24,
                }} className="stat-item">
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 32, color: 'var(--cyan)',
                    textShadow: 'none',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{s.label}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stat-item { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
