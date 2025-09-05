// import React from 'react';
// import Navbar from './Navbar';

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container mt-4">
//         <h1>Welcome to Shiksha Clone</h1>
//       </div>
//     </>
//   );
// };

// export default Home;




// import Navbar from './Navbar';
// import { Container, Row, Col, Card, InputGroup, FormControl, Button } from 'react-bootstrap';

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="homepage-hero bg-light py-5 text-center">
//         <Container>
//           <h1 className="mb-4">Find Colleges, Courses, Exams, and More</h1>
//           <Row className="justify-content-center">
//             <Col xs={12} md={8}>
//               <InputGroup className="mb-3">
//                 <FormControl placeholder="Search courses, colleges, exams..." />
//                 <Button variant="primary">Search</Button>
//               </InputGroup>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       <Container className="mt-5">
//         <h3 className="text-center mb-4">Popular Categories</h3>
//         <Row>
//           {[...Array(6)].map((_, idx) => (
//             <Col xs={12} sm={6} md={4} className="mb-4" key={idx}>
//               <Card className="h-100">
//                 <Card.Body>
//                   <Card.Title>Category {idx + 1}</Card.Title>
//                   <Card.Text>Explore top colleges and courses in this category.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Home;











import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Container, Row,Card, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import { courseCategories } from '../data/data';
const Home = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="homepage-hero bg-light py-5 text-center">
        <Container>
          <h1 className="mb-4">Find Colleges, Courses, Exams, and More</h1>
          <Row className="justify-content-center">
            <Col xs={12} md={8}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search courses, colleges, exams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button variant="primary" onClick={handleSearch}>Search</Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>


       {/* <Container className="mt-5">
         <h3 className="text-center mb-4">Popular Categories</h3>
          <Row>
          {[...Array(6)].map((_, idx) => (
           <Col xs={12} sm={6} md={4} className="mb-4" key={idx}>
              <Card className="h-100">
                <Card.Body>
                   <Card.Title>Category {idx + 1}</Card.Title>
                   <Card.Text>Explore top colleges and courses in this category.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
       </Row>
       </Container> */}


<Container className="mt-5">
      <h3 className="text-center mb-4">Popular Courses</h3>
      <Row>
        {courseCategories.map((category, idx) => (
          <Col xs={12} sm={6} md={4} className="mb-4" key={idx}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  <Link to={category.slug} className="stretched-link text-decoration-none">
                    {category.name}
                  </Link>
                </Card.Title>
                <Card.Text>
                  Explore top colleges and courses in {category.name}.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>



      </div>
    </>
  );
};

export default Home;
