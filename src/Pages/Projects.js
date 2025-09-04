import React from "react";
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

export default Projects;
