import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Shield } from 'lucide-react';

const links = [
  { to: 'services', label: 'Services' },
  { to: 'skills', label: 'Skills' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'darkweb', label: 'Dark Web' },
  { to: 'process', label: 'Process' },
  { to: 'why', label: 'Why Us' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(5,5,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
      transition: 'all 0.3s',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '100%', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <div style={{ fontFamily: 'var(--mono)', fontSize: 20, color: '#fff', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Shield size={20} color="var(--cyan)" />
          RAJKUMAR
          <span style={{ color: 'var(--green)', fontSize: 11, marginLeft: 4 }}>SEC</span>
        </div>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              spy smooth offset={-68} duration={600}
              style={{
                fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--muted)',
                cursor: 'pointer', transition: 'color 0.2s', letterSpacing: 0.5,
              }}
              activeStyle={{ color: 'var(--cyan)' }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </Link>
          ))}
          <Link to="contact" spy smooth offset={-68} duration={600}>
            <button className="btn-primary" style={{ padding: '9px 20px', fontSize: 12 }}>
              Get Free Consultation
            </button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'var(--cyan)', cursor: 'pointer', padding: 4,
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(5,5,8,0.98)', borderTop: '1px solid var(--border)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              spy smooth offset={-68} duration={600}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--text)', cursor: 'pointer' }}
            >
              &gt; {l.label}
            </Link>
          ))}
          <Link to="contact" spy smooth offset={-68} duration={600} onClick={() => setMenuOpen(false)}>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Get Free Consultation
            </button>
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
