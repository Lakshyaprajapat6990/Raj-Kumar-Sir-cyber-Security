import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';

const links = [
  { to: 'services', label: 'Services' },
  { to: 'rajcyber', label: 'rajcyber' },
  { to: 'digital', label: 'Digital' },
  { to: 'netsec', label: 'NetSec' },
  { to: 'skills', label: 'Skills' },
  { to: 'darkweb', label: 'Dark Web' },
  { to: 'why', label: 'Why Us' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 20px 0' : '20px 20px 0',
        transition: 'padding 0.3s ease',
      }}>
        <div
          className="nav-shell"
          style={{
            maxWidth: 1320,
            margin: '0 auto',
            height: scrolled ? 78 : 92,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            padding: '0 22px 0 16px',
            borderRadius: 20,
            border: scrolled
              ? '1px solid rgba(10, 12, 8, 0.1)'
              : '1px solid rgba(10, 12, 8, 0.06)',
            background: scrolled
              ? 'rgba(255, 255, 255, 0.92)'
              : 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: scrolled
              ? '0 14px 40px rgba(8, 12, 5, 0.1)'
              : '0 8px 28px rgba(8, 12, 5, 0.06)',
            transition: 'height 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
          }}
        >
          {/* Brand */}
          <Link
            to="hero"
            spy
            smooth
            offset={-110}
            duration={600}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              textDecoration: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <div style={{
              width: 54,
              height: 54,
              borderRadius: 15,
              background: 'linear-gradient(135deg, #d4f84a, #b6d92a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 18px rgba(182, 217, 42, 0.35)',
            }}>
              <Shield size={28} color="#0a0c08" strokeWidth={2} />
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{
                fontFamily: 'var(--display)',
                fontSize: 26,
                fontWeight: 700,
                color: 'var(--text)',
                letterSpacing: '-0.02em',
              }}>
                Rajkumar
              </div>
              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                SECcloud
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                spy
                smooth
                offset={-110}
                duration={600}
                onSetActive={() => setActive(l.to)}
                style={{
                  position: 'relative',
                  fontFamily: 'var(--sans)',
                  fontSize: 15,
                  fontWeight: active === l.to ? 600 : 500,
                  color: active === l.to ? 'var(--text)' : 'var(--muted)',
                  cursor: 'pointer',
                  padding: '10px 14px',
                  borderRadius: 10,
                  transition: 'color 0.2s, background 0.2s',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (active !== l.to) e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.background = 'rgba(212, 248, 74, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = active === l.to ? 'var(--text)' : 'var(--muted)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {l.label}
                {active === l.to && (
                  <span style={{
                    position: 'absolute',
                    left: 12,
                    right: 12,
                    bottom: 4,
                    height: 2,
                    borderRadius: 2,
                    background: 'var(--primary-hover)',
                  }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <Link to="contact" spy smooth offset={-110} duration={600}>
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--display)',
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#0a0c08',
                  background: 'var(--primary)',
                  padding: '13px 20px',
                  borderRadius: 14,
                  boxShadow: '0 8px 20px rgba(182, 217, 42, 0.35)',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-hover)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Free Consultation
                <ArrowUpRight size={15} strokeWidth={2.4} />
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              width: 48,
              height: 48,
              borderRadius: 14,
              border: '1px solid var(--border)',
              background: 'var(--bg3)',
              color: 'var(--text)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10, 12, 8, 0.28)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 120,
              left: 16,
              right: 16,
              background: '#fff',
              border: '1px solid var(--border)',
              borderRadius: 18,
              padding: 16,
              boxShadow: 'var(--shadow)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                spy
                smooth
                offset={-110}
                duration={600}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 17,
                  fontWeight: 500,
                  color: 'var(--text)',
                  padding: '14px 14px',
                  borderRadius: 12,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  background: active === l.to ? 'rgba(212, 248, 74, 0.22)' : 'transparent',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="contact"
              spy
              smooth
              offset={-110}
              duration={600}
              onClick={() => setMenuOpen(false)}
              style={{ marginTop: 8 }}
            >
              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', borderRadius: 12 }}
              >
                Free Consultation
                <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
