import { FaReact, FaLaravel, FaFlask, FaJava, FaDatabase, FaDocker, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';
import InternshipTimeline from './InternshipTimeline';

function About() {
  return (
   <div className="container py-5">
      <div className="text-center mb-5">
        <img
          src="/images/personal_2.jpeg"
          alt="Naman"
          className="rounded-circle shadow mb-3"
          width="150"
          height="150"
        />
        <h2 className="fw-bold">Naman Saxena</h2>
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
        <FaGithub title="Git" />
      </div>

      <hr className="my-5" />

      <h4 className="mb-4">🧭 Timeline</h4>
      <InternshipTimeline/>

      <hr className="my-5" />

      <h4 className="mb-3">🌟 Fun Facts</h4>
      <ul>
        <li>☕ Very Addicted to Coffee</li>
        <li>🎮 Gaming is my weekend reset ritual</li>
      </ul>
    </div>
  );
}

export default About;