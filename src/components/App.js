// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider, AuthContext } from './context/AuthContext';
// import Login from './components/Auth/Login';
// import PostList from './components/Posts/PostList';
// import PostForm from './components/Posts/PostForm';

// const PrivateRoute = ({ children }) => {
//   const { user } = React.useContext(AuthContext);
//   return user ? children : <Navigate to="/login" />;
// };




// import CategoryList from './components/Posts/CategoryList';
// import TagList from './components/Posts/TagList';

// <Route
//   path="/categories"
//   element={
//     <PrivateRoute>
//       <CategoryList />
//     </PrivateRoute>
//   }
// />
// <Route
//   path="/tags"
//   element={
//     <PrivateRoute>
//       <TagList />
//     </PrivateRoute>
//   }
// />


// import Profile from './components/Auth/Profile';

// <Route
//   path="/profile"
//   element={
//     <PrivateRoute>
//       <Profile />
//     </PrivateRoute>
//   }
// />






// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <PostList />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/posts/new"
//             element={
//               <PrivateRoute>
//                 <PostForm onSuccess={() => window.location.href = '/'} />
//               </PrivateRoute>
//             }
//           />
//           {/* Add more routes like edit post, post detail as needed */}
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;











// import Login from './components/Auth/Login';
// import Profile from './components/Auth/Profile';
// import PostList from './components/Posts/PostList';
// import PostForm from './components/Posts/PostForm';
// import CategoryList from './components/Posts/CategoryList';
// import TagList from './components/Posts/TagList';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import PrivateRoute from './utils/PrivateRoute';

// <Routes>
//   <Route path="/login" element={<Login />} />
//   <Route path="/" element={<PrivateRoute><PostList /></PrivateRoute>} />
//   <Route path="/posts/new" element={<PrivateRoute><PostForm /></PrivateRoute>} />
//   <Route path="/posts/edit/:id" element={<PrivateRoute><PostForm /></PrivateRoute>} />
//   <Route path="/categories" element={<PrivateRoute><CategoryList /></PrivateRoute>} />
//   <Route path="/tags" element={<PrivateRoute><TagList /></PrivateRoute>} />
//   <Route path="/admin/users" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
//   <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
// </Routes>








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Auth/Login';
import AdminDashboard from './components/Admin/AdminDashboard';
import PostList from './components/Posts/PostList';
import PostForm from './components/Posts/PostForm';
import CategoryList from './components/Posts/CategoryList';
import TagList from './components/Posts/TagList';

import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* ✅ Public Routes */}
          <Route path="/" element={<PostList />} />

          {/* ✅ Admin Login */}
          <Route path="/login" element={<Login />} />

          {/* ✅ Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute adminOnly={true}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/posts/new"
            element={
              <PrivateRoute adminOnly={true}>
                <PostForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/posts/edit/:id"
            element={
              <PrivateRoute adminOnly={true}>
                <PostForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <PrivateRoute adminOnly={true}>
                <CategoryList />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/tags"
            element={
              <PrivateRoute adminOnly={true}>
                <TagList />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
