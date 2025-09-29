import React, { useEffect, useState } from 'react';
import api from '../../api';

const Profile = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const fetchProfile = async () => {
    const res = await api.get('/auth/profile');
    setForm({ ...form, username: res.data.username, email: res.data.email });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put('/auth/profile', form);
    alert('Profile updated!');
    setForm({ ...form, password: '' });
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          className="form-control mb-2"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          className="form-control mb-2"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="form-control mb-2"
          placeholder="New Password (optional)"
          value={form.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
