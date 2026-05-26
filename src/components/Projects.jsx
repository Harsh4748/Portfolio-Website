import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "SaaS & Web Apps", "AI & Automation", "E-Commerce & Finance", "Utilities"];

  const projects = [
    {
      title: "Wholesale Cold Drinks Distribution ERP",
      category: "SaaS & Web Apps",
      problem: "Beverage distributors struggle with manual stock tracking (carton vs. bottle conversions), complex calculations across multiple retail shops, and slow paper-based invoicing.",
      solution: "Developed an enterprise billing & stock ERP that automates packaging conversions, offers SuperAdmin multi-shop consolidated reports, implements granular permission overrides (RBAC+), and automatically fires professional PDF receipts to customers via WhatsApp API.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "JARVIS: Autonomous AI Assistant",
      category: "AI & Automation",
      problem: "Managing browser automation scripts locally on a laptop is inefficient and usually requires manually running scripts in terminal environments while at the desk.",
      solution: "Engineered a Python AI assistant controlled remotely via a private Telegram Bot. Created dual-mode operation support (running Playwright automation locally for tasks like WhatsApp/YouTube, or mobile deep-linking) with automated failover logic across Gemini 2.0 and Llama 3.",
      tech: ["Python", "Playwright", "Gemini API", "Telegram Bot API", "CustomTkinter"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "Agrawal Mobile Banking Info Utility",
      category: "Utilities",
      problem: "Local merchants need to quickly check and record customers' bank account details using only their mobile numbers, and print physical invoices/receipts instantly.",
      solution: "Created a banking information lookup and receipt printing tool. Designed a high-speed search interface queryable by mobile or account number, simple account management logs, and a clean print utility that formats transactions for immediate physical thermal printer output.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Axios"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "LuxeThreads E-Commerce Store",
      category: "E-Commerce & Finance",
      problem: "Traditional clothes shopping sites lack sophisticated back-office features like role auditing, ledger transaction integrity, coupon logic, and built-in dispute resolution platforms.",
      solution: "Built a fully-featured e-commerce clothing application equipped with custom secure user wallets, platform financial ledger tracking, Razorpay integration, administrative auditing logs, coupon systems, and an arbitration platform to manage buyer-seller conflicts.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay API", "Tailwind CSS", "JWT"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "Multi-Tenant ERP Builder SaaS",
      category: "SaaS & Web Apps",
      problem: "Building custom software for varying business models is time-consuming and expensive, yet standard SaaS platforms are too rigid.",
      solution: "Engineered a multi-tenant SaaS that empowers businesses to design custom forms, configure automated business processes, set role-based permissions, and handle subscriptions using an integrated billing dashboard powered by Razorpay.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay API", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "QueueLess: Virtual Queue Platform",
      category: "SaaS & Web Apps",
      problem: "Physical lines cause customer frustration and lost revenue, and customers lack options to trade or exchange places dynamically.",
      solution: "Designed a waiting list management application that eliminates lines via virtual queues, real-time position trackers, and Socket.io events. Solved concurrency issues using a strict position-based DB model that allows users to swap queue positions safely.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "GSAP", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1590086782957-93c06ef217b4?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-secondary">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Selected Works</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            A curated collection of projects where design meets technical excellence.
          </p>
        </div>

        {/* Categories Filtering Menu */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          marginBottom: '4rem' 
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="btn glass"
              style={{
                padding: '0.6rem 1.5rem',
                fontSize: '0.9rem',
                border: selectedCategory === cat ? '2px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                background: selectedCategory === cat ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(124, 58, 237, 0.15))' : 'var(--glass-bg)',
                color: selectedCategory === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: selectedCategory === cat ? '700' : '500',
                transform: selectedCategory === cat ? 'scale(1.05)' : 'none',
                boxShadow: selectedCategory === cat ? '0 10px 20px -10px rgba(79, 70, 229, 0.4)' : 'none',
                transition: 'var(--transition)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {filteredProjects.map((project, idx) => (
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
      {activeProject && createPortal(
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 9999, 
          padding: '4rem 1rem',
          backdropFilter: 'blur(15px)', overflowY: 'auto'
        }} onClick={() => setActiveProject(null)}>
          <div className="glass modal-card" onClick={e => e.stopPropagation()}>
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
            
            <div className="modal-content-grid">
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
            
            <div className="modal-footer">
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
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
