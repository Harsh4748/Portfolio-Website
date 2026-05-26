import React from 'react';
import { ArrowRight, Code2, Globe } from 'lucide-react';
import profileImg from '../assets/image.jpeg';

const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      {/* Background Glows */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px',
        background: 'var(--accent-primary)', filter: 'blur(120px)', opacity: 0.15, zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
        background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1
      }}></div>

      <div className="animate-fade hero-text-container">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Available for Hire
        </h2>
        <h1 className="hero-title">
          Crafting Digital <br />
          <span style={{ 
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Experiences</span>
        </h1>
        <p className="hero-subtitle">
          I'm a Full-Stack Developer specializing in building exceptional digital products that combine aesthetic design with robust engineering.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            Explore Projects <ArrowRight size={20} />
          </a>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Harsh4748" target="_blank" rel="noopener noreferrer" className="btn glass" style={{ padding: '0.8rem', borderRadius: '50%', display: 'inline-flex' }}><Code2 size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn glass" style={{ padding: '0.8rem', borderRadius: '50%', display: 'inline-flex' }}><Globe size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="animate-fade hero-img-container">
         <div className="glass hero-img-card">
            <img src={profileImg} 
                 alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem' }} />
         </div>
      </div>
    </section>
  );
};

export default Hero;
