import React, { useEffect, useRef, useState } from 'react';
import { Wifi, Globe, Search, UserCheck, Bug, ClipboardList } from 'lucide-react';
import Animate from './Animate';

const skillCategories = [
  {
    title: 'Network Security',
    Icon: Wifi,
    skills: [
      { name: 'Firewall Configuration', level: 92 },
      { name: 'VPN & IPSec', level: 88 },
      { name: 'IDS/IPS Systems', level: 85 },
      { name: 'Network Traffic Analysis', level: 90 },
    ],
  },
  {
    title: 'Web App Security',
    Icon: Globe,
    skills: [
      { name: 'OWASP Top 10', level: 95 },
      { name: 'SQL Injection / XSS', level: 90 },
      { name: 'Burp Suite', level: 88 },
      { name: 'API Security Testing', level: 85 },
    ],
  },
  {
    title: 'Digital Forensics',
    Icon: Search,
    skills: [
      { name: 'Incident Investigation', level: 82 },
      { name: 'Disk & Memory Analysis', level: 78 },
      { name: 'Log Analysis', level: 88 },
      { name: 'Chain of Custody', level: 80 },
    ],
  },
  {
    title: 'Identity & Access Management',
    Icon: UserCheck,
    skills: [
      { name: 'Active Directory', level: 85 },
      { name: 'OAuth / SAML / SSO', level: 82 },
      { name: 'Zero Trust Architecture', level: 80 },
      { name: 'Privileged Access Mgmt', level: 78 },
    ],
  },
  {
    title: 'Malware Analysis',
    Icon: Bug,
    skills: [
      { name: 'Static Analysis', level: 80 },
      { name: 'Dynamic Sandboxing', level: 78 },
      { name: 'Reverse Engineering', level: 72 },
      { name: 'Threat Hunting', level: 82 },
    ],
  },
  {
    title: 'Compliance & Standards',
    Icon: ClipboardList,
    skills: [
      { name: 'ISO 27001', level: 88 },
      { name: 'NIST CSF', level: 85 },
      { name: 'GDPR', level: 82 },
      { name: 'PCI-DSS', level: 78 },
    ],
  },
];

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, gap: 8 }}>
        <span style={{ fontSize: 15, color: 'var(--text)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--cyan)', flexShrink: 0 }}>{level}%</span>
      </div>
      <div style={{ height: 4, background: 'rgba(10,12,8,0.08)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: animate ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, var(--cyan), var(--green))',
          borderRadius: 2,
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 0 8px rgba(212,248,74,0.4)',
        }} />
      </div>
    </div>
  );
}

function SkillCard({ cat, animate }) {
  const { Icon } = cat;
  return (
    <div className="glow-card skill-marquee-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: 'rgba(212,248,74,0.12)', border: '1px solid rgba(107,143,0,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={18} color="var(--cyan)" strokeWidth={1.5} />
        </div>
        <h3 style={{
          fontFamily: 'var(--display)', fontSize: 16, fontWeight: 700,
          color: 'var(--accent)', lineHeight: 1.3,
        }}>
          {cat.title}
        </h3>
      </div>
      {cat.skills.map((sk, j) => (
        <SkillBar key={j} {...sk} animate={animate} />
      ))}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const loop = [...skillCategories, ...skillCategories];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: '100px 0', background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <Animate type="fadeDown">
          <div className="section-header" style={{ marginBottom: 8 }}>
            <span className="section-label">Technical Expertise</span>
            <h2 className="section-title">Skills <span>&amp; Expertise</span></h2>
            <p className="section-subtitle">
              Skills shaped by real projects, not just textbooks
            </p>
          </div>
        </Animate>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-float">
          {loop.map((cat, i) => (
            <SkillCard key={`skill-${i}`} cat={cat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
