import React from 'react';
import { Telescope, FlaskConical, BarChart3, Wrench, Radio } from 'lucide-react';
import Animate from './Animate';

const steps = [
  {
    num: '01',
    Icon: Telescope,
    title: 'Discovery',
    desc: 'We talk through your setup, goals, and worries. I learn how your systems connect and where risk is most likely to show up.',
    color: '#3f5200',
  },
  {
    num: '02',
    Icon: FlaskConical,
    title: 'Assessment',
    desc: 'Then I dig in: scans, pen tests, config reviews, and wherever else makes sense for your environment.',
    color: '#6b8f00',
  },
  {
    num: '03',
    Icon: BarChart3,
    title: 'Reporting',
    desc: 'You get a plain-language report with priority levels, proof where needed, and a short summary leaders can actually use.',
    color: '#a16207',
  },
  {
    num: '04',
    Icon: Wrench,
    title: 'Hardening',
    desc: 'We fix what matters: patches, tighter configs, better controls, and a re-check to confirm the issue is closed.',
    color: '#b91c1c',
  },
  {
    num: '05',
    Icon: Radio,
    title: 'Monitoring',
    desc: 'If you want ongoing cover, I keep watching for new leaks and threats, and check in regularly so nothing quietly drifts.',
    color: '#15803d',
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <Animate type="fadeDown">
          <div className="section-header">
            <span className="section-label">Engagement Model</span>
            <h2 className="section-title">How It <span>Works</span></h2>
            <p className="section-subtitle">
              A simple path from first conversation to lasting protection
            </p>
          </div>
        </Animate>

        <div style={{ position: 'relative' }} className="process-container">
          <div style={{
            position: 'absolute', top: 56, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, #3f5200, #6b8f00, #a16207, #b91c1c, #15803d)',
            opacity: 0.45, zIndex: 0,
          }} className="connector-line" />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 16, position: 'relative', zIndex: 1,
          }} className="steps-grid">
            {steps.map((step, i) => {
              const { Icon } = step;
              return (
                <Animate key={i} type="fadeUp" delay={`${i * 0.15}s`}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: '50%',
                      border: `2px solid ${step.color}`,
                      boxShadow: `0 8px 22px ${step.color}28`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 20px',
                      background: '#fff',
                    }}>
                      <Icon size={28} color={step.color} strokeWidth={1.8} />
                    </div>

                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 700,
                      color: step.color,
                      letterSpacing: 2, marginBottom: 8,
                    }}>
                      STEP {step.num}
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--display)', fontSize: 19, fontWeight: 700,
                      color: 'var(--text)', marginBottom: 12,
                    }}>
                      {step.title}
                    </h3>

                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8 }}>
                      {step.desc}
                    </p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}
