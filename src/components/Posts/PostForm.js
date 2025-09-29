import React, { useState, useEffect } from 'react';
import api from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  author: '',
  readingTime: '',
  published: false,
  category: '',
  tags: [],
};

const PostForm = () => {
  const [post, setPost] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Load categories and tags
  useEffect(() => {
    const fetchMeta = async () => {
      const [catRes, tagRes] = await Promise.all([
        api.get('/categories'),
        api.get('/tags'),
      ]);
      setCategories(catRes.data);
      setTags(tagRes.data);
    };
    fetchMeta();

    if (id) {
      api.get(`/posts/${id}`).then((res) => {
        const data = res.data;
        setPost({
          title: data.title || '',
          slug: data.slug || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          author: data.author || '',
          readingTime: data.readingTime || '',
          published: data.published || false,
          category: data.category || '',
          tags: data.tags || [],
        });
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in post) {
      if (key === 'tags') {
        formData.append('tags', JSON.stringify(post.tags));
      } else {
        formData.append(key, post[key]);
      }
    }
    if (image) formData.append('image', image);

    try {
      if (id) {
        await api.put(`/posts/${id}`, formData);
      } else {
        await api.post('/posts', formData);
      }
      navigate('/admin');
    } catch (err) {
      console.error('Post submit failed', err);
      alert('Failed to save post.');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '700px' }}>
      <h2>{id ? 'Edit' : 'Create'} Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-3">
          <label>Title</label>
          <input
            className="form-control"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>

        {/* Slug */}
        <div className="mb-3">
          <label>Slug (optional)</label>
          <input
            className="form-control"
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
          />
        </div>

        {/* Excerpt */}
        <div className="mb-3">
          <label>Excerpt</label>
          <textarea
            className="form-control"
            value={post.excerpt}
            onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
          />
        </div>

        {/* Content */}
        <div className="mb-3">
          <label>Content</label>
          <textarea
            className="form-control"
            rows={6}
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            required
          />
        </div>

        {/* Author */}
        <div className="mb-3">
          <label>Author</label>
          <input
            className="form-control"
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
          />
        </div>

        {/* Reading Time */}
        <div className="mb-3">
          <label>Reading Time (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={post.readingTime}
            onChange={(e) => setPost({ ...post, readingTime: e.target.value })}
          />
        </div>

        {/* Published Checkbox */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={post.published}
            onChange={(e) => setPost({ ...post, published: e.target.checked })}
            id="publishedCheck"
          />
          <label className="form-check-label" htmlFor="publishedCheck">
            Published
          </label>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label>Category</label>
          <select
            className="form-select"
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tags */}
        <div className="mb-3">
          <label>Tags</label>
          <select
            className="form-select"
            multiple
            value={post.tags}
            onChange={(e) =>
              setPost({
                ...post,
                tags: Array.from(e.target.selectedOptions, (option) => option.value),
              })
            }
          >
            {tags.map((tag) => (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label>Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button className="btn btn-success" type="submit">
          {id ? 'Update' : 'Create'} Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
