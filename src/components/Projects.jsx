import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';
import VanillaTilt from 'vanilla-tilt';

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const previousCountRef = useRef(0); // Track previous project count
  
  const startIndex = 0;
  const endIndex = currentPage * projectsPerPage;
  const displayedProjects = projectsData.slice(startIndex, endIndex);
  const hasMore = endIndex < projectsData.length;

  // Re-initialize ScrollReveal and Tilt ONLY for new projects
  useEffect(() => {
    const previousCount = previousCountRef.current;
    const currentCount = displayedProjects.length;

    // Only animate if we have new items
    if (currentCount > previousCount) {
      // ScrollReveal for NEW projects only
      if (typeof window !== 'undefined' && window.ScrollReveal) {
        const sr = window.ScrollReveal();
        
        // Target only newly added elements using data attribute
        const newElements = document.querySelectorAll(`[data-project-index]`);
        const newElementsArray = Array.from(newElements).filter((el) => {
          const index = parseInt(el.getAttribute('data-project-index'));
          return index >= previousCount;
        });
        
        newElementsArray.forEach((element) => {
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
              delay: 400, // Slight delay after text
              easing: 'ease-out',
              origin: 'bottom',
              reset: false
            });
          }
        });
      }

      // Initialize Tilt for ALL elements (but destroy first to avoid duplicates)
      const tiltElements = document.querySelectorAll('.js-tilt');
      if (tiltElements.length > 0) {
        tiltElements.forEach((element) => {
          if (element.vanillaTilt) {
            element.vanillaTilt.destroy();
          }
        });
        
        VanillaTilt.init(tiltElements, {
          max: 4,
          glare: true,
          'max-glare': 0.5
        });
      }

      // Update the previous count
      previousCountRef.current = currentCount;
    }
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
                  className="row" 
                  style={{ marginBottom: '4rem' }}
                  data-project-index={index}
                >
                  <div className="col-lg-4 col-sm-12">
                    <div className={`project-wrapper__text ${isNewItem ? 'load-hidden' : ''}`}>
                      <h3 className="project-wrapper__text-title">{project.title}</h3>
                      <div>
                        <p className="mb-4">{project.description}</p>
                      </div>
                      {project.liveUrl && (
                        <a
                          rel="noreferrer"
                          target="_blank"
                          className="cta-btn cta-btn--hero"
                          href={project.liveUrl}
                        >
                          See Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          rel="noreferrer"
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
                      rel="noreferrer" 
                      href={project.liveUrl || project.githubUrl || '#'} 
                      target="_blank"
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