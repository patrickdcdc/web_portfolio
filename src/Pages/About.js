import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub /*FaLinkedin */ } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiLinux,
} from "react-icons/si";

const skills = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiExpress, label: "Express" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiGit, label: "Git & GitHub" },
  { Icon: SiLinux, label: "Linux" },
];

const About = () => {
  return (
    <div className="page-wrapper">
      <section className="about">
        <div className="section-header">
          <h2 className="section-title">About me</h2>
        </div>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio">
            <div className="about__avatar-placeholder">PM</div>
            <h3 className="about__me">Patrick Mutua</h3>
            <p className="about__role">
              Full-stack Software Developer. Nairobi, Kenya
            </p>
            <p className="about__text">
              I'm an enthusiastic full-stack software developer with 2+ years of
              hands-on experience building software solutions for people and
              businesses. I care deeply about writing clean, maintainable code
              and creating products that genuinely solve problems.
            </p>
            <p className="about__text">
              I thrive in collaborative environments and bring strong
              communication skills and a teamwork mindset to every project I
              work on
            </p>

            <div className="about__contacts">
              <a href="tel:+254100674687" className="about__contact-link">
                <IoCallSharp size={16} />
                +254100674687
              </a>
              <a
                href="mailto:patrickmutua719@gmail.com"
                className="about__contact-link"
              >
                <MdOutlineMail size={16} />
                patrickmutua719@gmail.com
              </a>
              <a
                href="https://github.com/patrickdcdc"
                target="_blank"
                rel="noopener noreferrer"
                className="about__contact-link"
              >
                <FaGithub size={16} />
                github.com/patrickdcdc
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="about__skills-panel">
            <h4 className="about__skills-title">Skills & Technologies</h4>
            <div className="about__skills-grid">
              {skills.map(({ Icon, label }) => (
                <div className="skill-chip" key={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="about__card">
              <div className="about__stat">
                <span className="about__stat-number">2+</span>
                <span className="about__stat-label">Years experience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Projects built</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Patrick M. Mutua
      </footer>
    </div>
  );
};

export default About;

/*const About_me = () => {
  return (
    <>
      <section className="about-me-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div>
                <p>
                  I am an enthusiastic fullstack software developer with a
                  passion for developing software solutions for businesses. I
                  have three years of first-hand experience, great communication
                  skills and, a teamwork mindset.
                </p>
                <p>I am proficient in various technologies like;</p>
                <p>Git and Github</p>
                <p>MYSQL</p>
                <p>Linux</p>
              </div>
              <div>
                <h4>
                  <u>Contacts</u>
                  <br />
                </h4>
                <div className="react-icons">
                  <IoCallSharp />
                  <a href="0100674687">0100674687</a>
                </div>
                <div className="react-icons">
                  <MdOutlineMail />
                  <a href="patrickmutua719@gmail.com">
                    patrickmutua719@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_me;*/
