import axios from 'axios';

const getToken = () => localStorage.getItem('admin_token');

const api = axios.create({ baseURL: '/api' });

api.interceptors.request.use(config => {
  const token = getToken();
  if (token) config.headers['x-admin-token'] = token;
  return config;
});

export const adminLogin = (password) =>
  api.post('/admin/login', { password }).then(r => r.data.token);

// Contacts
export const getContacts = (status = 'all') =>
  api.get(`/contact?status=${status}`).then(r => r.data);

export const updateContactStatus = (id, status) =>
  api.patch(`/contact/${id}/status`, { status }).then(r => r.data);

export const deleteContact = (id) =>
  api.delete(`/contact/${id}`).then(r => r.data);

// Testimonials
export const getAllTestimonials = () =>
  api.get('/testimonials/all').then(r => r.data);

export const addTestimonial = (data) =>
  api.post('/testimonials', data).then(r => r.data);

export const toggleTestimonialVisibility = (id) =>
  api.patch(`/testimonials/${id}/visibility`).then(r => r.data);

export const deleteTestimonial = (id) =>
  api.delete(`/testimonials/${id}`).then(r => r.data);
