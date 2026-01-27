'use client';

import { skills } from '../config/site';

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, icon: '🎨' },
    { title: 'Backend', skills: skills.backend, icon: '⚙️' },
    { title: 'Database', skills: skills.database, icon: '🗄️' },
    { title: 'Tools', skills: skills.tools, icon: '🛠️' },
    { title: 'Design', skills: skills.design, icon: '✨' }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="card" style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--text)',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: 'var(--text-light)'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill.name}
                    {skillIndex < category.skills.length - 1 && ' •'}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}