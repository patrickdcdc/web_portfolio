import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce store",
    description:
      "A full-featured online store with product listings, cart functionality, and checkout flow. Built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://webstore-3.netlify.app/",
    github: "https://github.com/patrickdcdc",
    image: "/images/webstore_snip.png",
  },
];

const Projects = () => {
  return (
    <div className="page-wrapper">
      <section className="projects">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of things I've built and shipped
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-card__image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-card__placeholder">
                    <span>{project.title[0]}</span>
                  </div>
                )}
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline btn--sm"
                    >
                      <FaGithub size={14} /> Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Patrick M. Mutua
      </footer>
    </div>
  );
};

export default Projects;

/*import React from "react";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <section className="projects-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>
                I have developed, deployed, as well as collaborated in many
                software projects. Below are some of them.
              </h4>
              <p className="project-paragraph">e-commerce app</p>
              <div>
                <img
                  className="project-img"
                  src="images/webstore_snip.png"
                  alt="webstore"
                />
                <br />
                <a href="https://webstore-3.netlify.app/">Live demo</a>
              </div>
              <div className="github">
                <FaGithub />
                <a href="https://github.com/patrickdcdc">Github</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;*/
