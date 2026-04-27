import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="container">
      <h2 className="section-title">Latest Articles</h2>
      {loading ? (
        <div style={{ textAlign: 'center' }}>Loading articles...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {posts.map(post => (
            <article key={post._id} className="glass" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', width: '100%', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                     onError={(e) => e.target.style.display = 'none'} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ 
                  backgroundColor: 'var(--accent-primary)', color: 'white', 
                  padding: '0.2rem 0.6rem', borderRadius: '0.3rem', fontSize: '0.75rem' 
                }}>
                  {post.category}
                </span>
                <h3 style={{ margin: '1rem 0', fontSize: '1.25rem' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
