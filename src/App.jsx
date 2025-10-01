import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

function App() {
  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-gradient" href="#">
            Chiti Babu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-gradient-dark">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-3 fw-bold mb-3"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Chitti Babu</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="lead text-secondary col-md-8"
        >
          A Front-End Developer with 3 years of experience building sleek,
          responsive, and user-friendly web applications.
        </motion.p>
        <div className="d-flex gap-4 mt-4 fs-2">
          <a
            href="https://github.com"
            target="_blank"
            className="icon-link"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="icon-link"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:youremail@gmail.com"
            className="icon-link"
          >
            <Mail />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="h2 fw-bold mb-4 text-gradient">About Me</h3>
          <p className="text-secondary col-md-8">
            I specialize in creating modern, interactive web interfaces using
            React, JavaScript, and CSS. Passionate about UI/UX design,
            performance optimization, and delivering engaging user experiences.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-5 bg-gradient-dark">
        <div className="container">
          <h3 className="h2 fw-bold mb-4 text-gradient">Skills</h3>
          <div className="row g-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Bootstrap",
              "Git",
              "Figma",
            ].map((skill, i) => (
              <div className="col-6 col-md-3 text-center" key={i}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card bg-dark border-0 shadow-lg rounded-4 p-4 skill-card"
                >
                  {skill}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5 container">
        <h3 className="h2 fw-bold mb-4 text-gradient">Projects</h3>
        <div className="row g-4">
          {[1, 2].map((p) => (
            <div className="col-md-6" key={p}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="card bg-dark border-0 shadow-lg rounded-4 overflow-hidden h-100"
              >
                <img
                  src={`https://picsum.photos/600/400?random=${p}`}
                  className="card-img-top"
                  alt="project"
                />
                <div className="card-body">
                  <h4 className="card-title fw-semibold">Project {p}</h4>
                  <p className="card-text text-secondary">
                    A modern web app showcasing clean UI and optimized
                    performance.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 text-center container">
        <h3 className="h2 fw-bold mb-4 text-gradient">Get In Touch</h3>
        <p className="text-secondary mb-4">
          Feel free to reach out for collaboration or freelance work.
        </p>
        <a
          href="mailto:youremail@gmail.com"
          className="btn btn-lg btn-primary px-4 py-2 rounded-pill shadow"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-dark border-top border-secondary text-secondary">
        © {new Date().getFullYear()} Chiti Babu. Built with ❤️ using React + Vite.
      </footer>

      {/* Extra Styling */}
      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #0d6efd, #20c997);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-gradient-dark {
          background: linear-gradient(135deg, #0d0d0d, #1a1a1a, #0d0d0d);
        }
        .icon-link {
          color: #ccc;
          transition: all 0.3s ease;
        }
        .icon-link:hover {
          color: #0d6efd;
          transform: scale(1.2);
          text-shadow: 0 0 15px rgba(13, 110, 253, 0.7);
        }
        .skill-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .skill-card:hover {
          background: rgba(13,110,253,0.1);
          border-color: #0d6efd;
        }
      `}</style>
    </div>
  );
}

export default App;
