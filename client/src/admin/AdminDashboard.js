import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, LogOut, Mail, Star, Trash2, Eye,
  CheckCircle, MessageSquare, Plus, ChevronDown,
  RefreshCw, Users, ToggleLeft, ToggleRight,
} from 'lucide-react';
import {
  getContacts, updateContactStatus, deleteContact,
  getAllTestimonials, addTestimonial, toggleTestimonialVisibility, deleteTestimonial,
} from './adminApi';

// ─── Shared styles ───────────────────────────────────────────────────────────
const card = {
  background: 'var(--card)', border: '1px solid var(--border)',
  borderRadius: 12, padding: 24,
};

const statusColors = { new: '#00d4ff', read: '#f39c12', replied: '#00ff88' };
const statusIcons = {
  new: <Mail size={12} />,
  read: <Eye size={12} />,
  replied: <CheckCircle size={12} />,
};

// ─── Contacts Tab ─────────────────────────────────────────────────────────────
function ContactsTab() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try { setContacts(await getContacts(filter)); } catch {}
    setLoading(false);
  }, [filter]);

  useEffect(() => { load(); }, [load]);

  const handleStatus = async (id, status) => {
    await updateContactStatus(id, status);
    setContacts(prev => prev.map(c => c._id === id ? { ...c, status } : c));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this inquiry?')) return;
    await deleteContact(id);
    setContacts(prev => prev.filter(c => c._id !== id));
  };

  const counts = { all: contacts.length };
  ['new', 'read', 'replied'].forEach(s => {
    counts[s] = contacts.filter(c => c.status === s).length;
  });

  return (
    <div>
      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
        {[
          { label: 'Total', key: 'all', color: 'var(--cyan)' },
          { label: 'New', key: 'new', color: '#00d4ff' },
          { label: 'Read', key: 'read', color: '#f39c12' },
          { label: 'Replied', key: 'replied', color: '#00ff88' },
        ].map(({ label, key, color }) => (
          <div key={key} style={{ ...card, textAlign: 'center', cursor: 'pointer',
            border: filter === key ? `1px solid ${color}` : '1px solid var(--border)',
            boxShadow: filter === key ? `0 0 16px ${color}20` : 'none',
          }} onClick={() => setFilter(key)}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 28, color }}>{counts[key] ?? 0}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>FILTER:</span>
        {['all', 'new', 'read', 'replied'].map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{
            background: filter === s ? `${statusColors[s] || 'var(--cyan)'}20` : 'transparent',
            border: `1px solid ${filter === s ? statusColors[s] || 'var(--cyan)' : 'var(--border)'}`,
            color: filter === s ? statusColors[s] || 'var(--cyan)' : 'var(--muted)',
            fontFamily: 'var(--mono)', fontSize: 11, padding: '5px 14px',
            borderRadius: 20, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1,
          }}>
            {s}
          </button>
        ))}
        <button onClick={load} style={{
          marginLeft: 'auto', background: 'none', border: '1px solid var(--border)',
          borderRadius: 8, padding: '6px 12px', cursor: 'pointer', color: 'var(--muted)',
          display: 'flex', alignItems: 'center', gap: 6, fontSize: 12,
        }}>
          <RefreshCw size={13} /> Refresh
        </button>
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: 60, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          Loading...
        </div>
      ) : contacts.length === 0 ? (
        <div style={{ ...card, textAlign: 'center', padding: 60, color: 'var(--muted)' }}>
          <Mail size={36} strokeWidth={1} style={{ marginBottom: 12, opacity: 0.3 }} />
          <p style={{ fontFamily: 'var(--mono)' }}>No inquiries found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {contacts.map(c => (
            <div key={c._id} style={{
              ...card, padding: 0, overflow: 'hidden',
              borderColor: expanded === c._id ? statusColors[c.status] : 'var(--border)',
            }}>
              {/* Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1.5fr 140px 120px 100px',
                alignItems: 'center', gap: 16, padding: '16px 20px', cursor: 'pointer',
              }} onClick={() => setExpanded(expanded === c._id ? null : c._id)}>
                <div>
                  <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{c.company || '—'}</div>
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{c.email}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {c.service}
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                  {new Date(c.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
                {/* Status badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: `${statusColors[c.status]}15`,
                  border: `1px solid ${statusColors[c.status]}40`,
                  color: statusColors[c.status],
                  fontFamily: 'var(--mono)', fontSize: 11, padding: '4px 10px',
                  borderRadius: 12, width: 'fit-content',
                }}>
                  {statusIcons[c.status]} {c.status.toUpperCase()}
                </div>
                <ChevronDown size={16} color="var(--muted)"
                  style={{ transform: expanded === c._id ? 'rotate(180deg)' : 'none', transition: '0.2s', justifySelf: 'end' }} />
              </div>

              {/* Expanded detail */}
              {expanded === c._id && (
                <div style={{
                  borderTop: '1px solid var(--border)', padding: '20px',
                  background: 'rgba(0,0,0,0.2)',
                }}>
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 6 }}>MESSAGE</div>
                    <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{c.message}</p>
                  </div>
                  {c.phone && (
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 4 }}>PHONE</div>
                      <div style={{ fontSize: 14, color: 'var(--text)' }}>{c.phone}</div>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {['new', 'read', 'replied'].map(s => (
                      <button key={s} onClick={() => handleStatus(c._id, s)} style={{
                        background: c.status === s ? `${statusColors[s]}20` : 'transparent',
                        border: `1px solid ${statusColors[s]}`,
                        color: statusColors[s],
                        fontFamily: 'var(--mono)', fontSize: 11, padding: '6px 14px',
                        borderRadius: 6, cursor: 'pointer', textTransform: 'uppercase',
                      }}>
                        Mark {s}
                      </button>
                    ))}
                    <button onClick={() => handleDelete(c._id)} style={{
                      marginLeft: 'auto', background: 'rgba(255,107,107,0.08)',
                      border: '1px solid rgba(255,107,107,0.3)', color: '#ff6b6b',
                      fontFamily: 'var(--mono)', fontSize: 11, padding: '6px 14px',
                      borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Testimonials Tab ─────────────────────────────────────────────────────────
function TestimonialsTab() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', company: '', message: '', rating: 5 });
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    try { setTestimonials(await getAllTestimonials()); } catch {}
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleAdd = async e => {
    e.preventDefault();
    setSaving(true);
    try {
      const t = await addTestimonial(form);
      setTestimonials(prev => [t, ...prev]);
      setForm({ name: '', role: '', company: '', message: '', rating: 5 });
      setShowForm(false);
    } catch {}
    setSaving(false);
  };

  const handleToggle = async (id) => {
    const updated = await toggleTestimonialVisibility(id);
    setTestimonials(prev => prev.map(t => t._id === id ? updated : t));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this testimonial?')) return;
    await deleteTestimonial(id);
    setTestimonials(prev => prev.filter(t => t._id !== id));
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)', borderRadius: 8,
    color: 'var(--text)', fontFamily: 'var(--sans)', fontSize: 14,
    padding: '10px 14px', outline: 'none',
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)' }}>
            {testimonials.length} total &nbsp;·&nbsp;
            <span style={{ color: 'var(--green)' }}>{testimonials.filter(t => t.visible).length} visible</span>
            &nbsp;·&nbsp;
            <span style={{ color: '#f39c12' }}>{testimonials.filter(t => !t.visible).length} hidden</span>
          </div>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>
          <Plus size={15} /> Add Testimonial
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <div style={{ ...card, marginBottom: 24, borderColor: 'rgba(0,212,255,0.3)' }}>
          <h3 style={{ fontFamily: 'var(--mono)', color: 'var(--cyan)', fontSize: 14, marginBottom: 20 }}>
            NEW TESTIMONIAL
          </h3>
          <form onSubmit={handleAdd}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>NAME *</label>
                <input style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Client name" required />
              </div>
              <div>
                <label style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>ROLE *</label>
                <input style={inputStyle} value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="CEO, CTO, etc." required />
              </div>
              <div>
                <label style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>COMPANY</label>
                <input style={inputStyle} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 6 }}>TESTIMONIAL *</label>
              <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="What did the client say..." required />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--mono)', display: 'block', marginBottom: 8 }}>RATING: {form.rating}/5</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} type="button" onClick={() => setForm({ ...form, rating: n })} style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                    color: n <= form.rating ? '#f39c12' : 'var(--muted)',
                  }}>
                    <Star size={22} fill={n <= form.rating ? '#f39c12' : 'none'} />
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="submit" className="btn-primary" disabled={saving} style={{ padding: '10px 24px', fontSize: 13 }}>
                {saving ? 'Saving...' : 'Save Testimonial'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="btn-outline" style={{ padding: '10px 20px', fontSize: 13 }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: 60, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>Loading...</div>
      ) : testimonials.length === 0 ? (
        <div style={{ ...card, textAlign: 'center', padding: 60, color: 'var(--muted)' }}>
          <Star size={36} strokeWidth={1} style={{ marginBottom: 12, opacity: 0.3 }} />
          <p style={{ fontFamily: 'var(--mono)' }}>No testimonials yet. Add your first one.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {testimonials.map(t => (
            <div key={t._id} style={{
              ...card,
              borderColor: t.visible ? 'var(--border)' : 'rgba(255,255,255,0.04)',
              opacity: t.visible ? 1 : 0.55,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    {/* Avatar initials */}
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--cyan)', flexShrink: 0,
                    }}>
                      {t.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                        {t.role}{t.company ? ` · ${t.company}` : ''}
                      </div>
                    </div>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: 2, marginLeft: 8 }}>
                      {[1, 2, 3, 4, 5].map(n => (
                        <Star key={n} size={13} color="#f39c12"
                          fill={n <= t.rating ? '#f39c12' : 'none'} />
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>
                    "{t.message}"
                  </p>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 8, fontFamily: 'var(--mono)' }}>
                    Added {new Date(t.createdAt).toLocaleDateString()}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  <button onClick={() => handleToggle(t._id)} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: t.visible ? 'rgba(0,255,136,0.08)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${t.visible ? 'rgba(0,255,136,0.25)' : 'var(--border)'}`,
                    color: t.visible ? 'var(--green)' : 'var(--muted)',
                    fontFamily: 'var(--mono)', fontSize: 11, padding: '6px 12px',
                    borderRadius: 6, cursor: 'pointer', whiteSpace: 'nowrap',
                  }}>
                    {t.visible ? <ToggleRight size={13} /> : <ToggleLeft size={13} />}
                    {t.visible ? 'Visible' : 'Hidden'}
                  </button>
                  <button onClick={() => handleDelete(t._id)} style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: 'rgba(255,107,107,0.06)', border: '1px solid rgba(255,107,107,0.2)',
                    color: '#ff6b6b', fontFamily: 'var(--mono)', fontSize: 11,
                    padding: '6px 12px', borderRadius: 6, cursor: 'pointer',
                  }}>
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Dashboard shell ──────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [tab, setTab] = useState('contacts');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  const tabs = [
    { key: 'contacts', label: 'Inquiries', Icon: Users },
    { key: 'testimonials', label: 'Testimonials', Icon: MessageSquare },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div style={{
        background: 'rgba(5,5,8,0.98)', borderBottom: '1px solid var(--border)',
        padding: '0 24px', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Shield size={20} color="var(--cyan)" />
            <span style={{ fontFamily: 'var(--mono)', color: '#fff', fontSize: 16 }}>
              RAJKUMAR <span style={{ color: 'var(--cyan)' }}>// Admin</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="/" target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', textDecoration: 'none',
            }}>
              View Site
            </a>
            <button onClick={handleLogout} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'none', border: '1px solid var(--border)',
              borderRadius: 6, color: 'var(--muted)', fontFamily: 'var(--mono)',
              fontSize: 12, padding: '6px 14px', cursor: 'pointer',
            }}>
              <LogOut size={13} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px', width: '100%', flex: 1 }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 32,
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 10, padding: 4, width: 'fit-content',
        }}>
          {tabs.map(({ key, label, Icon }) => (
            <button key={key} onClick={() => setTab(key)} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: tab === key ? 'rgba(0,212,255,0.12)' : 'transparent',
              border: tab === key ? '1px solid rgba(0,212,255,0.25)' : '1px solid transparent',
              color: tab === key ? 'var(--cyan)' : 'var(--muted)',
              fontFamily: 'var(--mono)', fontSize: 13, padding: '8px 20px',
              borderRadius: 7, cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === 'contacts' && <ContactsTab />}
        {tab === 'testimonials' && <TestimonialsTab />}
      </div>
    </div>
  );
}
