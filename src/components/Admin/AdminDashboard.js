// import React, { useState } from 'react';
// import { Container, Nav, Tab, Row, Col, Button, Modal } from 'react-bootstrap';
// import PostList from '../Posts/PostList';
// import PostForm from '../Posts/PostForm';
// import CategoryList from '../Posts/CategoryList';
// import TagList from '../Posts/TagList';

// const AdminDashboard = () => {
//   const [activeKey, setActiveKey] = useState('posts');
//   const [editingPostId, setEditingPostId] = useState(null);
//   const [showPostForm, setShowPostForm] = useState(false);

//   const openCreatePostForm = () => {
//     setEditingPostId(null);
//     setShowPostForm(true);
//   };

//   const openEditPostForm = (postId) => {
//     setEditingPostId(postId);
//     setShowPostForm(true);
//   };

//   const closePostForm = () => {
//     setShowPostForm(false);
//     setEditingPostId(null);
//   };

//   return (
//     <Container className="mt-4">
//       <h1>Admin Dashboard</h1>
//       <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
//         <Row>
//           <Col sm={3}>
//             <Nav variant="pills" className="flex-column">
//               <Nav.Item>
//                 <Nav.Link eventKey="posts">Posts</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="categories">Categories</Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link eventKey="tags">Tags</Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>
//           <Col sm={9}>
//             <Tab.Content>
//               <Tab.Pane eventKey="posts">
//                 <Button className="mb-3" onClick={openCreatePostForm}>
//                   Create New Post
//                 </Button>
//                 <PostList onEditPost={openEditPostForm} />
//               </Tab.Pane>
//               <Tab.Pane eventKey="categories">
//                 <CategoryList />
//               </Tab.Pane>
//               <Tab.Pane eventKey="tags">
//                 <TagList />
//               </Tab.Pane>
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>

//       <Modal show={showPostForm} onHide={closePostForm} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>{editingPostId ? 'Edit Post' : 'Create Post'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <PostForm
//             postId={editingPostId}
//             onSuccess={() => {
//               closePostForm();
//               // optionally you can trigger a refresh of posts if PostForm doesn't do that internally
//             }}
//           />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default AdminDashboard;





import React, { useState } from 'react';
import { Container, Nav, Tab, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryList from '../Posts/CategoryList';
import TagList from '../Posts/TagList';
import PostList from '../Posts/PostList';

const AdminDashboard = () => {
  const [key, setKey] = useState('posts');

  return (
    <Container className="mt-4">
      <h2>Admin Dashboard</h2>

      <Tab.Container activeKey={key} onSelect={setKey}>
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="posts">Posts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="categories">Categories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tags">Tags</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="posts">
            {/* ✅ Create Post Button */}
            <div className="d-flex justify-content-end mb-3">
              <Link to="/admin/posts/new">
                <Button variant="primary">➕ Create New Post</Button>
              </Link>
            </div>
            <PostList />
          </Tab.Pane>

          <Tab.Pane eventKey="categories">
            <CategoryList />
          </Tab.Pane>

          <Tab.Pane eventKey="tags">
            <TagList />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default AdminDashboard;
