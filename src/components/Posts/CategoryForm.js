// import React, { useEffect, useState } from 'react';
// import { Form, Button, Alert, Spinner, Toast, ToastContainer } from 'react-bootstrap';
// import api from '../../api';

// const CategoryForm = ({ categoryId, onSuccess, onCancel }) => {
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [toast, setToast] = useState({ show: false, message: '', variant: '' });

//   useEffect(() => {
//     if (categoryId) {
//       setLoading(true);
//       api
//         .get(`/categories/${categoryId}`)
//         .then((res) => {
//           setName(res.data.name);
//           setError(null);
//         })
//         .catch(() => setError('Failed to load category data'))
//         .finally(() => setLoading(false));
//     } else {
//       setName('');
//       setError(null);
//     }
//   }, [categoryId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       if (categoryId) {
//         await api.put(`/categories/${categoryId}`, { name });
//         setToast({ show: true, message: 'Category updated successfully', variant: 'success' });
//       } else {
//         await api.post('/categories', { name });
//         setToast({ show: true, message: 'Category created successfully', variant: 'success' });
//       }
//       onSuccess && onSuccess();
//     } catch {
//       setError('Failed to save category');
//       setToast({ show: true, message: 'Failed to save category', variant: 'danger' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {loading && <Spinner animation="border" />}
//       {error && <Alert variant="danger">{error}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="categoryName" className="mb-3">
//           <Form.Label>Category Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter category name"
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" disabled={loading}>
//           {categoryId ? 'Update Category' : 'Create Category'}
//         </Button>{' '}
//         <Button variant="secondary" onClick={onCancel} disabled={loading}>
//           Cancel
//         </Button>
//       </Form>

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

// export default CategoryForm;










import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import api from '../../api';

const CategoryForm = ({ categoryId, onSuccess, onCancel }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      api
        .get(`/categories/${categoryId}`)
        .then((res) => {
          setName(res.data.name);
          setError(null);
        })
        .catch(() => setError('Failed to load category data'))
        .finally(() => setLoading(false));
    } else {
      setName('');
      setError(null);
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (categoryId) {
        await api.put(`/categories/${categoryId}`, { name });
        setToast({ show: true, message: 'Category updated successfully', variant: 'success' });
      } else {
        await api.post('/categories', { name });
        setToast({ show: true, message: 'Category created successfully', variant: 'success' });
      }
      onSuccess && onSuccess();
    } catch {
      setError('Failed to save category');
      setToast({ show: true, message: 'Failed to save category', variant: 'danger' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="categoryName" className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter category name"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {categoryId ? 'Update Category' : 'Create Category'}
        </Button>{' '}
        <Button variant="secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
      </Form>

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

export default CategoryForm;
