

import DestinationIind from './tour/DestinationIind.js'
import International from './tour/International.js'

import {BrowserRouter, Routes, Route } from "react-router-dom"; 
import NavBar from './tour/NavBar';
import Service from './tour/ServicesPage.js'
import TwoImage from './tour/TwoImage';
import TwosideContent from './tour/TwosideContent';
import Gallery from './tour/Gallery';
import Hotel from './tour/Hotel';
import Hero from './tour/Hero'
import {
  FaWhatsapp,
  FaPhone,FaShoppingCart
} from "react-icons/fa"
import FloatingButtons from './tour/FloatingButtons';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './tour/Footer';

function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
    })
  })
  return (
<div >
    <NavBar></NavBar>
 <Hero/>
<Service/>
<DestinationIind/>
<International/>
<TwoImage/>
<TwosideContent/>
<Gallery/>
<Hotel/>
<Footer/>


 <FloatingButtons />

   





  
    </div>

  );
}

export default App;





























































// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from './components/Auth/Login';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import PostList from './components/Posts/PostList';
// import PostForm from './components/Posts/PostForm';
// import CategoryList from './components/Posts/CategoryList';
// import TagList from './components/Posts/TagList';

// import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './utils/PrivateRoute';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>

//           {/* ✅ Public Routes */}
//           <Route path="/" element={<PostList />} />

//           {/* ✅ Admin Login */}
//           <Route path="/login" element={<Login />} />

//           {/* ✅ Protected Admin Routes */}
//           <Route
//             path="/admin"
//             element={
//               <PrivateRoute adminOnly={true}>
//                 <AdminDashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin/posts/new"
//             element={
//               <PrivateRoute adminOnly={true}>
//                 <PostForm />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin/posts/edit/:id"
//             element={
//               <PrivateRoute adminOnly={true}>
//                 <PostForm />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin/categories"
//             element={
//               <PrivateRoute adminOnly={true}>
//                 <CategoryList />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/admin/tags"
//             element={
//               <PrivateRoute adminOnly={true}>
//                 <TagList />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;























