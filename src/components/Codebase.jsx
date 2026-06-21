import React, { useState } from 'react';

export default function Codebase() {
  const [selectedSnippet, setSelectedSnippet] = useState('fastapi');

  const repos = [
    {
      name: 'expense_tracker_fastapi',
      desc: 'High-performance expense tracking backend API engineered with FastAPI, asynchronous database connections, SQLAlchemy ORM, and PostgreSQL migrations.',
      stars: 12,
      forks: 3,
      language: 'Python',
      langColor: '#3572A5',
    },
    {
      name: 'devtrack',
      desc: 'Developer activity tracker and workflow logger built to automate CMDB actions, monitor device updates, and capture code metrics telemetry.',
      stars: 18,
      forks: 5,
      language: 'Python',
      langColor: '#3572A5',
    }
  ];

  const codeSnippets = {
    fastapi: {
      title: 'FastAPI Async Endpoint',
      language: 'python',
      code: `from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from my_app.db import get_db_session
from my_app.auth import get_current_user

app = FastAPI()

@app.get("/api/v1/devices/{device_id}", response_model=DeviceSchema)
async def read_device(
    device_id: str,
    db: AsyncSession = Depends(get_db_session),
    current_user: User = Depends(get_current_user)
):
    # Asynchronous query resolution
    device = await db.execute(
        select(Device).where(Device.id == device_id)
    )
    device_obj = device.scalars().first()
    
    if not device_obj:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Device not found in CMDB"
        )
    return device_obj`
    },
    sqlalchemy: {
      title: 'SQLAlchemy Async Model',
      language: 'python',
      code: `from sqlalchemy import Column, String, DateTime, ForeignKey, Index
from sqlalchemy.orm import relationship
from my_app.db import Base
import datetime

class Device(Base):
    __tablename__ = "devices"
    
    id = Column(String(50), primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    vendor = Column(String(50), nullable=False, index=True)
    ip_address = Column(String(45), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    
    # Relationship mapping
    credentials = relationship(
        "Credential", 
        back_populates="device", 
        cascade="all, delete-orphan"
    )
    
    # Database indexes for query acceleration
    __table_args__ = (
        Index("ix_devices_vendor_created", "vendor", "created_at"),
    )`
    },
    gitlab: {
      title: 'GitLab CI/CD Pipeline',
      language: 'yaml',
      code: `stages:
  - test
  - build
  - deploy

run_tests:
  stage: test
  image: python:3.11-slim
  services:
    - postgres:15-alpine
  variables:
    POSTGRES_DB: test_db
    POSTGRES_USER: test_user
    POSTGRES_PASSWORD: test_password
  before_script:
    - pip install poetry
    - poetry install
  script:
    - poetry run pytest --cov=app tests/
  coverage: '/(?i)total.*? (\\d+)(?:\\.\\d+)?%/'
  only:
    - merge_requests
    - main`
    }
  };

  return (
    <section id="codebase" className="section codebase-section bg-custom-black">
      <div className="container">
        <h2 className="section-title">Codebase & Repository Showcase</h2>

        <div className="grid-cols-2 codebase-grid">
          {/* GitHub Repos Column */}
          <div className="repos-column">
            <h3 className="codebase-subheading">Featured Repositories</h3>
            <div className="repos-list">
              {repos.map((repo, idx) => (
                <div key={idx} className="glass-card repo-card">
                  <div className="repo-header">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="repo-icon">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <a href={`https://github.com/utkarsh-0201/${repo.name}`} target="_blank" rel="noreferrer" className="repo-name">
                      {repo.name}
                    </a>
                  </div>
                  <p className="repo-desc">{repo.desc}</p>
                  <div className="repo-footer">
                    <div className="repo-lang">
                      <span className="lang-color-dot" style={{ backgroundColor: repo.langColor }}></span>
                      <span>{repo.language}</span>
                    </div>
                    <div className="repo-stats">
                      <span className="repo-stat">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        {repo.stars}
                      </span>
                      <span className="repo-stat">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="18" cy="18" r="3" fill="currentColor" />
                          <circle cx="6" cy="6" r="3" fill="currentColor" />
                          <circle cx="6" cy="18" r="3" fill="currentColor" />
                          <path d="M18 15v-3a4 4 0 0 0-4-4H6" />
                        </svg>
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Viewer Column */}
          <div className="viewer-column">
            <h3 className="codebase-subheading">Featured Code Snippets</h3>
            <div className="glass-card snippet-viewer">
              <div className="snippet-tabs">
                {Object.keys(codeSnippets).map((key) => (
                  <button
                    key={key}
                    className={`snippet-tab ${selectedSnippet === key ? 'active' : ''}`}
                    onClick={() => setSelectedSnippet(key)}
                  >
                    {codeSnippets[key].title}
                  </button>
                ))}
              </div>
              <div className="snippet-code-container">
                <pre>
                  <code>{codeSnippets[selectedSnippet].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
