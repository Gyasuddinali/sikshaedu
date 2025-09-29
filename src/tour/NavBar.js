import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaHome, FaGlobe, FaCode, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

import './nav.css';

export default function NavBar() {
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
    { id: "development", title: "Development", path: "/development", icon: <FaCode /> },
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

      {/* Hero Section with Framer Motion Animation */}
      <motion.main
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <h1>Your Next Adventure Awaits</h1>
          <p>Explore unforgettable journeys with Jingle Holidays.</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </motion.main>
    </>
  );
}
























  {/* <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm"
        style={{
          background: "linear-gradient(180deg, rgba(169,184,197,1) 0%, rgba(110,130,148,1) 100%)",
        }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <span
              className="d-inline-block rounded-circle overflow-hidden border"
              style={{ width: 48, height: 48 }}
              aria-hidden="true"
            >
              <img src="/images/reference.jpg" alt="" className="w-100 h-100" style={{ objectFit: "cover" }} />
            </span>
            <span className="fw-semibold">Jingle Holidays</span>
          </a>

          <div className="ms-auto d-none d-lg-flex align-items-center gap-3">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Domestic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  International
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Place
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Packages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <span className="text-white-50 small fw-semibold me-2">+91-8506922777</span>
            <a className="btn btn-light btn-sm fw-semibold text-dark" href="#">
              PAY NOW
            </a>
          </div>
        </div>
      </nav> */}
