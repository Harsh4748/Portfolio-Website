import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <div className="about-grid">
        <div className="about-img-container">
          <div className="glass about-img-card">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                 alt="Coding" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2.5rem' }} />
          </div>
          {/* Experience Badge */}
          <div className="glass about-badge">
            <h4 style={{ fontSize: '2.5rem', fontWeight: 800 }}>3+</h4>
            <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Years of <br /> Excellence</p>
          </div>
        </div>

        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>Designing the Future <br /> of the Web</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
            I am a full-stack developer based in New York, passionate about building digital products that make a difference. 
            With a background in both design and engineering, I bridge the gap between vision and reality.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
            I specialize in the MERN stack, crafting high-performance applications that are scalable, secure, and intuitive. 
            My approach is always user-centric, ensuring that every interaction is meaningful.
          </p>
          
          <div className="about-features-grid">
            <div className="glass" style={{ padding: '1.5rem' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Creative Mind</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Problem solver with an eye for detail and aesthetics.</p>
            </div>
            <div className="glass" style={{ padding: '1.5rem' }}>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Technical Skill</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Expertise in modern frameworks and scalable architectures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
