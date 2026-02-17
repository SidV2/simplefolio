import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';
import VanillaTilt from 'vanilla-tilt';

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const previousCountRef = useRef(0);
  const projectRefs = useRef([]);

  const endIndex = currentPage * projectsPerPage;
  const displayedProjects = projectsData.slice(0, endIndex);
  const hasMore = endIndex < projectsData.length;

  // Cleanup tilt instances on unmount
  useEffect(() => {
    return () => {
      projectRefs.current.forEach(el => {
        if (!el) return;
        const tiltEl = el.querySelector('.js-tilt');
        if (tiltEl && tiltEl.vanillaTilt) {
          tiltEl.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  // Initialize ScrollReveal and Tilt for new projects only
  useEffect(() => {
    const previousCount = previousCountRef.current;
    const currentCount = displayedProjects.length;

    if (currentCount <= previousCount) return;

    if (typeof window !== 'undefined' && window.ScrollReveal) {
      const sr = window.ScrollReveal();

      for (let i = previousCount; i < currentCount; i++) {
        const element = projectRefs.current[i];
        if (!element) continue;

        const textEl = element.querySelector('.project-wrapper__text');
        const imageEl = element.querySelector('.project-wrapper__image');

        if (textEl) {
          sr.reveal(textEl, {
            distance: '60px',
            duration: 1000,
            delay: 200,
            easing: 'ease-out',
            origin: 'bottom',
            reset: false
          });
        }

        if (imageEl) {
          sr.reveal(imageEl, {
            distance: '60px',
            duration: 1000,
            delay: 400,
            easing: 'ease-out',
            origin: 'bottom',
            reset: false
          });
        }
      }
    }

    // Initialize Tilt only for new elements
    for (let i = previousCount; i < currentCount; i++) {
      const element = projectRefs.current[i];
      if (!element) continue;
      const tiltEl = element.querySelector('.js-tilt');
      if (tiltEl) {
        VanillaTilt.init([tiltEl], {
          max: 4,
          glare: true,
          'max-glare': 0.5
        });
      }
    }

    previousCountRef.current = currentCount;
  }, [displayedProjects.length]);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          <div className="projects-list">
            {displayedProjects.map((project, index) => {
              const isNewItem = index >= previousCountRef.current;

              return (
                <div
                  key={project.id}
                  ref={el => { projectRefs.current[index] = el; }}
                  className="row"
                  style={{ marginBottom: '4rem' }}
                >
                  <div className="col-lg-4 col-sm-12">
                    <div className={`project-wrapper__text ${isNewItem ? 'load-hidden' : ''}`}>
                      <h3 className="project-wrapper__text-title">{project.title}</h3>
                      <div>
                        <p className="mb-4">{project.description}</p>
                      </div>
                      {project.liveUrl && (
                        <a
                          rel="noreferrer noopener"
                          target="_blank"
                          className="cta-btn cta-btn--hero"
                          href={project.liveUrl}
                        >
                          See Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          rel="noreferrer noopener"
                          target="_blank"
                          className={`cta-btn ${!project.liveUrl ? 'cta-btn--hero' : 'text-color-main'}`}
                          href={project.githubUrl}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className={`project-wrapper__image ${isNewItem ? 'load-hidden' : ''}`}>
                      <a
                        rel="noreferrer noopener"
                        href={project.liveUrl || project.githubUrl || '#'}
                        target="_blank"
                        aria-label={project.title}
                      >
                        <div
                          data-tilt
                          data-tilt-max="4"
                          data-tilt-glare="true"
                          data-tilt-max-glare="0.5"
                          className="thumbnail rounded js-tilt"
                        >
                          <img
                            alt={project.title}
                            className="img-fluid"
                            src={project.image}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {hasMore && (
            <button
              className="cta-btn cta-btn--hero load-more-btn"
              onClick={handleLoadMore}
              style={{ display: 'block', margin: '3rem auto 0', fontSize: '2rem' }}
            >
              Load More Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
