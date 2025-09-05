// import React from 'react';
// import Navbar from './Navbar';
// import courses from '../data/courses';

// const Courses = () => (
//   <>
//     <Navbar />
//     <div className="container mt-4">
//       <h2>Courses</h2>
//       <div className="row">
//         {courses.map(course => (
//           <div className="col-md-4 mb-3" key={course.id}>
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{course.name}</h5>
//                 <p className="card-text">{course.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </>
// );

// export default Courses;







import React from 'react';
import Navbar from './Navbar';
import { coursesData } from '../data/data';

const Courses = () => (
  <>
    <Navbar />
    <div className="container mt-4">
      <h2>Courses</h2>
      <div className="row">
        {coursesData.map(course => (
          <div className="col-md-4 mb-3" key={course.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Courses;
