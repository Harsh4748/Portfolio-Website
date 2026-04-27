import React from 'react';
import { ArrowRight, Code2, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px' }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px',
        background: 'var(--accent-primary)', filter: 'blur(120px)', opacity: 0.15, zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
        background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1
      }}></div>

      <div className="animate-fade" style={{ flex: 1.2 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-primary)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Available for Hire
        </h2>
        <h1 style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
          Crafting Digital <br />
          <span style={{ 
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Experiences</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '550px', marginBottom: '3rem', lineHeight: 1.8 }}>
          I'm a Full-Stack Developer specializing in building exceptional digital products that combine aesthetic design with robust engineering.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            Explore Projects <ArrowRight size={20} />
          </a>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com" className="btn glass" style={{ padding: '0.8rem', borderRadius: '50%' }}><Code2 size={20} /></a>
            <a href="https://linkedin.com" className="btn glass" style={{ padding: '0.8rem', borderRadius: '50%' }}><Globe size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="animate-fade" style={{ flex: 0.8, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
         <div className="glass" style={{ 
           width: '400px', height: '500px', borderRadius: '2.5rem', overflow: 'hidden',
           padding: '1rem', border: '1px solid var(--glass-border)',
           boxShadow: 'var(--shadow)', transform: 'rotate(2deg)'
         }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                 alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem' }} />
         </div>
      </div>
    </section>
  );
};

export default Hero;
