import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    axios.get('/api/testimonials')
      .then(r => setTestimonials(r.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (testimonials.length < 2) return;
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [testimonials]);

  const prev = () => {
    clearInterval(intervalRef.current);
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    clearInterval(intervalRef.current);
    setCurrent(c => (c + 1) % testimonials.length);
  };

  if (loading) return null;
  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">What Clients <span>Say</span></h2>
          <p className="section-subtitle">
            Words from people who trusted me with their security
          </p>
        </div>

        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>
          {/* Quote icon */}
          <div style={{
            position: 'absolute', top: -20, left: 32,
            width: 52, height: 52, borderRadius: '50%',
            background: 'rgba(212,248,74,0.08)', border: '1px solid rgba(212,248,74,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2,
          }}>
            <Quote size={22} color="var(--cyan)" strokeWidth={1.5} />
          </div>

          {/* Card */}
          <div className="glow-card" style={{
            paddingTop: 48, textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(212,248,74,0.03), rgba(107,143,0,0.02))',
            minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
              {[1, 2, 3, 4, 5].map(n => (
                <Star key={n} size={18} color="#a16207"
                  fill={n <= (t.rating || 5) ? '#a16207' : 'none'} />
              ))}
            </div>

            {/* Message */}
            <p style={{
              fontSize: 17, color: 'var(--text)', lineHeight: 1.8,
              fontStyle: 'italic', marginBottom: 32,
              maxWidth: 620, margin: '0 auto 32px',
            }}>
              "{t.message}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(212,248,74,0.1)', border: '1px solid rgba(212,248,74,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--cyan)',
              }}>
                {t.name.charAt(0).toUpperCase()}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--text)' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                  {t.role}{t.company ? ` · ${t.company}` : ''}
                </div>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          {testimonials.length > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 28 }}>
              <button onClick={prev} style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--card)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--muted)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {testimonials.map((_, i) => (
                  <div key={i} onClick={() => { clearInterval(intervalRef.current); setCurrent(i); }} style={{
                    width: i === current ? 20 : 8, height: 8, borderRadius: 4,
                    background: i === current ? 'var(--cyan)' : 'rgba(10,12,8,0.12)',
                    cursor: 'pointer', transition: 'all 0.3s',
                    boxShadow: i === current ? '0 0 8px rgba(212,248,74,0.5)' : 'none',
                  }} />
                ))}
              </div>

              <button onClick={next} style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--card)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--muted)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
