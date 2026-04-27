import React, { useState, useEffect } from 'react';
import { ExternalLink, Code2, Info, ChevronRight, X } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeProject]);

  const projects = [
    {
      title: "Visionary Analytics",
      category: "SaaS Dashboard",
      problem: "Complex data silos made it impossible for executives to get a clear picture of their business metrics in real-time.",
      solution: "Built a robust data orchestration engine with Node.js and MongoDB, featuring a high-performance React dashboard with real-time WebSocket updates.",
      tech: ["React", "Node.js", "Chart.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "LuxeCommerce",
      category: "E-Commerce Platform",
      problem: "Traditional e-commerce platforms were too slow for high-end luxury brands needing immersive storytelling.",
      solution: "Implemented a headless commerce architecture using Next.js for blazing fast performance and a custom-built animation engine for product reveals.",
      tech: ["Next.js", "Stripe", "Framer Motion", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "Aura AI",
      category: "Generative AI Tool",
      problem: "Content creators needed a way to generate unique brand-consistent imagery without technical prompt engineering.",
      solution: "Integrated Stable Diffusion with a custom-trained model to provide a 'one-click' brand-styling interface for marketing teams.",
      tech: ["React", "Python", "FastAPI", "AWS"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Selected Works</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            A curated collection of projects where design meets technical excellence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="glass" style={{ 
              overflow: 'hidden', transition: 'var(--transition)',
              padding: '1.25rem', display: 'flex', flexDirection: 'column'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-15px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ height: '280px', overflow: 'hidden', borderRadius: '1.25rem', marginBottom: '1.5rem' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.75rem', margin: '0.75rem 0 1.25rem' }}>{project.title}</h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                  {project.tech.map(t => (
                    <span key={t} className="glass" style={{ 
                      fontSize: '0.8rem', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', fontWeight: 500,
                      background: 'var(--bg-primary)', opacity: 0.8
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setActiveProject(project)} className="btn glass" style={{ flex: 1, fontSize: '0.9rem', justifyContent: 'center' }}>
                  Case Study
                </button>
                <a href={project.link} className="btn btn-primary" style={{ flex: 1, fontSize: '0.9rem', justifyContent: 'center' }}>
                  View Project <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal - Fixed & Scrollable Content */}
      {activeProject && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 9999, display: 'flex', 
          alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem',
          backdropFilter: 'blur(15px)', overflowY: 'auto'
        }} onClick={() => setActiveProject(null)}>
          <div className="glass" style={{ 
            maxWidth: '850px', width: '100%', padding: '3.5rem', position: 'relative',
            background: 'var(--bg-primary)', color: 'var(--text-primary)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            margin: 'auto', // Centering trick with flex-start and auto margins
            animation: 'fadeIn 0.4s ease-out'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveProject(null)} style={{ 
              position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', 
              color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%',
              transition: 'var(--transition)'
            }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
               onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <X size={24} />
            </button>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.9rem' }}>
                {activeProject.category}
              </span>
              <h2 style={{ fontSize: '3rem', margin: '0.5rem 0', fontWeight: 800 }}>{activeProject.title}</h2>
              <div style={{ height: '4px', width: '60px', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', borderRadius: '10px' }}></div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
              <div className="animate-fade" style={{ animationDelay: '0.1s' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700 }}>
                  <span style={{ color: 'var(--accent-primary)', background: 'var(--bg-secondary)', padding: '0.25rem 0.6rem', borderRadius: '0.5rem' }}>01</span> 
                  THE CHALLENGE
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>{activeProject.problem}</p>
              </div>
              <div className="animate-fade" style={{ animationDelay: '0.2s' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700 }}>
                  <span style={{ color: 'var(--accent-secondary)', background: 'var(--bg-secondary)', padding: '0.25rem 0.6rem', borderRadius: '0.5rem' }}>02</span> 
                  THE SOLUTION
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>{activeProject.solution}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                {activeProject.tech.map(t => (
                  <span key={t} style={{ fontWeight: 600, color: 'var(--accent-primary)', fontSize: '0.95rem' }}>#{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={activeProject.github} className="btn glass" style={{ fontSize: '0.9rem' }}>
                  Code <Code2 size={18} />
                </a>
                <a href={activeProject.link} className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                  Live Demo <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
