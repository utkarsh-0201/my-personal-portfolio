import React, { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'apis', name: 'APIs & Microservices' },
    { id: 'automation', name: 'Automation & Tooling' },
    { id: 'security', name: 'Security' },
  ];

  const projectsData = [
    {
      id: 1,
      name: 'FastAPI Microservices, Automation & CMDB',
      company: 'BT Group',
      period: '2020 – Present',
      category: 'apis',
      shortDesc: 'Designed and engineered high-throughput, async API endpoints using Python asyncio and FastAPI for enterprise traffic.',
      techStack: ['FastAPI', 'asyncio', 'SQLAlchemy', 'PostgreSQL', 'GitLab CI/CD', 'Docker', 'CMDB'],
      bullets: [
        'Designed high-throughput, async API endpoints using Python asyncio and FastAPI, establishing critical core backend services and reducing processing bottlenecks for enterprise traffic.',
        'Collaborated closely with cross-functional and geographically-dispersed technical teams to integrate third-party APIs for major network vendors (Palo Alto, Check Point, Cisco, Fortinet), delivering ~£30K in direct infrastructure cost savings.',
        'Built and optimized database structures utilizing SQLAlchemy ORM and PostgreSQL, restructuring complex schemas to dramatically accelerate query resolution and data pipeline reliability.',
        'Instituted exhaustive test suites via PyTest (Unit and Integration Testing), significantly minimizing test regression failures and accelerating deployment workflows through automated GitLab CI/CD pipelines.',
        'Secured critical backend architecture by executing enterprise-grade JWT-based authentication and OAuth2 protocols across distributed workflows.'
      ]
    },
    {
      id: 2,
      name: 'Enterprise Monitoring, Tooling & Automation (Opsview)',
      company: 'BT Group',
      period: '2020 – Present',
      category: 'automation',
      shortDesc: 'Developed and containerized over 50 production-grade automated monitoring plugins in Python for operations visibility.',
      techStack: ['Python', 'Docker', 'Opsview', 'Kafka', 'Linux', 'Telemetry'],
      bullets: [
        'Developed and containerized over 50 production-grade automated monitoring plugins in Python, substantially enhancing cross-platform operational visibility and workflow tracking.',
        'Architected an automated multi-platform device discovery engine that transformed onboarding workflows, decreasing setup times and enabling modern microservices-style automation pipelines.',
        'Automated data extraction and inventory synchronization pipelines, creating cleaner telemetry streams that empowered leadership to analyze systemic trends and track team operational health.'
      ]
    },
    {
      id: 3,
      name: 'CyberArk PAM Integration & Secure Credential Workflows',
      company: 'BT Group',
      period: '2020 – Present',
      category: 'security',
      shortDesc: 'Engineered robust CyberArk PAM custom automation scripts and Active Directory integration workflows.',
      techStack: ['Python', 'CyberArk PAM', 'Active Directory', 'RBAC', 'Secure Coding', 'Auditing'],
      bullets: [
        'Engineered robust CyberArk PAM custom automation scripts and integrations for seamless cross-device communication, rigorously practicing end-to-end secure coding methodologies.',
        'Automated complex multi-domain provisioning workflows by linking Active Directory configurations directly with domain access, generating detailed auditing data sets and saving 2+ hours of manual overhead daily.'
      ]
    },
    {
      id: 4,
      name: 'Unified Broadband Automated Configuration Engine',
      company: 'Hughes Systique Pvt Ltd',
      period: '2019 – 2020',
      category: 'automation',
      shortDesc: 'Designed and built a Python-based configuration tracking and automation versioning tool with a GUI dashboard.',
      techStack: ['Python', 'GUI Dashboard', 'Linux', 'Windows', 'Version Tracking', 'Auditing'],
      bullets: [
        'Designed and built a Python-based configuration tracking and automation versioning tool, establishing a robust system to track code changes, conduct precise diff-based audits, and minimize system downtime.',
        'Developed an intuitive GUI dashboard to visualize complex version trees and system status trends, directly boosting workflow clarity for multi-disciplinary network operation teams.',
        'Engaged actively in code reviews, providing peer feedback, maintaining alignment with architectural standards, and collaborating with cross-platform Linux and Windows environments.'
      ]
    },
    {
      id: 5,
      name: 'Tradeindia.com Platform Migration & Modernization',
      company: 'Infocom Networks Ltd',
      period: '2016 – 2019',
      category: 'apis',
      shortDesc: 'Spearheaded the migration of a massive, high-traffic B2B web application from legacy Perl to Django framework.',
      techStack: ['Django', 'Python', 'Perl', 'PostgreSQL', 'MySQL', 'JQuery', 'Database Optimization'],
      bullets: [
        'Spearheaded the migration of a massive, high-traffic B2B web application from a legacy Perl architecture over to a modern Django (Python) framework, radically improving code maintainability and team development velocity.',
        'Collaborated in tandem with front-end engineering teams to smoothly bind client-side interface elements with underlying Python business logic, ensuring exceptional quality and architectural uniformity.',
        'Designed and optimized centralized business-critical database modules covering CRM, HRM, and Finance systems to handle elevated traffic levels and deliver fast response rates.'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeCategory || (activeCategory === 'security' && proj.id === 3));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects Portfolio</h2>

        {/* Categories Filter */}
        <div className="projects-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid-cols-3 projects-grid">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className="glass-card project-card"
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-header-meta">
                <span className="project-company">{proj.company}</span>
                <span className="project-period">{proj.period}</span>
              </div>
              <h3 className="project-card-title">{proj.name}</h3>
              <p className="project-card-desc">{proj.shortDesc}</p>
              
              <div className="project-tags">
                {proj.techStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="badge cyan">{tech}</span>
                ))}
                {proj.techStack.length > 3 && (
                  <span className="badge-more">+{proj.techStack.length - 3} more</span>
                )}
              </div>
              
              <button className="project-readmore-btn">
                Read Details
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="modal-header">
                <span className="badge purple">{selectedProject.company}</span>
                <h2 className="modal-title">{selectedProject.name}</h2>
                <p className="modal-period">{selectedProject.period}</p>
              </div>
              
              <div className="modal-body">
                <h4 className="modal-section-title">Key Contributions & Architecture</h4>
                <ul className="modal-bullets">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                
                <h4 className="modal-section-title">Technology & Tools Utilized</h4>
                <div className="modal-tech-stack">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="badge cyan">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
