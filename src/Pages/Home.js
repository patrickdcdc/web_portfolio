import React from "react";
import { Link } from "react-router-dom";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMysql,
  SiLinux,
} from "react-icons/si";

const techStack = [
  { Icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
  { Icon: SiExpress, label: "Express", color: "#888" },
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#68A063" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiMysql, label: "MySQL", color: "#00618A" },
  { Icon: SiLinux, label: "Linux", color: "#FCC624" },
];

const Home = () => {
  return (
    <div className="page-wrapper">
      {/*Hero */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">Available for work</span>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Patrick Mutua</span>
          </h1>
          <p className="hero__subtitle">
            Full-stack software developer building clean, scalable and reliable
            software solutions.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">
              View projects
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hero__avatar">
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="25"
                  width="100"
                  height="70"
                  rx="6"
                  fill="#1e2a3a"
                />
                <rect
                  x="10"
                  y="25"
                  width="100"
                  height="12"
                  rx="6"
                  fill="#2d3f55"
                />
                <circle cx="20" cy="31" r="3" fill="#e74c3c" />
                <circle cx="30" cy="31" r="3" fill="#f39c12" />
                <circle cx="40" cy="31" r="3" fill="#2ecc71" />
                <rect
                  x="18"
                  y="46"
                  width="40"
                  height="3"
                  rx="1.5"
                  fill="#4fc3f7"
                />
                <rect
                  x="18"
                  y="54"
                  width="60"
                  height="3"
                  rx="1.5"
                  fill="#81c784"
                />
                <rect
                  x="18"
                  y="62"
                  width="30"
                  height="3"
                  rx="1.5"
                  fill="#ce93d8"
                />
                <rect
                  x="52"
                  y="62"
                  width="26"
                  height="3"
                  rx="1.5"
                  fill="#4fc3f7"
                />
                <rect
                  x="18"
                  y="70"
                  width="50"
                  height="3"
                  rx="1.5"
                  fill="#fff176"
                />
                <rect
                  x="18"
                  y="78"
                  width="35"
                  height="3"
                  rx="1.5"
                  fill="#81c784"
                />
                <rect
                  x="40"
                  y="95"
                  width="40"
                  height="5"
                  rx="2"
                  fill="#2d3f55"
                />
                <rect
                  x="30"
                  y="100"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#2d3f55"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="techstack">
        <p className="techstack__label">Tech stack</p>
        <div className="techstack__icons">
          {techStack.map(({ Icon, label, color }) => (
            <div className="techstack__item" key={label}>
              <div
                className="techstack__icon-wrap"
                style={{ "--icon-color": color }}
              >
                <Icon size={28} color={color} />
              </div>
              <span className="techstack__item-label">{label}</span>
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

export default Home;

/*import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div>
                <h4 className="typing-text">
                  My name is Patrick Mutua and I am an experienced software
                  developer.
                  <br />I build clean, scalable, and reliable software
                  solutions.
                </h4>
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.StYwWSD2f02rdx58xWRExQHaEK?w=274&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                    alt="profile"
                  />
                </div>
                <div>
                  <Link to="Projects" className="btn-link">
                    Projects
                  </Link>
                </div>
                <div>
                  <Link to="About" className="btn-link">
                    About me
                  </Link>
                </div>
                <div className="tech-stack">
                  <p>Tech stack:</p>
                  <img src="images/Mongodb.png" alt="mongoosedb" />
                  <img src="images/express js.png" alt="express js" />
                  <img src="images/react.jpg" alt="react" />
                  <img src="images/images.png" alt="node" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="site-footer">
          &copy;{new Date().getFullYear()} Patrick .M. Mutua
        </footer>
      </section>
    </>
  );
};

export default Home;*/
