import React, { useState } from 'react';
import { TECH_ICONS } from './icons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frameworks', name: 'APIs & Frameworks' },
    { id: 'languages', name: 'Languages & DBs' },
    { id: 'devops', name: 'DevOps & CI/CD' },
    { id: 'testing', name: 'Testing & OS' },
    { id: 'security', name: 'Security & Core' },
  ];

  const skillData = [
    // Frameworks
    { name: 'FastAPI', level: 95, label: 'Expert', category: 'frameworks' },
    { name: 'Flask', level: 90, label: 'Expert', category: 'frameworks' },
    { name: 'Django', level: 85, label: 'Advanced', category: 'frameworks' },
    { name: 'RESTful API Design', level: 95, label: 'Expert', category: 'frameworks' },
    { name: 'Async Programming (asyncio)', level: 95, label: 'Expert', category: 'frameworks' },
    
    // Languages & Databases
    { name: 'Python', level: 98, label: 'Expert', category: 'languages' },
    { name: 'SQL', level: 90, label: 'Expert', category: 'languages' },
    { name: 'PostgreSQL', level: 90, label: 'Expert', category: 'languages' },
    { name: 'MySQL / MS SQL', level: 85, label: 'Advanced', category: 'languages' },
    { name: 'SQLAlchemy (ORM)', level: 95, label: 'Expert', category: 'languages' },
    { name: 'Perl', level: 75, label: 'Advanced', category: 'languages' },
    { name: 'JQuery', level: 80, label: 'Advanced', category: 'languages' },

    // DevOps
    { name: 'GitLab CI/CD & Runners', level: 92, label: 'Expert', category: 'devops' },
    { name: 'AWS', level: 80, label: 'Advanced', category: 'devops' },
    { name: 'Docker', level: 88, label: 'Advanced', category: 'devops' },
    { name: 'Kafka', level: 80, label: 'Advanced', category: 'devops' },
    { name: 'Schema Design & Optimization', level: 90, label: 'Expert', category: 'devops' },

    // Testing & OS
    { name: 'PyTest', level: 95, label: 'Expert', category: 'testing' },
    { name: 'Unit & Integration Testing', level: 95, label: 'Expert', category: 'testing' },
    { name: 'Test Automation', level: 92, label: 'Expert', category: 'testing' },
    { name: 'Linux Environments', level: 90, label: 'Expert', category: 'testing' },
    { name: 'Windows Environments', level: 85, label: 'Advanced', category: 'testing' },

    // Security & Core
    { name: 'JWT & OAuth2', level: 92, label: 'Expert', category: 'security' },
    { name: 'CyberArk PAM', level: 90, label: 'Expert', category: 'security' },
    { name: 'Secure Coding Practices', level: 95, label: 'Expert', category: 'security' },
    { name: 'RBAC & Active Directory', level: 88, label: 'Advanced', category: 'security' },
    { name: 'CMDB Systems', level: 85, label: 'Advanced', category: 'security' },
  ];

  // Helper to get SVG logo markup for each skill
  const getSkillIcon = (name) => {
    let path = null;
    let colorClass = "";
    let fillStyle = "currentColor";
    let strokeStyle = "none";
    let strokeWidthVal = "0";

    switch (name) {
      case 'Python':
        path = TECH_ICONS.python;
        colorClass = "color-python";
        break;
      case 'FastAPI':
        path = TECH_ICONS.fastapi;
        colorClass = "color-fastapi";
        break;
      case 'Flask':
        path = TECH_ICONS.flask;
        colorClass = "color-flask";
        break;
      case 'Django':
        path = TECH_ICONS.django;
        colorClass = "color-django";
        break;
      case 'Docker':
        path = TECH_ICONS.docker;
        colorClass = "color-docker";
        break;
      case 'AWS':
        path = TECH_ICONS.aws;
        colorClass = "color-aws";
        break;
      case 'GitLab CI/CD & Runners':
        path = TECH_ICONS.gitlab;
        colorClass = "color-gitlab";
        break;
      case 'PostgreSQL':
        path = TECH_ICONS.postgresql;
        colorClass = "color-postgres";
        break;
      case 'SQL':
        path = TECH_ICONS.mysql;
        colorClass = "color-sql";
        break;
      case 'MySQL / MS SQL':
        path = TECH_ICONS.mysql;
        colorClass = "color-sql";
        break;
      case 'SQLAlchemy (ORM)':
        path = TECH_ICONS.sqlalchemy;
        colorClass = "color-sqlalchemy";
        break;
      case 'Perl':
        path = TECH_ICONS.perl;
        colorClass = "color-perl";
        break;
      case 'JQuery':
        path = TECH_ICONS.jquery;
        colorClass = "color-jquery";
        break;
      case 'Kafka':
        path = TECH_ICONS.kafka;
        colorClass = "color-async";
        break;
      case 'Linux Environments':
        path = TECH_ICONS.linux;
        colorClass = "color-linux";
        break;
      case 'Windows Environments':
        path = TECH_ICONS.windows;
        colorClass = "color-windows";
        break;
      case 'JWT & OAuth2':
        path = TECH_ICONS.jwt;
        colorClass = "color-security";
        break;
      case 'CyberArk PAM':
        // CyberArk logo has specific viewBox: 0 0 109.3 125.5
        return (
          <svg className="skill-icon color-security" viewBox="0 0 109.3 125.5" fill="#00adef">
            <path d="M107.2,93l-51.4,29.7l0-29.3l51.4-29.7V93z M28.7,79l25,14.4l0,29.3l-50.4-29L28.7,79z M53.6,2.8v29.3L28.7,46.5L3.2,31.9L53.6,2.8z M106.1,31.8L80.7,46.5l-25-14.4V2.8L106.1,31.8z M27.6,77.2L2.2,91.9L2.1,33.7l25.4,14.6V77.2z M53.6,62.1L29.7,75.9V48.4l23.9-13.8V62.1z M55.7,34.6l23.9,13.8v27.6L55.7,62.1V34.6z M54.7,91.5L30.8,77.8L54.7,64l23.9,13.8L54.7,91.5z M107.7,60.9l-26,15V48.4l27-15.6v-1.8L55.2,0h-1.1L0.5,31L0,31.9l0.1,61.8l0.5,0.9l53.6,30.8l1.1,0l53.5-30.9l0.5-0.9V61.8L107.7,60.9z" />
          </svg>
        );
      case 'RBAC & Active Directory':
        path = TECH_ICONS.windows;
        colorClass = "color-directory";
        break;
      case 'PyTest':
        path = TECH_ICONS.pytest;
        colorClass = "color-testing";
        break;
      case 'RESTful API Design':
      case 'Schema Design & Optimization':
      case 'CMDB Systems':
        return (
          <svg className="skill-icon color-api-design" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="9" x2="15" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="13" y2="17" />
          </svg>
        );
      case 'Async Programming (asyncio)':
        path = TECH_ICONS.python;
        colorClass = "color-python";
        break;
      case 'Secure Coding Practices':
        return (
          <svg className="skill-icon color-security" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case 'Unit & Integration Testing':
      case 'Test Automation':
        return (
          <svg className="skill-icon color-testing" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
        );
      default:
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        );
    }

    return (
      <svg className={`skill-icon ${colorClass}`} viewBox="0 0 24 24" fill={fillStyle} stroke={strokeStyle} strokeWidth={strokeWidthVal}>
        <path d={path} />
      </svg>
    );
  };

  const filteredSkills = activeCategory === 'all' 
    ? skillData 
    : skillData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Core Technical Skills</h2>

        {/* Categories Bar */}
        <div className="skills-categories">
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

        {/* Skills Grid */}
        <div className="grid-cols-2 skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="glass-card skill-card">
              <div className="skill-info">
                <div className="skill-name-container">
                  {getSkillIcon(skill.name)}
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-level-badge">{skill.label}</span>
              </div>
              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
