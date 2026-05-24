import React from 'react';
import {
  ShieldCheck, Lock, Sword, Cloud, Award, Terminal,
  Network, Eye,
} from 'lucide-react';
import Animate from './Animate';

const services = [
  {
    Icon: ShieldCheck,
    title: 'Cybersecurity Consulting & Risk Management',
    desc: 'Comprehensive security assessments, risk analysis, and strategic consulting to identify vulnerabilities before attackers do. Building robust security frameworks tailored to your business needs and compliance requirements.',
    tags: ['ISO 27001', 'NIST', 'Risk Analysis', 'Compliance'],
    color: '#00d4ff',
  },
  {
    Icon: Lock,
    title: 'Cryptography Expert',
    desc: 'Deep expertise in encryption algorithms, Public Key Infrastructure (PKI), and enterprise key management systems. Ensuring your data remains protected at rest and in transit with industry-grade cryptographic solutions.',
    tags: ['PKI', 'AES/RSA', 'Key Management', 'Encryption'],
    color: '#00ff88',
  },
  {
    Icon: Sword,
    title: 'CEH — Certified Ethical Hacking',
    desc: 'Authorized penetration testing using real-world attacker techniques to expose security gaps. From network exploitation to web application attacks — comprehensive offensive security assessments with detailed remediation reports.',
    tags: ['CEH', 'Pen Testing', 'OWASP', 'Metasploit'],
    color: '#ff6b6b',
  },
  {
    Icon: Cloud,
    title: 'Cloud Data Security',
    desc: 'Specialized security architecture and auditing for AWS, Azure, and Google Cloud Platform environments. Implementing zero-trust policies, IAM hardening, and cloud-native security tools to protect your cloud infrastructure.',
    tags: ['AWS', 'Azure', 'GCP', 'Zero Trust', 'IAM'],
    color: '#00d4ff',
  },
  {
    Icon: Award,
    title: 'SSL/TLS Certificate Management',
    desc: 'End-to-end SSL/TLS lifecycle management including procurement, installation, renewal, and monitoring. Ensuring uninterrupted encryption and preventing certificate-related outages and man-in-the-middle vulnerabilities.',
    tags: ['SSL/TLS', 'PKI', 'Certificate Monitoring', 'HTTPS'],
    color: '#00ff88',
  },
  {
    Icon: Terminal,
    title: 'Linux Server Hardening',
    desc: 'Systematic security hardening of Linux servers following CIS benchmarks and industry best practices. Reducing attack surface through kernel tuning, access controls, file integrity monitoring, and intrusion detection.',
    tags: ['CIS Benchmark', 'SELinux', 'Firewall', 'IDS/IPS'],
    color: '#ff6b6b',
  },
  {
    Icon: Network,
    title: 'CCNA Networking & Network Security',
    desc: 'Advanced network architecture design with built-in security controls. Implementing VLANs, VPNs, firewall rules, and intrusion prevention systems to defend your network perimeter and internal traffic.',
    tags: ['CCNA', 'VPN', 'Firewall', 'IPS', 'VLAN'],
    color: '#00d4ff',
  },
  {
    Icon: Eye,
    title: 'Dark Web Monitoring & Threat Intelligence',
    desc: "Continuous surveillance of dark web forums, marketplaces, and leaked databases for your organization's sensitive data. Proactive threat intelligence to identify and neutralize threats before they materialize.",
    tags: ['OSINT', 'Threat Intel', 'Data Breach Detection', 'TOR'],
    color: '#9b59b6',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <Animate type="fadeDown">
          <div className="section-header">
            <span className="section-label">// what_i_do</span>
            <h2 className="section-title">Core <span>Services</span></h2>
            <p className="section-subtitle">
              Comprehensive cybersecurity solutions protecting organizations from modern digital threats
            </p>
          </div>
        </Animate>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {services.map((svc, i) => {
            const { Icon } = svc;
            const directions = ['fadeLeft', 'fadeUp', 'fadeRight', 'fadeLeft', 'fadeUp', 'fadeRight', 'fadeLeft', 'fadeUp'];
            return (
              <Animate key={i} type={directions[i % directions.length]} delay={`${(i % 4) * 0.12}s`}>
              <div className="glow-card service-card" style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)`,
                  opacity: 0.6,
                }} />

                <div style={{
                  width: 48, height: 48, borderRadius: 10,
                  background: `${svc.color}15`, border: `1px solid ${svc.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Icon size={22} color={svc.color} strokeWidth={1.5} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--mono)', fontSize: 17, color: '#fff',
                  marginBottom: 12, lineHeight: 1.4,
                }}>
                  {svc.title}
                </h3>

                <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                  {svc.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {svc.tags.map((tag, j) => (
                    <span key={j} className="tag" style={{
                      borderColor: `${svc.color}33`,
                      color: svc.color,
                      background: `${svc.color}0d`,
                    }}>
                      {tag}
                    </span>
                  ))}
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
