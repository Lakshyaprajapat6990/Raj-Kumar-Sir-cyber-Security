import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { adminLogin } from './adminApi';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const token = await adminLogin(password);
      localStorage.setItem('admin_token', token);
      navigate('/admin/dashboard');
    } catch {
      setError('Invalid password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }}>
      {/* Grid background */}
      <canvas id="grid-canvas" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        opacity: 0.04, pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '48px 40px', width: '100%', maxWidth: 420,
        boxShadow: '0 0 60px rgba(0,212,255,0.08)',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            border: '2px solid var(--cyan)',
            boxShadow: '0 0 24px rgba(0,212,255,0.3)',
            background: 'rgba(0,212,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <Shield size={28} color="var(--cyan)" strokeWidth={1.5} />
          </div>
          <h1 style={{ fontFamily: 'var(--mono)', fontSize: 20, color: '#fff', marginBottom: 6 }}>
            Admin Portal
          </h1>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: 2 }}>
            RAJKUMAR SEC // RESTRICTED ACCESS
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{
            fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)',
            display: 'block', marginBottom: 8, letterSpacing: 1,
          }}>
            ADMIN PASSWORD
          </label>
          <div style={{ position: 'relative', marginBottom: 20 }}>
            <div style={{
              position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
            }}>
              <Lock size={16} color="var(--muted)" />
            </div>
            <input
              type={showPw ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin password"
              required
              style={{
                width: '100%', background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${error ? '#ff6b6b' : 'var(--border)'}`,
                borderRadius: 8, color: 'var(--text)',
                fontFamily: 'var(--mono)', fontSize: 14,
                padding: '12px 44px', outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { if (!error) e.target.style.borderColor = 'var(--cyan)'; }}
              onBlur={e => { if (!error) e.target.style.borderColor = 'var(--border)'; }}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              style={{
                position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              {showPw
                ? <EyeOff size={16} color="var(--muted)" />
                : <Eye size={16} color="var(--muted)" />
              }
            </button>
          </div>

          {error && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,107,107,0.08)', border: '1px solid rgba(255,107,107,0.2)',
              borderRadius: 8, padding: '10px 14px', marginBottom: 20,
              fontSize: 13, color: '#ff6b6b',
            }}>
              <AlertCircle size={14} />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{
              width: '100%', justifyContent: 'center',
              fontSize: 14, padding: '13px',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </form>

        <p style={{
          textAlign: 'center', marginTop: 24,
          fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
        }}>
          &larr;{' '}
          <a href="/" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
            Back to website
          </a>
        </p>
      </div>
    </div>
  );
}
