// import React, { useEffect, useState, useMemo } from 'react';
// import {
//   Table,
//   Button,
//   Form,
//   Pagination,
//   Toast,
//   ToastContainer,
//   Spinner,
//   Alert,
//   Row,
//   Col,
// } from 'react-bootstrap';
// import api from '../../api';

// const ITEMS_PER_PAGE = 5;

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const [toast, setToast] = useState({ show: false, message: '', variant: '' });

//   const fetchCategories = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get('/categories');
//       setCategories(res.data);
//       setFilteredCategories(res.data);
//     } catch {
//       setError('Failed to load categories');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   // Debounce search
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       const lowerSearch = searchTerm.toLowerCase();
//       const filtered = categories.filter((cat) =>
//         cat.name.toLowerCase().includes(lowerSearch)
//       );
//       setFilteredCategories(filtered);
//       setCurrentPage(1);
//     }, 300);
//     return () => clearTimeout(handler);
//   }, [searchTerm, categories]);

//   const totalPages = Math.ceil(filteredCategories.length / ITEMS_PER_PAGE);
//   const currentCategories = useMemo(() => {
//     const start = (currentPage - 1) * ITEMS_PER_PAGE;
//     return filteredCategories.slice(start, start + ITEMS_PER_PAGE);
//   }, [filteredCategories, currentPage]);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this category?')) return;

//     try {
//       await api.delete(`/categories/${id}`);
//       setToast({ show: true, message: 'Category deleted', variant: 'success' });
//       fetchCategories();
//     } catch {
//       setToast({ show: true, message: 'Failed to delete category', variant: 'danger' });
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   if (loading) return <Spinner animation="border" />;
//   if (error) return <Alert variant="danger">{error}</Alert>;

//   return (
//     <>
//       <Row className="mb-3">
//         <Col md={8}>
//           <Form.Control
//             type="text"
//             placeholder="Search categories..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Col>
//         <Col md={4}>
//           <Button
//             onClick={() => {
//               setSearchTerm('');
//             }}
//           >
//             Clear
//           </Button>
//         </Col>
//       </Row>

//       {currentCategories.length === 0 ? (
//         <p>No categories found.</p>
//       ) : (
//         <>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th style={{ width: '100px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentCategories.map(({ _id, name }) => (
//                 <tr key={_id}>
//                   <td>{name}</td>
//                   <td>
//                     {/* You can add Edit functionality here if you want */}
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(_id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           {totalPages > 1 && (
//             <Pagination>
//               {[...Array(totalPages)].map((_, idx) => (
//                 <Pagination.Item
//                   key={idx + 1}
//                   active={idx + 1 === currentPage}
//                   onClick={() => handlePageChange(idx + 1)}
//                 >
//                   {idx + 1}
//                 </Pagination.Item>
//               ))}
//             </Pagination>
//           )}
//         </>
//       )}

//       <ToastContainer position="bottom-end" className="p-3">
//         <Toast
//           onClose={() => setToast({ ...toast, show: false })}
//           show={toast.show}
//           bg={toast.variant}
//           delay={3000}
//           autohide
//         >
//           <Toast.Body className="text-white">{toast.message}</Toast.Body>
//         </Toast>
//       </ToastContainer>
//     </>
//   );
// };

// export default CategoryList;












import React, { useEffect, useState } from 'react';
import { Table, Button, FormControl, InputGroup, Spinner, Modal, Toast, ToastContainer } from 'react-bootstrap';
import api from '../../api';
import CategoryForm from './CategoryForm';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await api.get('/categories', {
        params: { search: searchTerm },
      });
      setCategories(res.data);
    } catch (err) {
      showToast('Failed to load categories', 'danger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [searchTerm]);

  const showToast = (message, variant = 'success') => {
    setToast({ show: true, message, variant });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await api.delete(`/categories/${id}`);
      showToast('Category deleted');
      fetchCategories();
    } catch {
      showToast('Failed to delete category', 'danger');
    }
  };

  const openCreateForm = () => {
    setEditCategoryId(null);
    setShowForm(true);
  };

  const openEditForm = (id) => {
    setEditCategoryId(id);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    fetchCategories();
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button onClick={openCreateForm}>+ Add Category</Button>
        <InputGroup style={{ maxWidth: '300px' }}>
          <FormControl
            placeholder="Search categories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th style={{ width: '150px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center">
                  No categories found
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat._id}>
                  <td>{cat.name}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => openEditForm(cat._id)} className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(cat._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}

      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editCategoryId ? 'Edit Category' : 'Add Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm
            categoryId={editCategoryId}
            onSuccess={handleFormSuccess}
            onCancel={() => setShowForm(false)}
          />
        </Modal.Body>
      </Modal>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          onClose={() => setToast({ ...toast, show: false })}
          show={toast.show}
          bg={toast.variant}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default CategoryList;















