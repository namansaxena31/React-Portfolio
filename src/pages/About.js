import { FaReact, FaLaravel, FaFlask, FaJava, FaDatabase, FaDocker, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';

function About() {
  return (
   <div className="container py-5">
      <div className="text-center mb-5">
        <img
          src="/images/me.jpg"
          alt="Naman"
          className="rounded-circle shadow mb-3"
          width="150"
          height="150"
        />
        <h2 className="fw-bold">Naman Sharma</h2>
        <p className="text-muted">Full Stack Developer</p>
      </div>

      <p className="lead">
        I'm a passionate full stack developer with experience building scalable applications using
        <strong> React, Express, Laravel, Flask, and Spring</strong>. I love solving real-world problems
        with clean, maintainable code and always strive to improve developer efficiency and user experience.
      </p>

      <hr className="my-5" />

      <h4 className="mb-3">💻 Tech Stack</h4>
      <div className="d-flex flex-wrap gap-4 fs-4">
        <FaReact title="React" />
        <SiExpress title="Express.js" />
        <FaLaravel title="Laravel" />
        <FaFlask title="Flask" />
        <FaJava title="Spring Boot" />
        <SiMongodb title="MongoDB" />
        <SiMysql title="MySQL" />
        <SiPostgresql title="PostgreSQL" />
        <FaGithub title="Git" />
        <FaDocker title="Docker" />
      </div>

      <hr className="my-5" />

      <h4 className="mb-4">🧭 Internship Timeline</h4>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h5>Software Intern – ABC Corp</h5>
            <small className="text-muted">Jan 2024 – Mar 2024</small>
            <p>Developed and maintained Laravel-based REST APIs. Integrated Razorpay for seamless transactions.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h5>Backend Intern – XYZ Solutions</h5>
            <small className="text-muted">May 2023 – July 2023</small>
            <p>Created internal tools with Flask and PostgreSQL, reducing database response time by 30%.</p>
          </div>
        </div>
      </div>

      <hr className="my-5" />

      <h4 className="mb-3">🌟 Fun Facts</h4>
      <ul>
        <li>📚 Sci-fi books and AI podcasts keep my curiosity alive</li>
        <li>🎮 Gaming is my weekend reset ritual</li>
        <li>☕ Coding without coffee is a bug, not a feature</li>
      </ul>
    </div>
  );
}

export default About;