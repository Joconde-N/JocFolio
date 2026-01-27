'use client';

import { siteConfig } from '../config/site';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#232323',
      color: 'white',
      position: 'relative',
      padding: '6rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left Side - Content */}
          <div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '800',
              marginBottom: '0.5rem',
              letterSpacing: '-0.02em'
            }}>
              {siteConfig.name}
            </h1>
            
            <h2 style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
              fontWeight: '700',
              marginBottom: '1.5rem',
              color: '#d0d0d0'
            }}>
              Web Developer & Designer
            </h2>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              marginBottom: '2rem',
              lineHeight: '1.8',
              color: '#d0d0d0'
            }}>
              {siteConfig.description} I specialize in creating scalable, user-friendly applications 
              using modern technologies. With a strong foundation in both frontend and backend development, 
              I transform ideas into elegant digital solutions that make a real impact.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={scrollToProjects}
                className="btn"
                style={{
                  background: '#111111',
                  color: 'white',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  border: 'none'
                }}
              >
                View My Work
              </button>
              
              <a
                href={siteConfig.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#575757',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem'
                }}
              >
                Download CV
              </a>
            </div>
          </div>
          
          {/* Right Side - Image Card */}
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
                src="/hero-image.png" 
                alt="Ngoga Joconde" 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}