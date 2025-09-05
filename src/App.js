// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;









import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import Courses from './pages/Courses';
import Exams from './pages/Exams';
import SearchResults from './pages/SearchResults';
import { SearchProvider } from './context/SearchContext';
import Reviews from './pages/Reviews';
import EngineeringPage from './pages/EngineeringPage';
function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/search" element={<SearchResults />} />
        <Route path="/reviews" element={<Reviews />} />
   <Route path="/categories/engineering" element={<EngineeringPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;