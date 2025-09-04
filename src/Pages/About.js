import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const About_me = () => {
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

export default About_me;
