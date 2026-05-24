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
  'Cybersecurity Analyst',
  'Ethical Hacker',
  'Network Defense Specialist',
  'Cryptography Expert',
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

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

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: 80,
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)',
    }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ maxWidth: 780 }}>
          {/* Status badge */}
          <Animate type="fadeDown" delay="0s">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)',
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

          {/* Headline */}
          <Animate type="fadeLeft" delay="0.15s">
            <h1 style={{
              fontFamily: 'var(--mono)', fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: 400, lineHeight: 1.1, color: '#fff', marginBottom: 20,
            }}>
              Securing Your<br />
              <span style={{ color: 'var(--cyan)', textShadow: '0 0 30px rgba(0,212,255,0.4)' }}>
                Digital World
              </span>
            </h1>
          </Animate>

          {/* Typewriter */}
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

          {/* Tagline */}
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

          {/* CTA buttons */}
          <Animate type="fadeUp" delay="0.55s">
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 64 }}>
              <Link to="services" spy smooth offset={-68} duration={600}>
                <button className="btn-primary" style={{ fontSize: 15, padding: '14px 32px' }}>
                  <Zap size={16} /> Explore Services
                </button>
              </Link>
              <Link to="contact" spy smooth offset={-68} duration={600}>
                <button className="btn-outline" style={{ fontSize: 15, padding: '14px 32px' }}>
                  <Mail size={16} /> Contact Me
                </button>
              </Link>
            </div>
          </Animate>

          {/* Stats */}
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
                    textShadow: '0 0 20px rgba(0,212,255,0.4)',
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
