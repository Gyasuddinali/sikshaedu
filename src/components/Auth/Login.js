// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       // Redirect or show success
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           className="form-control mb-2"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />
//         <input
//           className="form-control mb-2"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//         />
//         <button className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;







import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      login(res.data); 
    //   navigate('/');
    navigate('/admin');
    } catch (err) {
      alert('Login failed. Check your credentials.');
    }
  };
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
