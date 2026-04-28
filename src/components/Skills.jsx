import React from 'react';
import { Code2, Database, Layout, Server, Sparkles, Zap, Shield, Smartphone } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Mastery',
      icon: <Layout size={28} />,
      color: '#4f46e5', // var(--accent-primary)
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'Modern CSS / SCSS', level: 90 },
        { name: 'JavaScript / TS', level: 92 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    {
      title: 'Backend Engineering',
      icon: <Server size={28} />,
      color: '#7c3aed', // var(--accent-secondary)
      skills: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'REST / GraphQL', level: 85 },
        { name: 'Auth & Security', level: 82 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Data Architecture',
      icon: <Database size={28} />,
      color: '#10b981',
      skills: [
        { name: 'MongoDB / Mongoose', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis Caching', level: 78 },
        { name: 'Data Modeling', level: 85 }
      ]
    },
    // {
    //   title: 'DevOps & Tools',
    //   icon: <Code2 size={28} />,
    //   color: '#f59e0b',
    //   skills: [
    //     { name: 'Docker / Kubernetes', level: 70 },
    //     { name: 'AWS / Cloud', level: 75 },
    //     { name: 'Git / CI-CD', level: 88 },
    //     { name: 'Unit Testing', level: 82 }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="bg-secondary">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Technical Arsenal</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            My toolkit is constantly evolving, focused on performance and modern best practices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="glass" style={{ padding: '2.5rem', transition: 'var(--transition)' }}
                 onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
                 onMouseOut={(e) => e.currentTarget.style.boxShadow = 'var(--shadow)'}>
              <div style={{ 
                color: cat.color, marginBottom: '2rem', display: 'flex', 
                alignItems: 'center', gap: '1rem' 
              }}>
                <div style={{ 
                  background: `${cat.color}15`, padding: '0.75rem', 
                  borderRadius: '1rem', display: 'flex' 
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{cat.title}</h3>
              </div>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '8px', background: 'var(--bg-primary)', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                      <div style={{ 
                        width: `${skill.level}%`, height: '100%', 
                        background: cat.color,
                        borderRadius: '10px',
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
