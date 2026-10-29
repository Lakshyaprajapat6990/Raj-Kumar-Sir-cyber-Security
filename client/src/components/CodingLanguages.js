import React, { useEffect, useRef, useState } from 'react';
import {
  Code2, Terminal, Braces, Database, FileCode2, Coffee, Binary, SquareTerminal,
} from 'lucide-react';
import Animate from './Animate';

const languages = [
  {
    name: 'Python',
    Icon: Code2,
    level: 92,
    uses: ['Automation', 'Security scripts', 'API tooling'],
  },
  {
    name: 'Bash / Shell',
    Icon: Terminal,
    level: 90,
    uses: ['Linux ops', 'Hardening scripts', 'CI helpers'],
  },
  {
    name: 'PowerShell',
    Icon: SquareTerminal,
    level: 85,
    uses: ['Windows admin', 'AD tasks', 'Incident response'],
  },
  {
    name: 'JavaScript',
    Icon: Braces,
    level: 82,
    uses: ['Web testing', 'Node tooling', 'Front-end checks'],
  },
  {
    name: 'SQL',
    Icon: Database,
    level: 88,
    uses: ['Data review', 'Injection testing', 'Log queries'],
  },
  {
    name: 'C / C++',
    Icon: Binary,
    level: 72,
    uses: ['Low-level basics', 'Exploit research', 'Perf tools'],
  },
  {
    name: 'Go',
    Icon: FileCode2,
    level: 70,
    uses: ['Network tools', 'CLI utilities', 'Cloud services'],
  },
  {
    name: 'Java',
    Icon: Coffee,
    level: 68,
    uses: ['App security review', 'Enterprise stacks', 'API audits'],
  },
];

function LangCard({ lang, animate }) {
  const { Icon } = lang;
  return (
    <div className="glow-card marquee-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(212,248,74,0.18)',
          border: '1px solid rgba(107,143,0,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={20} color="var(--accent)" strokeWidth={1.6} />
        </div>
        <div>
          <h3 style={{
            fontFamily: 'var(--display)', fontSize: 18, fontWeight: 700,
            color: 'var(--text)', marginBottom: 2,
          }}>
            {lang.name}
          </h3>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--accent)', fontWeight: 600 }}>
            {lang.level}%
          </span>
        </div>
      </div>

      <div style={{ height: 6, background: 'rgba(10,12,8,0.08)', borderRadius: 3, overflow: 'hidden', marginBottom: 18 }}>
        <div style={{
          height: '100%',
          width: animate ? `${lang.level}%` : '0%',
          background: 'linear-gradient(90deg, var(--primary), var(--accent))',
          borderRadius: 3,
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {lang.uses.map((u) => (
          <span key={u} className="tag" style={{ fontSize: 12 }}>
            {u}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CodingLanguages() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  const loop = [...languages, ...languages];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="languages" ref={ref} style={{ padding: '100px 0', background: 'var(--bg2)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <Animate type="fadeDown">
          <div className="section-header" style={{ marginBottom: 8 }}>
            <span className="section-label">tools of the trade</span>
            <h2 className="section-title">Coding <span>Languages</span></h2>
            <p className="section-subtitle">
              Languages I use day to day for security work, automation, and tooling
            </p>
          </div>
        </Animate>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-float marquee-float-slow">
          {loop.map((lang, i) => (
            <LangCard key={`lang-${i}`} lang={lang} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
