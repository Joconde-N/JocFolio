'use client';

import { siteConfig } from '../config/site';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Left Side - Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '380px',
              height: '450px',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              border: '4px solid #444444'
            }}>
              <img 
                src="/profile.jpg" 
                alt="Ngoga Joconde" 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: 'var(--text)'
            }}>
              Hi, I'm Ngoga Joconde
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text-light)',
              marginBottom: '1.5rem'
            }}>
              I'm a web developer and designer with a strong interest in building modern, intuitive web applications that balance functionality and visual clarity. 
              I enjoy turning ideas into practical, user-friendly experiences through clean, maintainable code and thoughtful design decisions.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text-light)'
            }}>
              I'm currently strengthening my skills across both frontend and backend development by working on real-world projects that challenge me to think critically and improve continuously. 
              Alongside development, I have a growing interest in design and enjoy creating interfaces that are simple, accessible, and engaging. 
              I'm curious, motivated, and always eager to learn new technologies while taking on challenges that push my abilities forward and help me grow toward becoming a well-rounded full-stack developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}