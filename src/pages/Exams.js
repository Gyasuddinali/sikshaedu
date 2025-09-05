// import React from 'react';
// import Navbar from './Navbar';

// const Exams = () => (
//   <>
//     <Navbar />
//     <div className="container mt-4">
//       <h2>Exams Page</h2>
//     </div>
//   </>
// );

// export default Exams;










// import Navbar from './Navbar';
// import { Container, Accordion } from 'react-bootstrap';

// const exams = [
//   { id: 1, name: "JEE Main", details: "National-level engineering entrance exam." },
//   { id: 2, name: "NEET", details: "Medical entrance test for MBBS and BDS courses." },
//   { id: 3, name: "CAT", details: "MBA entrance exam for IIMs and top B-schools." },
// ];

// const Exams = () => (
//   <>
//     <Navbar />
//     <div className="bg-light py-4">
//       <Container>
//         <h2 className="mb-4">Entrance Exams</h2>
//         <Accordion defaultActiveKey="0">
//           {exams.map((exam, index) => (
//             <Accordion.Item eventKey={index.toString()} key={exam.id}>
//               <Accordion.Header>{exam.name}</Accordion.Header>
//               <Accordion.Body>{exam.details}</Accordion.Body>
//             </Accordion.Item>
//           ))}
//         </Accordion>
//       </Container>
//     </div>
//   </>
// );

// export default Exams;








import React from 'react';
import Navbar from './Navbar';
import { Container, Accordion } from 'react-bootstrap';
import { examsData } from '../data/data';

const Exams = () => (
  <>
    <Navbar />
    <div className="bg-light py-4">
      <Container>
        <h2 className="mb-4">Entrance Exams</h2>
        <Accordion defaultActiveKey="0">
          {examsData.map((exam, index) => (
            <Accordion.Item eventKey={index.toString()} key={exam.id}>
              <Accordion.Header>{exam.name}</Accordion.Header>
              <Accordion.Body>{exam.details}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  </>
);

export default Exams;
