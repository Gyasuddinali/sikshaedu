// import React, { useEffect, useState, useMemo } from 'react';
// import api from '../../api';
// import {
//   Table,
//   Button,
//   Spinner,
//   Alert,
//   Form,
//   Row,
//   Col,
//   Pagination,
//   Toast,
//   ToastContainer,
// } from 'react-bootstrap';

// const POSTS_PER_PAGE = 5;

// const PostList = ({ onEditPost }) => {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Filters
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('');
//   const [categories, setCategories] = useState([]);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);

//   // Toast notifications
//   const [toast, setToast] = useState({ show: false, message: '', variant: '' });

//   // Debounce search
//   const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
//   useEffect(() => {
//     const handler = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
//     return () => clearTimeout(handler);
//   }, [searchTerm]);

//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get('/posts');
//       setPosts(res.data);
//       setFilteredPosts(res.data);
//     } catch (err) {
//       setError('Failed to load posts');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await api.get('/categories');
//       setCategories(res.data);
//     } catch {
//       // fail silently
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//     fetchCategories();
//   }, []);

//   // Filter posts on debounced search and category change
//   useEffect(() => {
//     let tempPosts = [...posts];

//     if (debouncedSearchTerm.trim()) {
//       const lowerSearch = debouncedSearchTerm.toLowerCase();
//       tempPosts = tempPosts.filter(
//         (post) =>
//           post.title.toLowerCase().includes(lowerSearch) ||
//           (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(lowerSearch)))
//       );
//     }

//     if (categoryFilter) {
//       tempPosts = tempPosts.filter((post) => post.category === categoryFilter);
//     }

//     setFilteredPosts(tempPosts);
//     setCurrentPage(1); // Reset page when filters change
//   }, [debouncedSearchTerm, categoryFilter, posts]);

//   // Pagination logic
//   const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
//   const currentPosts = useMemo(() => {
//     const start = (currentPage - 1) * POSTS_PER_PAGE;
//     return filteredPosts.slice(start, start + POSTS_PER_PAGE);
//   }, [filteredPosts, currentPage]);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this post?')) return;

//     try {
//       await api.delete(`/posts/${id}`);
//       setToast({ show: true, message: 'Post deleted successfully', variant: 'success' });
//       fetchPosts();
//     } catch (err) {
//       setToast({ show: true, message: 'Failed to delete post', variant: 'danger' });
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
//         <Col md={6}>
//           <Form.Control
//             type="text"
//             placeholder="Search by title or tags..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Col>
//         <Col md={4}>
//           <Form.Select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//           >
//             <option value="">All Categories</option>
//             {categories.map((cat) => (
//               <option key={cat._id} value={cat.name}>
//                 {cat.name}
//               </option>
//             ))}
//           </Form.Select>
//         </Col>
//         <Col md={2}>
//           <Button
//             onClick={() => {
//               setSearchTerm('');
//               setCategoryFilter('');
//             }}
//           >
//             Clear
//           </Button>
//         </Col>
//       </Row>

//       {currentPosts.length === 0 ? (
//         <p>No posts found.</p>
//       ) : (
//         <>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Tags</th>
//                 <th>Image</th>
//                 <th style={{ width: '180px' }}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentPosts.map(({ _id, title, category, tags, imageUrl }) => (
//                 <tr key={_id}>
//                   <td>{title}</td>
//                   <td>{category || '-'}</td>
//                   <td>{tags && tags.length > 0 ? tags.join(', ') : '-'}</td>
//                   <td>
//                     {imageUrl ? (
//                       <img
//                         src={`http://localhost:5000${imageUrl}`}
//                         alt={title}
//                         style={{ width: '100px', height: 'auto' }}
//                       />
//                     ) : (
//                       'No Image'
//                     )}
//                   </td>
//                   <td>
//                     <Button
//                       variant="secondary"
//                       size="sm"
//                       className="me-2"
//                       onClick={() => onEditPost && onEditPost(_id)}
//                     >
//                       Edit
//                     </Button>
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

//       {/* Toast notification */}
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

// export default PostList;









import React, { useEffect, useState } from 'react';
import { Table, Button, FormControl, InputGroup, Spinner, Modal, Toast, ToastContainer } from 'react-bootstrap';
import api from '../../api';
import TagForm from './TagForm';

const TagList = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editTagId, setEditTagId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  const fetchTags = async () => {
    setLoading(true);
    try {
      const res = await api.get('/tags', {
        params: { search: searchTerm },
      });
      setTags(res.data);
    } catch (err) {
      showToast('Failed to load tags', 'danger');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, [searchTerm]);

  const showToast = (message, variant = 'success') => {
    setToast({ show: true, message, variant });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this tag?')) return;

    try {
      await api.delete(`/tags/${id}`);
      showToast('Tag deleted');
      fetchTags();
    } catch {
      showToast('Failed to delete tag', 'danger');
    }
  };

  const openCreateForm = () => {
    setEditTagId(null);
    setShowForm(true);
  };

  const openEditForm = (id) => {
    setEditTagId(id);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    fetchTags();
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button onClick={openCreateForm}>+ Add Tag</Button>
        <InputGroup style={{ maxWidth: '300px' }}>
          <FormControl
            placeholder="Search tags"
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
            {tags.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center">
                  No tags found
                </td>
              </tr>
            ) : (
              tags.map((tag) => (
                <tr key={tag._id}>
                  <td>{tag.name}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => openEditForm(tag._id)} className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(tag._id)}>
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
          <Modal.Title>{editTagId ? 'Edit Tag' : 'Add Tag'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TagForm tagId={editTagId} onSuccess={handleFormSuccess} onCancel={() => setShowForm(false)} />
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

export default TagList;





