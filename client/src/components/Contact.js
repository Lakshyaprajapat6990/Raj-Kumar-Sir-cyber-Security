import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, Loader, MessageCircle } from 'lucide-react';
import Animate from './Animate';

const WHATSAPP_NUMBER = '919424054049'; // country code + number, no spaces
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Rajkumar, I would like to discuss a cybersecurity requirement.')}`;


const serviceOptions = [
  'Cybersecurity Consulting & Risk Management',
  'Cryptography Expert (PKI & Key Management)',
  'CEH - Ethical Hacking & Penetration Testing',
  'Cloud Data Security (AWS, Azure, GCP)',
  'SSL/TLS Certificate Management',
  'Linux Server Hardening & Security',
  'Network Security & Defense (CCNA)',
  'Dark Web Monitoring & Threat Intelligence',
  'IT Maintenance Core Framework',
  'IT Infrastructure Delivery Matrix',
  'IT Implementation Best Practices',
  'IT Asset Management (ITAM) Lifecycle',
  'IT SLAs & OLAs Framework',
  'IT Documentation & Knowledge Management',
  'Other / General Inquiry',
];

const consultIncludes = [
  '30-minute 1-on-1 with Rajkumar',
  'Initial threat landscape review',
  'Top 3 security gaps identified',
  'Recommended engagement roadmap',
  'No sales pressure - pure value',
];

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'inforaj@cybersecuritycloudai.com', href: 'mailto:inforaj@cybersecuritycloudai.com' },
  { Icon: Phone, label: 'Phone', value: '+91 94240 54049', href: 'tel:+919424054049' },
  { Icon: MapPin, label: 'Location', value: 'India (Remote Worldwide)', href: null },
  { Icon: Clock, label: 'Response Time', value: 'Within 24 Hours', href: null },
];

const inputStyle = {
  width: '100%', background: 'var(--bg3)',
  border: '1px solid var(--border)', borderRadius: 8,
  color: 'var(--text)', fontFamily: 'var(--sans)', fontSize: 14,
  padding: '12px 16px', outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      toast.success("Message sent! I'll respond within 24 hours.");
      setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    } catch {
      toast.error('Failed to send. Please email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <Animate type="fadeDown">
          <div className="section-header">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact <span>Me</span></h2>
            <p className="section-subtitle">
              Start your free consultation or discuss your security needs
            </p>
          </div>
        </Animate>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48 }}
          className="contact-grid">

          {/* Left: Info */}
          <Animate type="fadeLeft" delay="0.15s">
          <div>
            {/* WhatsApp button */}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', marginBottom: 28 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(37,211,102,0.08)',
                border: '1px solid rgba(37,211,102,0.35)',
                borderRadius: 10, padding: '14px 20px',
                cursor: 'pointer', transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(37,211,102,0.2)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.35)'; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: '#25d366', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(37,211,102,0.4)',
                }}>
                  <MessageCircle size={22} color="#fff" fill="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: '#25d366', marginBottom: 2 }}>
                    Chat on WhatsApp
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                    +91 94240 54049 &nbsp;·&nbsp; Typically replies instantly
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#25d366', fontSize: 18 }}>→</div>
              </div>
            </a>

            <div style={{ marginBottom: 32 }}>
              {contactInfo.map(({ Icon, label, value, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 8,
                    background: 'rgba(212,248,74,0.08)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--cyan)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 2 }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} style={{ fontSize: 14, color: 'var(--cyan)', textDecoration: 'none' }}
                        onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.target.style.textDecoration = 'none'}>
                        {value}
                      </a>
                    ) : (
                      <div style={{ fontSize: 16, color: 'var(--text)' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Free consultation checklist */}
            <div style={{
              background: 'rgba(107,143,0,0.04)', border: '1px solid rgba(107,143,0,0.15)',
              borderRadius: 12, padding: 24,
            }}>
              <h4 style={{
                fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--green)',
                marginBottom: 16, letterSpacing: 1,
              }}>
                FREE CONSULTATION INCLUDES
              </h4>
              {consultIncludes.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontSize: 15, color: 'var(--text)', marginBottom: 10,
                }}>
                  <CheckCircle size={14} color="var(--green)" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          </Animate>

          {/* Right: Form */}
          <Animate type="fadeRight" delay="0.2s">
          <div className="glow-card">
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}
                className="form-row">
                <div>
                  <label style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>
                    Name *
                  </label>
                  <input style={inputStyle} name="name" value={form.name}
                    onChange={handleChange} placeholder="Your full name" required
                    onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>
                    Company
                  </label>
                  <input style={inputStyle} name="company" value={form.company}
                    onChange={handleChange} placeholder="Company name"
                    onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}
                className="form-row">
                <div>
                  <label style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>
                    Email *
                  </label>
                  <input style={inputStyle} type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="you@company.com" required
                    onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
                <div>
                  <label style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>
                    Phone
                  </label>
                  <input style={inputStyle} name="phone" value={form.phone}
                    onChange={handleChange} placeholder="+91 98765 43210"
                    onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>
                  Service Required *
                </label>
                <select style={{ ...inputStyle, cursor: 'pointer' }}
                  name="service" value={form.service} onChange={handleChange} required
                  onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt} style={{ background: '#ffffff' }}>{opt}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 14, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>
                  Message *
                </label>
                <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Describe your security needs, current challenges, or what you'd like to discuss..."
                  required
                  onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>

              <button type="submit" className="btn-primary" disabled={loading}
                style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '14px', opacity: loading ? 0.7 : 1 }}>
                {loading
                  ? <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                  : <><Send size={16} /> Send Message</>
                }
              </button>
            </form>
          </div>
          </Animate>
        </div>
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
