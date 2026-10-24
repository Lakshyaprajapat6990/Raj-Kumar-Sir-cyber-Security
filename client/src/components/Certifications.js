import React from 'react';
import { Sword, Network, Terminal, ShieldCheck, Cloud, Lock } from 'lucide-react';
import Animate from './Animate';

const certs = [
  {
    Icon: Sword,
    code: 'CEH',
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    color: '#dc2626',
    desc: 'Globally recognized credential for penetration testing and ethical hacking methodologies.',
  },
  {
    Icon: Network,
    code: 'CCNA',
    title: 'Cisco Certified Network Associate',
    issuer: 'Cisco Systems',
    color: '#d4f84a',
    desc: 'Validates networking fundamentals, security, automation, and programmability skills.',
  },
  {
    Icon: Terminal,
    code: 'Linux+',
    title: 'Linux Server Security',
    issuer: 'CompTIA / LPIC',
    color: '#6b8f00',
    desc: 'Expert-level Linux administration, hardening, and server security configuration.',
  },
  {
    Icon: ShieldCheck,
    code: 'SSL Expert',
    title: 'SSL/TLS Security Specialist',
    issuer: 'DigiCert / Sectigo',
    color: '#a16207',
    desc: 'Proficiency in certificate lifecycle management, PKI infrastructure, and TLS protocols.',
  },
  {
    Icon: Cloud,
    code: 'CloudSec',
    title: 'Cloud Security Professional',
    issuer: 'AWS / Azure / GCP',
    color: '#6b8f00',
    desc: 'Multi-cloud security architecture, compliance, and threat detection across major platforms.',
  },
  {
    Icon: Lock,
    code: 'Crypto',
    title: 'Cryptography Specialist',
    issuer: 'ISCÂ² / SANS',
    color: '#d4f84a',
    desc: 'Advanced knowledge of cryptographic protocols, algorithms, and key management systems.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <Animate type="fadeDown">
          <div className="section-header">
            <span className="section-label">Credentials</span>
            <h2 className="section-title">Certifications <span>&amp; Credentials</span></h2>
            <p className="section-subtitle">
              Credentials that match the work I do every day
            </p>
          </div>
        </Animate>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {certs.map((cert, i) => {
            const { Icon } = cert;
            return (
              <Animate key={i} type="zoomIn" delay={`${i * 0.1}s`}>
              <div className="glow-card" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', height: '100%' }}>
                {/* Badge ring */}
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  border: `2px solid ${cert.color}`,
                  boxShadow: `0 0 20px ${cert.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  background: `${cert.color}10`,
                }}>
                  <Icon size={32} color={cert.color} strokeWidth={1.5} />
                </div>

                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: 3,
                  color: cert.color, marginBottom: 8,
                }}>
                  {cert.code}
                </div>

                <h3 style={{ fontFamily: 'var(--mono)', fontSize: 17, color: 'var(--text)', marginBottom: 6 }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 12 }}>
                  Issued by {cert.issuer}
                </div>

                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                  {cert.desc}
                </p>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  marginTop: 16, background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`, borderRadius: 12,
                  padding: '4px 12px',
                }}>
                  <ShieldCheck size={11} color={cert.color} />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: cert.color }}>VERIFIED</span>
                </div>
              </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}
