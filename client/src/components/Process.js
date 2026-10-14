import React from 'react';
import { Telescope, FlaskConical, BarChart3, Wrench, Radio } from 'lucide-react';
import Animate from './Animate';

const steps = [
  {
    num: '01',
    Icon: Telescope,
    title: 'Discovery',
    desc: 'Initial consultation to understand your infrastructure, business context, threat landscape, and security objectives. We map your attack surface.',
    color: '#d4f84a',
  },
  {
    num: '02',
    Icon: FlaskConical,
    title: 'Assessment',
    desc: 'Deep-dive vulnerability scanning, penetration testing, code review, and configuration audits across all identified assets.',
    color: '#6b8f00',
  },
  {
    num: '03',
    Icon: BarChart3,
    title: 'Reporting',
    desc: 'Detailed findings report with risk scores (Critical/High/Medium/Low), proof-of-concept evidence, business impact analysis, and executive summary.',
    color: '#a16207',
  },
  {
    num: '04',
    Icon: Wrench,
    title: 'Hardening',
    desc: 'Hands-on remediation - patching vulnerabilities, hardening configurations, implementing security controls, and validating fixes.',
    color: '#dc2626',
  },
  {
    num: '05',
    Icon: Radio,
    title: 'Monitoring',
    desc: 'Ongoing surveillance with dark web monitoring, threat intelligence feeds, alerting, and periodic reassessments to maintain security posture.',
    color: '#6b8f00',
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
              A structured, transparent process from initial contact to ongoing protection
            </p>
          </div>
        </Animate>

        <div style={{ position: 'relative' }} className="process-container">
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 56, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, var(--cyan), var(--green), #a16207, #dc2626, #6b8f00)',
            opacity: 0.3, zIndex: 0,
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
                    boxShadow: `0 0 20px ${step.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    background: `${step.color}10`,
                  }}>
                    <Icon size={28} color={step.color} strokeWidth={1.5} />
                  </div>

                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 11, color: step.color,
                    letterSpacing: 2, marginBottom: 8,
                  }}>
                    STEP {step.num}
                  </div>

                  <h3 style={{ fontFamily: 'var(--mono)', fontSize: 19, color: 'var(--text)', marginBottom: 12 }}>
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
