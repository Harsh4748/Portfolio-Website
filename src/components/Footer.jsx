import React from 'react';
import { Code2, Globe, Send, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0 2rem', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent-primary)' }}>Portfolio</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
              Building the future of the web, one pixel at a time.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/Harsh4748" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.75rem', display: 'inline-flex' }}><Code2 size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.75rem', display: 'inline-flex' }}><Globe size={20} /></a>
            <a href="mailto:agrawalharsh6269@gmail.com" className="glass" style={{ padding: '0.75rem', display: 'inline-flex' }}><Send size={20} /></a>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', 
          textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1.5rem'
        }}>
          <p>© {new Date().getFullYear()} Harsh Agrawal. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn glass" style={{ padding: '0.5rem' }}>
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
