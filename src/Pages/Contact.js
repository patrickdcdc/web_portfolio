import React, { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    //Opens the user's mail client with the message pre-filled
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail:${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:patrickmutua719@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="page-wrapper">
      <section className="contact">
        <div className="section-header">
          <h2 className="section-title">Get in touch</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            <h4 className="contact__info-title">Contact details</h4>

            <a href="tel:+254100674687" className="contact_detail">
              <div className="contact__icon-wrap">
                <IoCallSharp size={18} />
              </div>
              <div>
                <div>
                  <p className="contact__detail-label">Phone</p>
                  <p className="contact__detail-value">+254 100 676 687</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:patrickmutua719@gmail.com"
              className="contact__detail"
            >
              <div className="contact__icon-wrap">
                <MdOutlineMail size={18} />
              </div>
              <div>
                <p className="contact__detail-label">Email</p>
                <p className="contact__detail-value">
                  patrickmutua719@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/patrickdcdc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__detail"
            >
              <div className="contact__icon-wrap">
                <FaGithub size={18} />
              </div>
              <div>
                <p className="contact__detail-label">GitHub</p>
                <p className="contact__detail-value">github.com/patrickdcdc</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            {sent && (
              <div className="contact_success">
                Your mail client should have opened. Thanks for reaching out!
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary btn--full">
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        &copy;{new Date().getFullYear()} Patrick M. Mutua
      </footer>
    </div>
  );
};

export default Contact;
