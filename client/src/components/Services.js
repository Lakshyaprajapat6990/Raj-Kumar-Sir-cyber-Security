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
    desc: 'We sit with your team, look at how you work today, and spot the risks that matter. Then we build a simple, realistic security plan that fits your business and any compliance you need.',
    tags: ['ISO 27001', 'NIST', 'Risk Analysis', 'Compliance'],
    color: '#6b8f00',
  },
  {
    Icon: Lock,
    title: 'IT Cryptography Expert',
    desc: 'Encryption should protect your data without slowing you down. I help set up PKI, key handling, and strong crypto so information stays safe whether it is stored or moving across the network.',
    tags: ['PKI', 'AES/RSA', 'Key Management', 'Encryption'],
    color: '#9cbc12',
  },
  {
    Icon: Sword,
    title: 'CEH - Certified Ethical Hacker / Penetration Testing',
    desc: 'I test your systems the way a real attacker would, with your permission. You get a clear report of what broke, why it matters, and exactly how to fix it.',
    tags: ['CEH', 'Pen Testing', 'OWASP', 'Metasploit'],
    color: '#dc2626',
  },
  {
    Icon: Cloud,
    title: 'IT Cloud Data Security',
    desc: 'Running on AWS, Azure, or GCP? I review your setup, tighten access, and close common cloud gaps so your workloads stay secure as you grow.',
    tags: ['AWS', 'Azure', 'GCP', 'Zero Trust', 'IAM'],
    color: '#15803d',
  },
  {
    Icon: Award,
    title: 'IT SSL/TLS Certificate Management',
    desc: 'Expired certificates cause outages and trust issues. I handle setup, renewals, and monitoring so your sites stay encrypted and online without last-minute surprises.',
    tags: ['SSL/TLS', 'PKI', 'Certificate Monitoring', 'HTTPS'],
    color: '#b6d92a',
  },
  {
    Icon: Terminal,
    title: 'IT Linux Server Hardening',
    desc: 'I lock down Linux servers using proven benchmarks: less open surface, stronger access control, and better visibility if something looks wrong.',
    tags: ['CIS Benchmark', 'SELinux', 'Firewall', 'IDS/IPS'],
    color: '#a16207',
  },
  {
    Icon: Network,
    title: 'IT Networking & Network Security (CCNA)',
    desc: 'Good network design keeps traffic flowing and unwanted guests out. I help with VLANs, VPNs, firewalls, and monitoring so your perimeter and internal network stay under control.',
    tags: ['CCNA', 'VPN', 'Firewall', 'IPS', 'VLAN'],
    color: '#6b8f00',
  },
  {
    Icon: Eye,
    title: 'IT Dark Web Monitoring & Threat Intelligence',
    desc: 'I watch dark web forums and leak sites for your company name, emails, and data. If something shows up, you hear about it early, while there is still time to act.',
    tags: ['OSINT', 'Threat Intel', 'Data Breach Detection', 'Tor'],
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
              Practical security help for real businesses, from first assessment to ongoing protection
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
