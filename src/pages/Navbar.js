// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//       <Link className="navbar-brand" to="/">Shiksha Clone</Link>
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
//           <li className="nav-item"><Link className="nav-link" to="/colleges">Colleges</Link></li>
//           <li className="nav-item"><Link className="nav-link" to="/exams">Exams</Link></li>
//           <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;









import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Shiksha</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/colleges">Colleges</Nav.Link>
            <Nav.Link as={Link} to="/exams">Exams</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
