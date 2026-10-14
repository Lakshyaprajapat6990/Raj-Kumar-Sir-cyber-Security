import React, { useEffect, useRef, useState } from 'react';
import { Globe, AlertTriangle, Eye, ChevronRight } from 'lucide-react';
import Animate from './Animate';

const terminalLines = [
  { text: '$ initiating_darkweb_scan --target=your_domain.com', delay: 0, color: '#d4f84a' },
  { text: '> Connecting to TOR network... [DONE]', delay: 600, color: '#6b8f00' },
  { text: '> Scanning .onion forums & marketplaces...', delay: 1200, color: '#eef0ea' },
  { text: '> Checking paste sites (Pastebin, Ghostbin)...', delay: 1800, color: '#eef0ea' },
  { text: '> Monitoring leaked credential databases...', delay: 2400, color: '#eef0ea' },
  { text: '> Cross-referencing threat actor profiles...', delay: 3000, color: '#eef0ea' },
  { text: '[ALERT] Credential exposure detected on darknet forum', delay: 3600, color: '#dc2626' },
  { text: '[INFO]  2 email addresses found in breach data', delay: 4000, color: '#a16207' },
  { text: '> Generating threat intelligence report...', delay: 4400, color: '#eef0ea' },
  { text: '[ OK ]  Report ready. Initiating remediation protocol.', delay: 5000, color: '#6b8f00' },
];

const services = [
  'Continuous .onion site & forum monitoring',
  'Leaked credentials & data breach detection',
  'Threat actor tracking & profiling',
  'Paste site surveillance (Pastebin, Ghostbin)',
  'Dark web marketplace monitoring',
  'Stolen credit card & PII detection',
  'Ransomware group intelligence feeds',
  'Brand impersonation & phishing kit tracking',
];

export default function DarkWeb() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [shownLines, setShownLines] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    terminalLines.forEach((line) => {
      setTimeout(() => {
        setShownLines(prev => [...prev, line]);
      }, line.delay);
    });
  }, [visible]);

  return (
    <section id="darkweb" ref={ref} style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, var(--bg) 0%, #eef0ea 100%)',
    }}>
      <div className="container">
        <Animate type="fadeDown">
          <div className="section-header">
            <span className="section-label">Dark Web Intel</span>
            <h2 className="section-title">Dark Web <span>Monitoring</span></h2>
            <p className="section-subtitle">
              Proactive threat intelligence from the depths of the internet's hidden layers
            </p>
          </div>
        </Animate>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}
          className="darkweb-grid">

          {/* Left: Explanation */}
          <Animate type="fadeLeft" delay="0.1s">
          <div>
            <div style={{
              background: 'rgba(107,143,0,0.06)', border: '1px solid rgba(107,143,0,0.2)',
              borderRadius: 12, padding: 28, marginBottom: 28,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Globe size={18} color="#6b8f00" strokeWidth={1.5} />
                <h3 style={{ fontFamily: 'var(--mono)', color: '#6b8f00', fontSize: 16 }}>
                  What is the Dark Web?
                </h3>
              </div>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
                The Dark Web is an encrypted overlay network accessible only through specialized software
                like TOR. It hosts anonymous marketplaces, forums, and communication channels - and is
                where cybercriminals trade stolen data, sell exploit kits, and coordinate attacks
                against organizations.
              </p>
            </div>

            <div style={{
              background: 'rgba(220,38,38,0.05)', border: '1px solid rgba(220,38,38,0.15)',
              borderRadius: 12, padding: 28, marginBottom: 28,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <AlertTriangle size={18} color="#dc2626" strokeWidth={1.5} />
                <h3 style={{ fontFamily: 'var(--mono)', color: '#dc2626', fontSize: 16 }}>
                  How Threats Originate
                </h3>
              </div>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
                Breached credentials, leaked intellectual property, and exposed PII appear on dark web
                forums often before organizations are even aware. Ransomware groups leak victim data,
                phishing kits get sold, and insider threats sell access - all in the dark.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Eye size={18} color="var(--cyan)" strokeWidth={1.5} />
              <h3 style={{ fontFamily: 'var(--mono)', color: 'var(--cyan)', fontSize: 15 }}>
                Our Monitoring Services
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {services.map((svc, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: 'var(--text)' }}>
                  <ChevronRight size={14} color="var(--green)" />
                  {svc}
                </div>
              ))}
            </div>
          </div>
          </Animate>

          {/* Right: Terminal */}
          <Animate type="fadeRight" delay="0.2s">
          <div style={{
            background: '#0a0c08',
            border: '1px solid rgba(212,248,74,0.2)',
            borderRadius: 12, overflow: 'hidden',
            boxShadow: '0 0 40px rgba(212,248,74,0.05)',
          }}>
            {/* Terminal header */}
            <div style={{
              background: '#141814', padding: '12px 20px',
              display: 'flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid rgba(212,248,74,0.1)',
            }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28ca41' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginLeft: 8 }}>
                darkweb_scanner v2.4.1 - TOR Active
              </span>
              <span style={{
                marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%',
                background: 'var(--green)', boxShadow: '0 0 6px var(--green)',
                animation: 'pulse 2s infinite',
              }} />
            </div>

            {/* Terminal body */}
            <div style={{
              padding: '20px', fontFamily: 'var(--mono)', fontSize: 14,
              minHeight: 340, lineHeight: 2.1,
            }}>
              {shownLines.map((line, i) => (
                <div key={i} style={{ color: line.color }}>{line.text}</div>
              ))}
              {visible && shownLines.length < terminalLines.length && (
                <span style={{
                  display: 'inline-block', width: 8, height: 14,
                  background: 'var(--cyan)', animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle',
                }} />
              )}
            </div>
          </div>
          </Animate>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) {
          .darkweb-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
