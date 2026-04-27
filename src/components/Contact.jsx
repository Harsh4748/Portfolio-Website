import React, { useState } from 'react';
import { Send, MapPin, Mail, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending....");
    const formData = new FormData(event.target);

    // IMPORTANT: Make sure to use your actual access key here!
    formData.append("access_key", "70416099-cdc2-42e9-97d5-2bb7464fe6e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      setResult("Message Sent Successfully!");
      event.target.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      console.log("Error", data);
      setStatus("error");
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="bg-secondary">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Let's discuss your project</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass" style={{ padding: '0.75rem', color: 'var(--accent-primary)' }}><Mail size={20} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email Me</p>
                  <p style={{ fontWeight: 600 }}>agrawalharsh6269@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="glass" style={{ padding: '0.75rem', color: 'var(--accent-primary)' }}><MapPin size={20} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</p>
                  <p style={{ fontWeight: 600 }}>Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass" style={{ padding: '2.5rem', position: 'relative' }}>
            {status === "success" ? (
              <div style={{ 
                height: '100%', display: 'flex', flexDirection: 'column', 
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                gap: '1.5rem', padding: '2rem'
              }}>
                <CheckCircle size={64} color="#10b981" />
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
                <button onClick={() => setStatus("idle")} className="btn glass">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label>Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label>Email Address</label>
                  <input type="email" name="email" required placeholder="john@example.com" />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label>Your Message</label>
                  <textarea name="message" required rows="4" placeholder="How can I help you?"></textarea>
                </div>
                
                <button type="submit" disabled={status === "sending"} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {status === "sending" ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                
                {status === "error" && (
                  <p style={{ color: '#ef4444', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
                    {result || "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
