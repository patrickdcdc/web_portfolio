import React from "react";
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

export default Home;
