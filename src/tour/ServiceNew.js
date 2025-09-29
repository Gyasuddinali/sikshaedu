// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import './servicenew1.css';

// export default function ServiceNew() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();
//   const sidebarRef = useRef(null);

//   const navItems = [
//     { id: "home", title: "Home", path: "/" },
//     { id: "about", title: "About", path: "/about" },
//     {
//       id: "services",
//       title: "Domestic",
//       dropdown: [
//         { label: "North", path: "/" },
//         { label: "East", path: "/" },
//         { label: "South", path: "/" },
//         { label: "West", path: "/" },
//       ],
//     },
//     {
//       id: "inter",
//       title: "International",
//       dropdown: [
//         { label: "Thailand", path: "/" },
//         { label: "Belgium", path: "/" },
//         { label: "Dubai", path: "/" },
//         { label: "Canada", path: "/" },
//       ],
//     },
//     { id: "development", title: "Development", path: "/development" },
//     { id: "contact", title: "Contact Us", path: "/contact" },
//   ];

//   const toggleDropdown = (id) => {
//     setActiveDropdown((prev) => (prev === id ? null : id));
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         event.target.id !== "sidebar-toggle-btn"
//       ) {
//         setIsSidebarOpen(false);
//         setActiveDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button id="sidebar-toggle-btn" className="toggle-btn" onClick={toggleSidebar}>
//         {isSidebarOpen ? "✖ Close" : "☰ Menu"}
//       </button>

//       {/* Sidebar (Mobile Nav) */}
//       <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <a href="/" className="logo-link">
//             <img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="Logo" className="logo-img" />
//             <h4>JINGLE HOLIDAYS</h4>
//           </a>
//         </div>

//         {navItems.map((item) => (
//           <div key={item.id} className="nav-section">
//             {item.dropdown ? (
//               <>
//                 <div
//                   className={`link ${activeDropdown === item.id ? "active" : ""}`}
//                   onClick={() => toggleDropdown(item.id)}
//                 >
//                   {item.title} <span className="arrow">▼</span>
//                 </div>
//                 {activeDropdown === item.id && (
//                   <div className="dropdown">
//                     {item.dropdown.map((subItem, index) => (
//                       <Link
//                         key={index}
//                         to={subItem.path}
//                         className={`sublink ${location.pathname === subItem.path ? "active-sub" : ""}`}
//                         onClick={() => {
//                           setActiveDropdown(null);
//                           setIsSidebarOpen(false);
//                         }}
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </>
//             ) : (
//               <Link
//                 to={item.path}
//                 className={`link ${location.pathname === item.path ? "active" : ""}`}
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 {item.title}
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>

//       {isSidebarOpen && <div className="backdrop" onClick={() => setIsSidebarOpen(false)} />}

//       {/* Desktop Navbar */}
//       <div className="desktop-navbar">
//         <div className="desktop-logo">
//           <a href="/" className="logo-link">
//             <img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="Logo" className="logo-img rounded-circle" />
//             <h4>JINGLE HOLIDAYS</h4>
//           </a>
//         </div>
//         <div className="nav-links">
//           {navItems.map((item) => (
//             <div key={item.id} className="nav-item">
//               {item.dropdown ? (
//                 <div className="dropdown-wrapper">
//                   <span className="link">{item.title} ▼</span>
//                   <div className="desktop-dropdown">
//                     {item.dropdown.map((subItem, index) => (
//                       <Link
//                         key={index}
//                         to={subItem.path}
//                         className={`dropdown-link ${location.pathname === subItem.path ? "active-sub" : ""}`}
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   to={item.path}
//                   className={`link ${location.pathname === item.path ? "active" : ""}`}
//                 >
//                   {item.title}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }





















// import { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaChevronDown, FaBars, FaTimes, FaHome, FaGlobe, FaCode, FaPhone } from "react-icons/fa";
// import './servicenew.css';
// // import './ser.css';


// export default function ServiceNew() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();
//   const sidebarRef = useRef(null);

//   const navItems = [
//     { id: "home", title: "Home", path: "/", icon: <FaHome /> },
//     { id: "about", title: "About", path: "/about", icon: <FaGlobe /> },
//     {
//       id: "services",
//       title: "Domestic",
//       icon: <FaGlobe />,
//       dropdown: [
//         { label: "North", path: "/" },
//         { label: "East", path: "/" },
//         { label: "South", path: "/" },
//         { label: "West", path: "/" },
//       ],
//     },
//     {
//       id: "inter",
//       title: "International",
//       icon: <FaGlobe />,
//       dropdown: [
//         { label: "Thailand", path: "/" },
//         { label: "Belgium", path: "/" },
//         { label: "Dubai", path: "/" },
//         { label: "Canada", path: "/" },
//       ],
//     },
//     { id: "development", title: "Development", path: "/development", icon: <FaCode /> },
//     { id: "contact", title: "Contact Us", path: "/contact", icon: <FaPhone /> },
//   ];

//   const toggleDropdown = (id) => {
//     setActiveDropdown((prev) => (prev === id ? null : id));
//   };

//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target) &&
//         event.target.id !== "sidebar-toggle-btn"
//       ) {
//         setIsSidebarOpen(false);
//         setActiveDropdown(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button id="sidebar-toggle-btn" className="toggle-btn" onClick={toggleSidebar}>
//         {isSidebarOpen ? <><FaTimes /> Close</> : <><FaBars /> Menu</>}
//       </button>

//       {/* Sidebar (Mobile Nav) */}
//       <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <Link to="/" className="logo-link">
//             <img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="Logo" className="logo-img" />
//             <h4>JINGLE HOLIDAYS</h4>
//           </Link>
//         </div>

//         {navItems.map((item) => (
//           <div key={item.id} className="nav-section">
//             {item.dropdown ? (
//               <>
//                 <div
//                   className={`link ${activeDropdown === item.id ? "active" : ""}`}
//                   onClick={() => toggleDropdown(item.id)}
//                 >
//                   <span className="icon">{item.icon}</span> {item.title} <FaChevronDown className="chevron" />
//                 </div>
//                 {activeDropdown === item.id && (
//                   <div className="dropdown">
//                     {item.dropdown.map((subItem, index) => (
//                       <Link
//                         key={index}
//                         to={subItem.path}
//                         className={`sublink ${location.pathname === subItem.path ? "active-sub" : ""}`}
//                         onClick={() => {
//                           setActiveDropdown(null);
//                           setIsSidebarOpen(false);
//                         }}
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </>
//             ) : (
//               <Link
//                 to={item.path}
//                 className={`link ${location.pathname === item.path ? "active" : ""}`}
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 <span className="icon">{item.icon}</span> {item.title}
//               </Link>
//             )}
//           </div>
//         ))}
//       </div>

//       {isSidebarOpen && <div className="backdrop" onClick={() => setIsSidebarOpen(false)} />}

//       {/* Desktop Navbar */}
//       <div className="desktop-navbar">
//         <div className="desktop-logo">
//           <Link to="/" className="logo-link">
//             <img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="Logo" className="logo-img rounded-circle" />
//             <h4>JINGLE HOLIDAYS</h4>
//           </Link>
//         </div>
//         <div className="nav-links">
//           {navItems.map((item) => (
//             <div key={item.id} className="nav-item">
//               {item.dropdown ? (
//                 <div className="dropdown-wrapper">
//                   <span className="link">
//                     <span className="icon">{item.icon}</span> {item.title} <FaChevronDown className="chevron" />
//                   </span>
//                   <div className="desktop-dropdown">
//                     {item.dropdown.map((subItem, index) => (
//                       <Link
//                         key={index}
//                         to={subItem.path}
//                         className={`dropdown-link ${location.pathname === subItem.path ? "active-sub" : ""}`}
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   to={item.path}
//                   className={`link ${location.pathname === item.path ? "active" : ""}`}
//                 >
//                   <span className="icon">{item.icon}</span> {item.title}
//                 </Link>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }






















import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaHome, FaGlobe, FaCode, FaPhone } from "react-icons/fa";
import { HiLocationMarker } from 'react-icons/hi';
import './servicenew1.css';

export default function ServiceNew() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const navItems = [
    { id: "home", title: "Home", path: "/", icon: <FaHome /> },
    { id: "about", title: "About", path: "/about", icon: <FaGlobe /> },
    {
      id: "services",
      title: "Domestic",
      icon: <FaGlobe />,
      dropdown: [
        { label: "North", path: "/" },
        { label: "East", path: "/" },
        { label: "South", path: "/" },
        { label: "West", path: "/" },
      ],
    },
    {
      id: "inter",
      title: "International",
      icon: <FaGlobe />,
      dropdown: [
        { label: "Thailand", path: "/" },
        { label: "Belgium", path: "/" },
        { label: "Dubai", path: "/" },
        { label: "Canada", path: "/" },
      ],
    },

{
      id: "place",
      title: "Place",
      icon: <HiLocationMarker />,
      dropdown: [
        { label: "Destination", path: "/" },
        { label: "Hotel", path: "/" },
        { label: "Gallary", path: "/" },
      ],
    },


    // { id: "development", title: "Development", path: "/development", icon: <FaCode /> },
    { id: "contact", title: "Contact Us", path: "/contact", icon: <FaPhone /> },
  ];

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        event.target.id !== "sidebar-toggle-btn"
      ) {
        setIsSidebarOpen(false);
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button id="sidebar-toggle-btn" className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? <><FaTimes /> Close</> : <><FaBars /> Menu</>}
      </button>

      {/* Sidebar (Mobile Nav) */}
      <nav ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo-link" onClick={() => setIsSidebarOpen(false)}>
            <img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="Logo" className="logo-img" />
            <h4>JINGLE HOLIDAYS</h4>
          </Link>
        </div>

        {navItems.map((item) => (
          <div key={item.id} className="nav-section">
            {item.dropdown ? (
              <>
                <div
                  className={`link ${activeDropdown === item.id ? "active" : ""}`}
                  onClick={() => toggleDropdown(item.id)}
                >
                  <span className="icon">{item.icon}</span> {item.title} <FaChevronDown className="chevron" />
                </div>
                {activeDropdown === item.id && (
                  <div className="dropdown">
                    {item.dropdown.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className={`sublink ${location.pathname === subItem.path ? "active-sub" : ""}`}
                        onClick={() => {
                          setActiveDropdown(null);
                          setIsSidebarOpen(false);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className={`link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="icon">{item.icon}</span> {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Backdrop */}
      {isSidebarOpen && <div className="backdrop" onClick={() => setIsSidebarOpen(false)} />}

      {/* Desktop Navbar */}
      <header className="desktop-navbar" role="navigation" aria-label="Primary Navigation">
        <div className="desktop-logo">
          <Link to="/" className="logo-link">
            <img src="https://jingleholidaybazar.com/images/mainlogo.gif" alt="Logo" className="logo-img rounded-circle" />
            <h4>JINGLE HOLIDAYS</h4>
          </Link>
        </div>
        <nav className="nav-links">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item">
              {item.dropdown ? (
                <div className="dropdown-wrapper" tabIndex={0} aria-haspopup="true" aria-expanded="false">
                  <span className="link" aria-controls={`${item.id}-dropdown`} aria-haspopup="true">
                    <span className="icon">{item.icon}</span> {item.title} <FaChevronDown className="chevron" />
                  </span>
                  <div className="desktop-dropdown" id={`${item.id}-dropdown`} role="menu">
                    {item.dropdown.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className={`dropdown-link ${location.pathname === subItem.path ? "active-sub" : ""}`}
                        role="menuitem"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`link ${location.pathname === item.path ? "active" : ""}`}
                >
                  <span className="icon">{item.icon}</span> {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
