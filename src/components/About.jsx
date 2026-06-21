import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      role: 'Platform Security Professional',
      company: 'BT Group',
      location: 'Gurugram, Haryana, IN',
      period: 'April 2020 – Present',
      projects: [
        {
          name: 'AI-Driven SOC Assistance & RAG Workflows (In Progress)',
          bullets: [
            'Currently leveraging AI to design and build a Retrieval-Augmented Generation (RAG) agent workflow to provide intelligent assistance for Security Operations Center (SOC) logs and real-time security device monitoring.',
            'Developing context-aware search pipelines that parse incoming security telemetry streams to correlate threats and suggest remediation actions, significantly accelerating threat analysis latency.'
          ]
        },
        {
          name: 'FastAPI Microservices, Workflow Automation & CMDB Integration',
          bullets: [
            'Designed and engineered high-throughput, async API endpoints using Python asyncio and FastAPI, establishing critical core backend services and reducing processing bottlenecks for enterprise traffic.',
            'Collaborated closely with cross-functional and geographically-dispersed technical teams to integrate third-party APIs for major network vendors (Palo Alto, Check Point, Cisco, Fortinet), delivering ~£30K in direct infrastructure cost savings.',
            'Built and optimized database structures utilizing SQLAlchemy ORM and PostgreSQL, restructuring complex schemas to dramatically accelerate query resolution and data pipeline reliability.',
            'Instituted exhaustive test suites via PyTest (Unit and Integration Testing), significantly minimizing test regression failures and accelerating deployment workflows through automated GitLab CI/CD pipelines.',
            'Secured critical backend architecture by executing enterprise-grade JWT-based authentication and OAuth2 protocols across distributed workflows.'
          ]
        },
        {
          name: 'Enterprise Monitoring, Tooling & Automation Platform (Opsview)',
          bullets: [
            'Developed and containerized over 50 production-grade automated monitoring plugins in Python, substantially enhancing cross-platform operational visibility and workflow tracking.',
            'Architected an automated multi-platform device discovery engine that transformed onboarding workflows, decreasing setup times and enabling modern microservices-style automation pipelines.',
            'Automated data extraction and inventory synchronization pipelines, creating cleaner telemetry streams that empowered leadership to analyze systemic trends and track team operational health.'
          ]
        },
        {
          name: 'CyberArk PAM Integration & Secure Credential Workflows',
          bullets: [
            'Engineered robust CyberArk PAM custom automation scripts and integrations for seamless cross-device communication, rigorously practicing end-to-end secure coding methodologies.',
            'Automated complex multi-domain provisioning workflows by linking Active Directory configurations directly with domain access, generating detailed auditing data sets and saving 2+ hours of manual overhead daily.'
          ]
        }
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Hughes Systique Pvt Ltd',
      location: 'Gurugram, Haryana, IN',
      period: 'May 2019 – March 2020',
      projects: [
        {
          name: 'Unified Broadband (UBB) — Automated Configuration Engine',
          bullets: [
            'Designed and built a Python-based configuration tracking and automation versioning tool, establishing a robust system to track code changes, conduct precise diff-based audits, and minimize system downtime.',
            'Developed an intuitive GUI dashboard to visualize complex version trees and system status trends, directly boosting workflow clarity for multi-disciplinary network operation teams.',
            'Engaged actively in code reviews, providing peer feedback, maintaining alignment with architectural standards, and collaborating with cross-platform Linux and Windows environments.'
          ]
        }
      ]
    },
    {
      role: 'Software Developer',
      company: 'Infocom Networks Ltd',
      location: 'New Delhi, IN',
      period: 'November 2016 – May 2019',
      projects: [
        {
          name: 'Tradeindia.com — Platform Migration & Modernization',
          bullets: [
            'Spearheaded the migration of a massive, high-traffic B2B web application from a legacy Perl architecture over to a modern Django (Python) framework, radically improving code maintainability and team development velocity.',
            'Collaborated in tandem with front-end engineering teams to smoothly bind client-side interface elements with underlying Python business logic, ensuring exceptional quality and architectural uniformity.',
            'Designed and optimized centralized business-critical database modules covering CRM, HRM, and Finance systems to handle elevated traffic levels and deliver fast response rates.'
          ]
        }
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Uttar Pradesh Technical University',
      period: 'Graduated: 2016',
      details: 'Score: 72.4% - Grounded in algorithms, software engineering principles, and databases.'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: 'Professional Certification',
      details: 'Validation of foundational knowledge of cloud services and how those services are provided with Microsoft Azure.'
    }
  ];

  const achievements = [
    {
      title: '£30K Financial Savings',
      desc: 'Engineered high-performance custom Python service integrations for Palo Alto, Cisco, and Fortinet platforms, entirely removing third-party vendor single points of dependency.'
    },
    {
      title: 'Workflow Overhead Reduction',
      desc: 'Saved over 2 hours per day in operational latency by establishing automated Active Directory synchronization mechanisms.'
    },
    {
      title: 'Legacy Migration Lead',
      desc: 'Successfully migrated a core B2B commercial platform from Perl to Django, dramatically scaling up concurrent request limits.'
    },
    {
      title: 'Automation at Scale',
      desc: 'Maintained, tested, and systematically deployed 50+ enterprise-level monitoring tools across cross-platform live systems.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About & Experience</h2>

        <div className="about-layout-grid">
          {/* Profile Picture Card */}
          <div className="about-pic-col animate-fade-in">
            <div className="glass-card about-pic-card">
              <div className="about-pic-frame">
                <img src="/avatar.png" alt="Utkarsh Singh" className="about-pic" />
                <div className="about-pic-glow"></div>
              </div>
              <div className="about-bio-brief">
                <h3>Utkarsh Singh</h3>
                <p>Senior Software Engineer, Platform Security & AI Generalist</p>
                <div className="about-meta-info">
                  <span className="meta-badge">10+ Years Exp</span>
                  <span className="meta-badge">Gurugram, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content / Timeline */}
          <div className="about-content-col">
            {/* Tab Buttons */}
            <div className="about-tabs">
              <button
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Work Experience
              </button>
              <button
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education & Certifications
              </button>
              <button
                className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                onClick={() => setActiveTab('achievements')}
              >
                Key Achievements
              </button>
            </div>

            {/* Tab Contents */}
            <div className="tab-content">
              {activeTab === 'experience' && (
                <div className="timeline">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="timeline-item glass-card">
                      <div className="timeline-dot"></div>
                      <div className="timeline-header">
                        <div>
                          <h3 className="timeline-role">{exp.role}</h3>
                          <h4 className="timeline-company">{exp.company}</h4>
                        </div>
                        <div className="timeline-meta">
                          <span className="timeline-period">{exp.period}</span>
                          <span className="timeline-location">{exp.location}</span>
                        </div>
                      </div>
                      <div className="timeline-body">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="timeline-project">
                            <h5 className="project-title">{proj.name}</h5>
                            <ul className="project-bullets">
                              {proj.bullets.map((bullet, bIdx) => (
                                <li key={bIdx}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="grid-cols-2">
                  <div className="glass-card">
                    <h3 className="card-heading-icon">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="color-purple-svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      Education
                    </h3>
                    {education.map((edu, idx) => (
                      <div key={idx} className="education-item">
                        <h4 className="edu-degree">{edu.degree}</h4>
                        <p className="edu-institution">{edu.institution} | <span className="text-highlight">{edu.period}</span></p>
                        <p className="edu-details">{edu.details}</p>
                      </div>
                    ))}
                  </div>

                  <div className="glass-card">
                    <h3 className="card-heading-icon">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="color-cyan-svg">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Certifications
                    </h3>
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="cert-item">
                        <h4 className="cert-name">{cert.name}</h4>
                        <p className="cert-issuer">{cert.issuer} | <span className="text-highlight">{cert.date}</span></p>
                        <p className="cert-details">{cert.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="grid-cols-2">
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="glass-card achievement-card">
                      <div className="achievement-icon">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 8h.01M12 12h.01" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="achievement-title">{ach.title}</h4>
                        <p className="achievement-desc">{ach.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
