// import React from 'react';
// import Navbar from './Navbar';

// const Colleges = () => (
//   <>
//     <Navbar />
//     <div className="container mt-4">
//       <h2>Colleges Page</h2>
//     </div>
//   </>
// );

// export default Colleges;




// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { Container, Row, Col, Card, Form } from 'react-bootstrap';

// const collegesData = [
//   { id: 1, name: "IIT Delhi", location: "Delhi", rating: 4.8 },
//   { id: 2, name: "BITS Pilani", location: "Pilani", rating: 4.5 },
//   { id: 3, name: "NIT Trichy", location: "Trichy", rating: 4.3 },
//   { id: 4, name: "SRM University", location: "Chennai", rating: 3.9 },
//   { id: 5, name: "VIT Vellore", location: "Vellore", rating: 4.1 },
// ];

// const Colleges = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredColleges = collegesData.filter((college) =>
//     college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     college.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="bg-light py-4 min-vh-100">
//         <Container>
//           <h2 className="mb-4 text-center">Top Colleges in India</h2>

//           <Row className="justify-content-center mb-4">
//             <Col xs={12} md={6}>
//               <Form.Control
//                 type="text"
//                 placeholder="Search by college name or location..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </Col>
//           </Row>

//           <Row>
//             {filteredColleges.length > 0 ? (
//               filteredColleges.map((college) => (
//                 <Col xs={12} sm={6} md={4} className="mb-4" key={college.id}>
//                   <Card className="h-100">
//                     <Card.Body>
//                       <Card.Title>{college.name}</Card.Title>
//                       <Card.Text>
//                         Location: {college.location}<br />
//                         Rating: ⭐ {college.rating}
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))
//             ) : (
//               <Col>
//                 <p className="text-center">No colleges match your search.</p>
//               </Col>
//             )}
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Colleges;









import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { collegesData } from '../data/data';

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = collegesData.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="bg-light py-4 min-vh-100">
        <Container>
          <h2 className="mb-4 text-center">Top Colleges in India</h2>

          <Row className="justify-content-center mb-4">
            <Col xs={12} md={6}>
              <Form.Control
                type="text"
                placeholder="Search by college name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college) => (
                <Col xs={12} sm={6} md={4} className="mb-4" key={college.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>{college.name}</Card.Title>
                      <Card.Text>
                        Location: {college.location}<br />
                        Rating: ⭐ {college.rating}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center">No colleges match your search.</p>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Colleges;
