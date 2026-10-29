import React from 'react';
import { Link } from 'react-scroll';
import {
  Monitor, RefreshCw, Boxes, Cloud, Globe2, Database,
  GraduationCap, Plug, ArrowUpCircle, Server, Users, Headphones,
  BarChart3, Shield, Cpu, Ship, ArrowRight,
} from 'lucide-react';
import Animate from './Animate';

const featured = [
  {
    Icon: Monitor,
    title: 'Desktop-as-a-Service',
    desc: 'With rajcyber DaaS, your team gets secure cloud desktops and apps without heavy local setup. You pay for what you use, and people can work from almost anywhere.',
  },
  {
    Icon: RefreshCw,
    title: 'Business Resiliency Services',
    desc: 'rajcyber helps you plan for the bad day before it happens: risk checks, DR design, and hands-on recovery setup so the business can keep moving.',
  },
  {
    Icon: Boxes,
    title: 'rajcyber CloudInfinit Kubernetes Service (CKS)',
    desc: 'Your developers stay focused on building. rajcyber handles the Kubernetes cluster, security, scaling, and recovery so day-to-day ops feel lighter.',
  },
];

const cloudOfferings = [
  {
    Icon: Cloud,
    title: 'Hosted Private Cloud',
    desc: 'rajcyber CloudInfinit gives you a private cloud stack you can shape: compute, network, storage, security, VDI, backup, and DR, ready to use and billed as you grow.',
  },
  {
    Icon: Globe2,
    title: 'Managed Public Cloud',
    desc: 'Run demanding apps on shared cloud capacity that still feels under your control. Scale up when you need to, with clear service commitments behind it.',
  },
  {
    Icon: Database,
    title: 'Smart SAP Grid',
    desc: 'Move SAP to the cloud with room to grow and costs you can track. We also help with day-to-day SAP Basis and functional support when you need it.',
  },
];

const gpuCards = [
  {
    title: 'GPU VPI',
    desc: 'Virtual GPUs for analytics and AI inference, with flexible capacity so you are not stuck paying for idle machines.',
  },
  {
    title: 'GPU VPE',
    desc: 'Stronger GPU setups for training, rendering, and heavy compute work when virtual instances are not enough.',
  },
  {
    title: 'GPU EBM',
    desc: 'Dedicated bare-metal GPUs when you need full performance, isolation, and steady response times.',
  },
];

const digitalServices = [
  { Icon: GraduationCap, title: 'LMS setup and branding', desc: 'We get your learning platform live and looking like your brand' },
  { Icon: Plug, title: 'System integration', desc: 'Connect LMS with HR, CRM, and the tools your team already uses' },
  { Icon: ArrowUpCircle, title: 'Migrations and upgrades', desc: 'Move platforms with as little downtime and stress as possible' },
  { Icon: Server, title: 'Hosting and infrastructure', desc: 'Keep the platform stable, secure, and available' },
  { Icon: Users, title: 'Day-to-day administration', desc: 'Users, courses, catalogs, and routine updates handled for you' },
  { Icon: Headphones, title: 'Technical support', desc: 'Help for learners and admins when something gets stuck' },
  { Icon: BarChart3, title: 'Performance and analytics', desc: 'Useful reports and dashboards so you can see what is working' },
];

const securityNodes = [
  'Web content filtering',
  'Intrusion detection and prevention',
  'Firewall with deep packet inspection',
  'Multi-factor VPN authentication',
  'Gateway antivirus software',
];

const regions = [
  'Sudan', 'Central Africa', 'Guinea', 'Zambia', 'Yemen',
  'Mauritius', 'India', 'Bhutan', 'Vietnam', 'Myanmar', 'Cambodia',
];

const KnowMore = () => (
  <Link
    to="contact"
    spy
    smooth
    offset={-110}
    duration={600}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 16,
      fontFamily: 'var(--display)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--accent)',
      cursor: 'pointer',
      textDecoration: 'none',
    }}
  >
    Know More <ArrowRight size={14} />
  </Link>
);

export default function RajCyberOfferings({ part = 'all' }) {
  const showCloud = part === 'all' || part === 'cloud';
  const showMore = part === 'all' || part === 'more';

  return (
    <>
      {/* ── Cloud & Resiliency ── */}
      {showCloud && (
      <section id="rajcyber" style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div className="container">
          <Animate type="fadeDown">
            <div className="section-header">
              <span className="section-label">rajcyber offerings</span>
              <h2 className="section-title">Cloud & <span>Resiliency</span></h2>
              <p className="section-subtitle">
                Cloud, Kubernetes, and recovery services from rajcyber, explained in plain language
              </p>
            </div>
          </Animate>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginBottom: 56,
          }} className="rajcyber-3col">
            {featured.map((item, i) => {
              const { Icon } = item;
              return (
                <Animate key={i} type="fadeUp" delay={`${i * 0.1}s`}>
                  <div className="glow-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: 'rgba(212,248,74,0.2)',
                      border: '1px solid rgba(107,143,0,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 18,
                    }}>
                      <Icon size={24} color="var(--accent)" strokeWidth={1.6} />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--display)', fontSize: 18, fontWeight: 700,
                      color: 'var(--text)', marginBottom: 12, lineHeight: 1.35,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, flexGrow: 1 }}>
                      {item.desc}
                    </p>
                    <KnowMore />
                  </div>
                </Animate>
              );
            })}
          </div>

          <Animate type="fadeDown">
            <h3 style={{
              fontFamily: 'var(--display)', fontSize: 28, fontWeight: 700,
              color: 'var(--text)', marginBottom: 28, textAlign: 'center',
            }}>
              Our Service Offerings
            </h3>
          </Animate>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28,
          }} className="rajcyber-3col">
            {gpuCards.map((g, i) => (
              <Animate key={i} type="fadeUp" delay={`${i * 0.08}s`}>
                <div style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: 22,
                  boxShadow: 'var(--shadow)',
                  height: '100%',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <Cpu size={18} color="var(--accent)" />
                    <h4 style={{ fontFamily: 'var(--display)', fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                      {g.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{g.desc}</p>
                </div>
              </Animate>
            ))}
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
          }} className="rajcyber-3col">
            {cloudOfferings.map((item, i) => {
              const { Icon } = item;
              return (
                <Animate key={i} type="fadeUp" delay={`${i * 0.1}s`}>
                  <div style={{ height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: 'rgba(212,248,74,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={22} color="var(--accent)" strokeWidth={1.6} />
                      </div>
                      <h4 style={{
                        fontFamily: 'var(--display)', fontSize: 17, fontWeight: 700, color: 'var(--text)',
                      }}>
                        {item.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* ── Digital Services ── */}
      {showMore && (
      <>
      <section id="digital" style={{ padding: '100px 0', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: 36 }}>
          <Animate type="fadeDown">
            <div className="section-header" style={{ marginBottom: 8 }}>
              <span className="section-label">platforms & learning</span>
              <h2 className="section-title">Digital Services | <span>rajcyber</span> Technologies</h2>
              <p className="section-subtitle">
                From first setup to everyday support, so your platforms keep running smoothly
              </p>
            </div>
          </Animate>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track marquee-float">
            {[...digitalServices, ...digitalServices].map((s, i) => {
              const { Icon } = s;
              return (
                <div key={`digital-${i}`} className="glow-card marquee-card">
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(212,248,74,0.18)',
                    border: '1px solid rgba(107,143,0,0.28)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color="var(--accent)" strokeWidth={1.6} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--display)', fontSize: 17, fontWeight: 700,
                    color: 'var(--text)', marginBottom: 10, lineHeight: 1.35,
                  }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, flexGrow: 1 }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CloudInfinit + AI ── */}
      <section id="cloudai" style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center',
          }} className="rajcyber-2col">
            <Animate type="fadeLeft">
              <div>
                <span className="section-label">sovereign AI cloud</span>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 18 }}>
                  Intelligence, Scalability &amp; <span>Resilience</span>
                </h2>
                <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20, maxWidth: 560 }}>
                  AI infrastructure that stays under your control, scales when you need it, and does not
                  fall over under pressure.
                </p>
                <p style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.8, maxWidth: 560 }}>
                  <strong style={{ color: 'var(--accent)' }}>rajcyber CloudInfinit+AI</strong> gives teams
                  GPU power and a solid place to build, without handing over security or data control.
                </p>
                <KnowMore />
              </div>
            </Animate>

            <Animate type="fadeRight">
              <div className="glow-card" style={{
                background: 'linear-gradient(160deg, #fff 0%, #f7f8f4 100%)',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
                }}>
                  <Ship size={22} color="var(--accent)" />
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
                    BRaaS Business Resiliency-as-a-Service
                  </h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    'Infinit-Compute', 'Infinit-Storage', 'Infinit-Network', 'PaaS',
                    'CMP', 'DaaS', 'Infinit-Security', 'BaaS', 'Infinit-Containers',
                  ].map((label) => (
                    <div key={label} style={{
                      padding: '12px 14px',
                      borderRadius: 10,
                      background: 'rgba(212,248,74,0.14)',
                      border: '1px solid rgba(107,143,0,0.22)',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--text)',
                      fontFamily: 'var(--sans)',
                    }}>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Network Security ── */}
      <section id="netsec" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'start',
          }} className="rajcyber-2col">
            <Animate type="fadeLeft">
              <div>
                <span className="section-label">managed security</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  Advanced Network <span>Security</span>
                </h2>
                <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 18, maxWidth: 560 }}>
                  Networks change fast, and attackers keep trying new tricks. A static firewall setup
                  from last year is rarely enough on its own.
                </p>
                <p style={{ fontSize: 16, color: 'var(--text)', lineHeight: 1.8, maxWidth: 560 }}>
                  <strong style={{ color: 'var(--accent)' }}>rajcyber&apos;s</strong> managed network
                  security brings the people, tools, and monitoring together so offices, data centres,
                  and cloud networks stay protected as one picture.
                </p>
              </div>
            </Animate>

            <Animate type="fadeRight">
              <div className="glow-card">
                <p style={{
                  fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20,
                }}>
                  Helping manage 5,000+ firewalls across client sites,{' '}
                  <strong style={{ color: 'var(--accent)' }}>rajcyber</strong> data centres, and major public clouds
                </p>
                <h4 style={{
                  fontFamily: 'var(--display)', fontSize: 16, fontWeight: 700,
                  color: 'var(--text)', marginBottom: 16, textAlign: 'center',
                }}>
                  One view of network security
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {securityNodes.map((n) => (
                    <div key={n} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '12px 14px',
                      borderRadius: 10,
                      background: 'rgba(212,248,74,0.12)',
                      border: '1px solid rgba(107,143,0,0.2)',
                      fontSize: 14,
                      color: 'var(--text)',
                      fontWeight: 500,
                    }}>
                      <Shield size={16} color="var(--accent)" />
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── Global Presence ── */}
      <section id="presence" style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div className="container">
          <Animate type="fadeDown">
            <div className="section-header">
              <span className="section-label">global reach</span>
              <h2 className="section-title">rajcyber <span>Presence</span></h2>
              <p className="section-subtitle">
                Teams and partners across Africa, the Middle East, and Asia
              </p>
            </div>
          </Animate>

          <Animate type="fadeUp">
            <div style={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 900, margin: '0 auto',
            }}>
              {regions.map((r) => (
                <div key={r} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 16px',
                  borderRadius: 999,
                  background: '#fff',
                  border: '1px solid var(--border)',
                  boxShadow: '0 6px 18px rgba(8,12,5,0.05)',
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--text)',
                }}>
                  <span style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'var(--primary-hover)',
                    boxShadow: '0 0 8px rgba(182,217,42,0.5)',
                  }} />
                  {r}
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>
      </>
      )}

      <style>{`
        @media (max-width: 900px) {
          .rajcyber-3col { grid-template-columns: 1fr !important; }
          .rajcyber-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
