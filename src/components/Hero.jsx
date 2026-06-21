import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenNewsletter }) {
  const titles = [
    'Senior Software Engineer & AI Generalist',
    'Full Stack Python Developer',
    'Platform Security Professional',
    'Backend, Automation & RAG Architect'
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container grid-cols-2">
        <div className="hero-content animate-fade-in">
          <h3 className="hero-subtitle">Hello, I am</h3>
          <h1 className="hero-title">Utkarsh Singh</h1>
          <div className="hero-typing-container">
            <span className="hero-typing">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-desc">
            Results-driven Full Stack Python Developer and <strong>AI Generalist</strong> with <strong>10+ years</strong> of experience engineering 
            high-performance, scalable backend services, robust automation tooling, and RESTful APIs using FastAPI and Flask. 
            Currently leveraging AI to build a Retrieval-Augmented Generation (RAG) workflow to provide SOC assistance for security device monitoring (In Progress).
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Reach Out
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a href="https://drive.google.com/file/d/1FM1_YGj8dEm2JMIy3Vpt-BYweAgiY_6L/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-secondary">
              View Resume
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button onClick={onOpenNewsletter} className="btn-text-only">
              Newsletter
            </button>
          </div>
        </div>

        <div className="hero-graphic-container">
          <div className="hero-background-glow"></div>
          
          {/* Linked Technology Nodes Animation Grid */}
          <div className="cyber-network-container">
            <svg className="cyber-network-svg pulse-glow" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cybersecurity background grid patterns */}
              <defs>
                <pattern id="networkGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                </pattern>
                <linearGradient id="purpleCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-purple)" />
                  <stop offset="100%" stopColor="var(--accent-cyan)" />
                </linearGradient>
              </defs>
              <rect width="500" height="500" fill="url(#networkGrid)" />

              {/* Laser Connector Paths */}
              {/* Python -> CI/CD */}
              <path d="M 250 250 L 250 100" stroke="url(#purpleCyanGrad)" strokeWidth="2" strokeDasharray="6,4" className="flow-up" />
              {/* Python -> Docker */}
              <path d="M 250 250 L 400 250" stroke="url(#purpleCyanGrad)" strokeWidth="2" strokeDasharray="6,4" className="flow-right" />
              {/* Python -> CyberArk PAM */}
              <path d="M 250 250 L 100 250" stroke="url(#purpleCyanGrad)" strokeWidth="2" strokeDasharray="6,4" className="flow-left" />
              {/* Python -> Active Directory */}
              <path d="M 250 250 L 250 400" stroke="url(#purpleCyanGrad)" strokeWidth="2" strokeDasharray="6,4" className="flow-down" />
              
              {/* Outer Inter-connects */}
              <path d="M 250 100 L 400 250 L 250 400 L 100 250 Z" stroke="var(--card-border)" strokeWidth="1.5" strokeDasharray="4,4" />

              {/* Data Packets flowing along paths */}
              {/* Python -> CI/CD */}
              <circle r="4" fill="var(--accent-cyan)">
                <animateMotion path="M 250 250 L 250 100" dur="2.2s" repeatCount="indefinite" />
              </circle>
              {/* Python -> Docker */}
              <circle r="4" fill="var(--accent-purple)">
                <animateMotion path="M 250 250 L 400 250" dur="2.8s" repeatCount="indefinite" />
              </circle>
              {/* Python -> CyberArk */}
              <circle r="4" fill="var(--accent-cyan)">
                <animateMotion path="M 250 250 L 100 250" dur="2.5s" repeatCount="indefinite" />
              </circle>
              {/* Python -> AD */}
              <circle r="4" fill="var(--accent-purple)">
                <animateMotion path="M 250 250 L 250 400" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* 1. Central Core Node (Python Engine) */}
              <g className="network-node central-node" transform="translate(0, 0)">
                <circle cx="250" cy="250" r="45" fill="var(--bg-secondary)" stroke="var(--accent-purple)" strokeWidth="4" />
                <circle cx="250" cy="250" r="55" fill="none" stroke="var(--accent-purple)" strokeWidth="1" strokeDasharray="4,4" className="rotate-slow" />
                
                {/* Official Simple Icons Python Logo */}
                <svg viewBox="0 0 24 24" x="226" y="226" width="48" height="48">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="url(#purpleCyanGrad)" />
                </svg>
                
                <text x="250" y="315" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-header)" fontSize="12" fontWeight="700">PYTHON CORE</text>
              </g>

              {/* 2. Top Node (GitLab CI/CD DevOps) */}
              <g className="network-node" transform="translate(0, 0)">
                <circle cx="250" cy="100" r="30" fill="var(--bg-secondary)" stroke="var(--accent-cyan)" strokeWidth="3" />
                
                {/* Official Simple Icons GitLab Logo */}
                <svg viewBox="0 0 24 24" x="233" y="83" width="34" height="34">
                  <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" fill="#FC6D26" />
                </svg>

                <text x="250" y="55" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-header)" fontSize="11" fontWeight="600">GITLAB CI/CD</text>
              </g>

              {/* 3. Right Node (Docker Virtualization) */}
              <g className="network-node" transform="translate(0, 0)">
                <circle cx="400" cy="250" r="30" fill="var(--bg-secondary)" stroke="var(--accent-purple)" strokeWidth="3" />
                
                {/* Official Simple Icons Docker Logo */}
                <svg viewBox="0 0 24 24" x="383" y="233" width="34" height="34">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#0284c7" />
                </svg>

                <text x="400" y="205" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-header)" fontSize="11" fontWeight="600">DOCKER</text>
              </g>

              {/* 4. Left Node (CyberArk PAM Security) */}
              <g className="network-node" transform="translate(0, 0)">
                <circle cx="100" cy="250" r="30" fill="var(--bg-secondary)" stroke="var(--accent-purple)" strokeWidth="3" />
                
                {/* Official Vector CyberArk Shield Icon */}
                <svg viewBox="0 0 109.3 125.5" x="85" y="233" width="30" height="34">
                  <path d="M107.2,93l-51.4,29.7l0-29.3l51.4-29.7V93z M28.7,79l25,14.4l0,29.3l-50.4-29L28.7,79z M53.6,2.8v29.3L28.7,46.5L3.2,31.9L53.6,2.8z M106.1,31.8L80.7,46.5l-25-14.4V2.8L106.1,31.8z M27.6,77.2L2.2,91.9L2.1,33.7l25.4,14.6V77.2z M53.6,62.1L29.7,75.9V48.4l23.9-13.8V62.1z M55.7,34.6l23.9,13.8v27.6L55.7,62.1V34.6z M54.7,91.5L30.8,77.8L54.7,64l23.9,13.8L54.7,91.5z M107.7,60.9l-26,15V48.4l27-15.6v-1.8L55.2,0h-1.1L0.5,31L0,31.9l0.1,61.8l0.5,0.9l53.6,30.8l1.1,0l53.5-30.9l0.5-0.9V61.8L107.7,60.9z" fill="#00adef" />
                </svg>

                <text x="100" y="205" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-header)" fontSize="11" fontWeight="600">CYBERARK PAM</text>
              </g>

              {/* 5. Bottom Node (Active Directory Sync) */}
              <g className="network-node" transform="translate(0, 0)">
                <circle cx="250" cy="400" r="30" fill="var(--bg-secondary)" stroke="var(--accent-cyan)" strokeWidth="3" />
                
                {/* Official Microsoft/Windows active directory base */}
                <svg viewBox="0 0 24 24" x="236" y="386" width="28" height="28">
                  <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM10.8 1.95L24 0v11.55H10.8V1.95zM10.8 12.45H24v11.55L10.8 22.05v-9.6z" fill="#00adef" />
                </svg>

                <text x="250" y="445" textAnchor="middle" fill="var(--text-primary)" fontFamily="var(--font-header)" fontSize="11" fontWeight="600">ACTIVE DIRECTORY</text>
              </g>

              {/* Active Radar Scanner Overlay */}
              <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1.5" className="radar-sweep" />
              <line x1="250" y1="250" x2="120" y2="120" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeLinecap="round" className="radar-arm" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
