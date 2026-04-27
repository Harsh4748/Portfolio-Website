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

        {/* Mobile Toggle Placeholder */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
           <Menu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
