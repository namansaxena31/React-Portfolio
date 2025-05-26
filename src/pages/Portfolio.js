import Navbar from './Navbar';

function Portfolio() {
  const projects = [
    {
      title: "React + Express App",
      liveLink: "https://my-react-project.netlify.app",
      github: "https://github.com/yourname/react-express"
    },
    {
      title: "FinanceTracker - Laravel",
      liveLink: "https://laravel-financetracker-production.up.railway.app/",
      github: "https://github.com/namansaxena31/Laravel-FinanceTracker"
    },
    {
      title: "Flask App",
      liveLink: "https://my-flask-app.onrender.com",
      github: "https://github.com/yourname/flask-app"
    },
    {
      title: "Spring Boot App",
      liveLink: "https://my-spring-app.fly.dev",
      github: "https://github.com/yourname/spring-app"
    },
  ];

  return (
    <>
    <div className="container py-5">
      <h1 className="text-center mb-5">My Projects</h1>
      <div className="row g-4">
        {projects.map((proj, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2 mb-2">🔗 Live Demo</a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mb-2">📂 GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Portfolio;