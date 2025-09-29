// import React, { useEffect, useState } from 'react';
// import { Form, Button, Alert, Spinner, Toast, ToastContainer } from 'react-bootstrap';
// import api from '../../api';

// const TagForm = ({ tagId, onSuccess, onCancel }) => {
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [toast, setToast] = useState({ show: false, message: '', variant: '' });

//   useEffect(() => {
//     if (tagId) {
//       setLoading(true);
//       api
//         .get(`/tags/${tagId}`)
//         .then((res) => {
//           setName(res.data.name);
//           setError(null);
//         })
//         .catch(() => setError('Failed to load tag data'))
//         .finally(() => setLoading(false));
//     } else {
//       setName('');
//       setError(null);
//     }
//   }, [tagId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       if (tagId) {
//         await api.put(`/tags/${tagId}`, { name });
//         setToast({ show: true, message: 'Tag updated successfully', variant: 'success' });
//       } else {
//         await api.post('/tags', { name });
//         setToast({ show: true, message: 'Tag created successfully', variant: 'success' });
//       }
//       onSuccess && onSuccess();
//     } catch {
//       setError('Failed to save tag');
//       setToast({ show: true, message: 'Failed to save tag', variant: 'danger' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {loading && <Spinner animation="border" />}
//       {error && <Alert variant="danger">{error}</Alert>}

//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="tagName" className="mb-3">
//           <Form.Label>Tag Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter tag name"
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" disabled={loading}>
//           {tagId ? 'Update Tag' : 'Create Tag'}
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

// export default TagForm;









import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import api from '../../api';

const TagForm = ({ tagId, onSuccess, onCancel }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', variant: '' });

  useEffect(() => {
    if (tagId) {
      setLoading(true);
      api
        .get(`/tags/${tagId}`)
        .then((res) => {
          setName(res.data.name);
          setError(null);
        })
        .catch(() => setError('Failed to load tag data'))
        .finally(() => setLoading(false));
    } else {
      setName('');
      setError(null);
    }
  }, [tagId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (tagId) {
        await api.put(`/tags/${tagId}`, { name });
        setToast({ show: true, message: 'Tag updated successfully', variant: 'success' });
      } else {
        await api.post('/tags', { name });
        setToast({ show: true, message: 'Tag created successfully', variant: 'success' });
      }
      onSuccess && onSuccess();
    } catch {
      setError('Failed to save tag');
      setToast({ show: true, message: 'Failed to save tag', variant: 'danger' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="tagName" className="mb-3">
          <Form.Label>Tag Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter tag name"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {tagId ? 'Update Tag' : 'Create Tag'}
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

export default TagForm;
