import React from 'react';
import {
  ShieldCheck, Lock, Sword, Cloud, Award, Terminal,
  Network, Eye,
} from 'lucide-react';
import Animate from './Animate';

const services = [
  {
    Icon: ShieldCheck,
    title: 'IT Cybersecurity Consulting & Risk Management',
    desc: 'Comprehensive security assessments, risk analysis, and strategic consulting to identify vulnerabilities before attackers do. Building robust security frameworks tailored to your business needs and compliance requirements.',
    tags: ['ISO 27001', 'NIST', 'Risk Analysis', 'Compliance'],
    color: '#6b8f00',
  },
  {
    Icon: Lock,
    title: 'IT Cryptography Expert',
    desc: 'Deep expertise in encryption algorithms, Public Key Infrastructure (PKI), and enterprise key management systems. Ensuring your data remains protected at rest and in transit with industry-grade cryptographic solutions.',
    tags: ['PKI', 'AES/RSA', 'Key Management', 'Encryption'],
    color: '#9cbc12',
  },
  {
    Icon: Sword,
    title: 'CEH - Certified Ethical Hacker / Penetration Testing',
    desc: 'Authorized penetration testing using real-world attacker techniques to expose security gaps. From network exploitation to web application attacks - comprehensive offensive security assessments with detailed remediation reports.',
    tags: ['CEH', 'Pen Testing', 'OWASP', 'Metasploit'],
    color: '#dc2626',
  },
  {
    Icon: Cloud,
    title: 'IT Cloud Data Security',
    desc: 'Specialized security architecture and auditing for AWS, Azure, and Google Cloud Platform environments. Implementing zero-trust policies, IAM hardening, and cloud-native security tools to protect your cloud infrastructure.',
    tags: ['AWS', 'Azure', 'GCP', 'Zero Trust', 'IAM'],
    color: '#15803d',
  },
  {
    Icon: Award,
    title: 'IT SSL/TLS Certificate Management',
    desc: 'End-to-end SSL/TLS lifecycle management including procurement, installation, renewal, and monitoring. Ensuring uninterrupted encryption and preventing certificate-related outages and man-in-the-middle vulnerabilities.',
    tags: ['SSL/TLS', 'PKI', 'Certificate Monitoring', 'HTTPS'],
    color: '#b6d92a',
  },
  {
    Icon: Terminal,
    title: 'IT Linux Server Hardening',
    desc: 'Systematic security hardening of Linux servers following CIS benchmarks and industry best practices. Reducing attack surface through kernel tuning, access controls, file integrity monitoring, and intrusion detection.',
    tags: ['CIS Benchmark', 'SELinux', 'Firewall', 'IDS/IPS'],
    color: '#a16207',
  },
  {
    Icon: Network,
    title: 'IT Networking & Network Security (CCNA)',
    desc: 'Advanced network architecture design with built-in security controls. Implementing VLANs, VPNs, firewall rules, and intrusion prevention systems to defend your network perimeter and internal traffic.',
    tags: ['CCNA', 'VPN', 'Firewall', 'IPS', 'VLAN'],
    color: '#6b8f00',
  },
  {
    Icon: Eye,
    title: 'IT Dark Web Monitoring & Threat Intelligence',
    desc: "Continuous surveillance of dark web forums, marketplaces, and leaked databases for your organization's sensitive data. Proactive threat intelligence to identify and neutralize threats before they materialize.",
    tags: ['OSINT', 'Threat Intel', 'Data Breach Detection', 'TOR'],
    color: '#3f5200',
  },
];

function ServiceCard({ svc }) {
  const { Icon } = svc;
  return (
    <div className="glow-card service-marquee-card">
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)`,
        opacity: 0.6,
      }} />

      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: `${svc.color}15`, border: `1px solid ${svc.color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 14,
        flexShrink: 0,
      }}>
        <Icon size={20} color={svc.color} strokeWidth={1.5} />
      </div>

      <h3 style={{
        fontFamily: 'var(--display)', fontSize: 17, fontWeight: 600,
        color: 'var(--text)', marginBottom: 10, lineHeight: 1.35,
      }}>
        {svc.title}
      </h3>

      <p style={{
        fontSize: 15, color: 'var(--muted)', lineHeight: 1.7,
        marginBottom: 16, flexGrow: 1,
      }}>
        {svc.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {svc.tags.map((tag, j) => (
          <span key={j} className="tag" style={{
            borderColor: `${svc.color}33`,
            color: svc.color,
            background: `${svc.color}0d`,
            fontSize: 12,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  // Duplicate set for seamless infinite loop
  const loop = [...services, ...services];

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg2)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 36 }}>
        <Animate type="fadeDown">
          <div className="section-header" style={{ marginBottom: 8 }}>
            <span className="section-label">What I Do</span>
            <h2 className="section-title">Core <span>Services</span></h2>
            <p className="section-subtitle">
              Comprehensive cybersecurity solutions protecting organizations from modern digital threats
            </p>
          </div>
        </Animate>
      </div>

      {/* Single-line marquee: floats left, then right */}
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-float">
          {loop.map((svc, i) => (
            <ServiceCard key={`svc-${i}`} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
