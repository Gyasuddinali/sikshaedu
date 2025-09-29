import React, { useEffect, useState } from 'react';
import api from '../../api';

const PublicBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get('/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? <p>No posts yet.</p> : (
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              {post.image && <img src={`http://localhost:3001/uploads/${post.image}`} alt="Post" style={{ width: '100%', maxHeight: '300px' }} />}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PublicBlog;
