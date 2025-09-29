import React, { useEffect, useState, useMemo } from 'react';
import {
  Table,
  Button,
  Form,
  Pagination,
  Toast,
  ToastContainer,
  Spinner,
  Alert,
  Row,
  Col,
} from 'react-bootstrap';
import api from '../../api';

const ITEMS_PER_PAGE = 5;

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  const fetchTags = async () => {
    try {
      setLoading(true);
      const res = await api.get('/tags');
      setTags(res.data);
      setFilteredTags(res.data);
    } catch {
      setError('Failed to load tags');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = tags.filter((tag) =>
        tag.name.toLowerCase().includes(lowerSearch)
      );
      setFilteredTags(filtered);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm, tags]);

  const totalPages = Math.ceil(filteredTags.length / ITEMS_PER_PAGE);
  const currentTags = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTags.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredTags, currentPage]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this tag?')) return;

    try {
      await api.delete(`/tags/${id}`);
      setToast({ show: true, message: 'Tag deleted', variant: 'success' });
      fetchTags();
    } catch {
      setToast({ show: true, message: 'Failed to delete tag', variant: 'danger' });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      <Row className="mb-3">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button
            onClick={() => {
              setSearchTerm('');
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>

      {currentTags.length === 0 ? (
        <p>No tags found.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th style={{ width: '100px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentTags.map(({ _id, name }) => (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>
                    {/* Add edit here if needed */}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {totalPages > 1 && (
            <Pagination>
              {[...Array(totalPages)].map((_, idx) => (
                <Pagination.Item
                  key={idx + 1}
                  active={idx + 1 === currentPage}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          )}
        </>
      )}

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

export default TagList;






// import React, { useEffect, useState } from 'react';
// import api from '../../api';
// import { Table, Button, Form, Modal, Alert, Spinner } from 'react-bootstrap';

// const TagList = () => {
//   const [tags, setTags] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [showModal, setShowModal] = useState(false);
//   const [editTag, setEditTag] = useState(null);
//   const [nameInput, setNameInput] = useState('');

//   const fetchTags = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get('/tags');
//       setTags(res.data);
//     } catch (err) {
//       setError('Failed to load tags');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTags();
//   }, []);

//   const openModal = (tag = null) => {
//     setEditTag(tag);
//     setNameInput(tag ? tag.name : '');
//     setShowModal(true);
//     setError(null);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditTag(null);
//     setNameInput('');
//   };

//   const handleSave = async () => {
//     if (!nameInput.trim()) {
//       setError('Tag name is required');
//       return;
//     }
//     try {
//       if (editTag) {
//         await api.put(`/tags/${editTag._id}`, { name: nameInput });
//       } else {
//         await api.post('/tags', { name: nameInput });
//       }
//       closeModal();
//       fetchTags();
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to save tag');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this tag?')) return;
//     try {
//       await api.delete(`/tags/${id}`);
//       fetchTags();
//     } catch {
//       alert('Failed to delete tag');
//     }
//   };

//   if (loading) return <Spinner animation="border" />;

//   return (
//     <>
//       <h2>Tags</h2>
//       <Button className="mb-3" onClick={() => openModal()}>
//         Add Tag
//       </Button>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {tags.length === 0 ? (
//         <p>No tags found.</p>
//       ) : (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th style={{ width: '150px' }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tags.map((tag) => (
//               <tr key={tag._id}>
//                 <td>{tag.name}</td>
//                 <td>
//                   <Button
//                     variant="secondary"
//                     size="sm"
//                     onClick={() => openModal(tag)}
//                     className="me-2"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleDelete(tag._id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}

//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editTag ? 'Edit Tag' : 'Add Tag'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form.Group controlId="tagName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={nameInput}
//               onChange={(e) => setNameInput(e.target.value)}
//               placeholder="Enter tag name"
//             />
//           </Form.Group>
//           {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={closeModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSave}>
//             {editTag ? 'Update' : 'Add'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default TagList;




