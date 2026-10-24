import React from 'react';
import { BadgeCheck, ShieldOff, BellRing, RefreshCw, ShieldCheck } from 'lucide-react';
import Animate from './Animate';

const reasons = [
  {
    Icon: BadgeCheck,
    title: 'Real certifications, real work',
    desc: 'CEH, CCNA, and more are not just logos on a page. They sit on top of years of hands-on work with live systems and real incidents.',
    stats: '8+ Certifications',
    color: '#d4f84a',
  },
  {
    Icon: ShieldOff,
    title: 'Your secrets stay yours',
    desc: 'Every project starts with an NDA. Findings, passwords, and client details stay private. No sharing, no shortcuts.',
    stats: '100% NDA Protected',
    color: '#6b8f00',
  },
  {
    Icon: BellRing,
    title: 'Help when it matters',
    desc: 'Attacks do not wait for Monday morning. When something looks wrong, you can reach out and get calm, practical support.',
    stats: 'Always Available',
    color: '#dc2626',
  },
  {
    Icon: RefreshCw,
    title: 'From start to follow-up',
    desc: 'Assessment, fixes, and ongoing checks in one place. You are not left with a report and no idea what to do next.',
    stats: 'Full Lifecycle',
    color: '#6b8f00',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="container">
        <Animate type="fadeDown">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why <span>Choose Us</span></h2>
            <p className="section-subtitle">
              Straight talk, careful work, and support that continues after the first report
            </p>
          </div>
        </Animate>

        <div className="why-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, alignItems: 'stretch',
        }}>
          {reasons.map((r, i) => {
            const { Icon } = r;
            const dirs = ['fadeLeft', 'fadeUp', 'fadeUp', 'fadeRight'];
            return (
              <Animate key={i} type={dirs[i]} delay={`${i * 0.12}s`}>
              <div className="glow-card" style={{ textAlign: 'center', position: 'relative', height: '100%' }}>
                <div style={{
                  position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                  width: 80, height: 80, borderRadius: '50%',
                  background: `radial-gradient(circle, ${r.color}20, transparent)`,
                  filter: 'blur(20px)',
                }} />

                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  border: `2px solid ${r.color}40`,
                  background: `${r.color}10`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <Icon size={26} color={r.color} strokeWidth={1.5} />
                </div>

                <h3 style={{ fontFamily: 'var(--mono)', fontSize: 19, color: 'var(--text)', marginBottom: 12 }}>
                  {r.title}
                </h3>

                <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                  {r.desc}
                </p>

                <div style={{
                  display: 'inline-block',
                  background: `${r.color}15`,
                  border: `1px solid ${r.color}30`,
                  borderRadius: 20, padding: '6px 16px',
                  fontFamily: 'var(--mono)', fontSize: 13, color: r.color,
                }}>
                  {r.stats}
                </div>
              </div>
              </Animate>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <Animate type="fadeUp" delay="0.2s">
        <div style={{
          marginTop: 64,
          background: 'linear-gradient(135deg, rgba(212,248,74,0.06), rgba(107,143,0,0.03))',
          border: '1px solid rgba(212,248,74,0.15)',
          borderRadius: 16, padding: '40px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--mono)', fontSize: 24, color: 'var(--text)', marginBottom: 8 }}>
              Ready to Secure Your Organization?
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: 17 }}>
              Get a free 30-minute security consultation. No commitment required.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ fontSize: 15, padding: '14px 36px' }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <ShieldCheck size={16} /> Get Free Consultation
          </button>
        </div>
        </Animate>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
