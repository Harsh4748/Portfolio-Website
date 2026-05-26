import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, cursor: 'pointer' }}>
          Harsh <span style={{ color: 'var(--accent-primary)' }}>Agrawal</span>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} style={{ 
                  fontWeight: 600, 
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  transition: '0.3s' 
                }} 
                onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={toggleTheme} className="btn" style={{ padding: '0.5rem', background: 'none', color: 'var(--text-primary)' }}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="mobile-toggle" 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-primary)', 
            cursor: 'pointer',
            display: 'none',
            padding: '0.5rem'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu glass" style={{
          position: 'absolute',
          top: '100%',
          left: '1.5rem',
          right: '1.5rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginTop: '0.5rem',
          boxShadow: 'var(--shadow)',
          animation: 'fadeIn 0.3s ease-out forwards'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)} style={{ 
                  fontWeight: 600, 
                  fontSize: '1.1rem',
                  color: 'var(--text-primary)',
                  display: 'block'
                }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1.25rem' }}>
            <button onClick={toggleTheme} className="btn" style={{ padding: '0.5rem', background: 'none', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {theme === 'light' ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
            </button>
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
