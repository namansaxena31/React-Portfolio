import Navbar from './Navbar';

function Landing() {
  return (
     <div className="text-center py-5">
        <img 
            src="/images/personal_3.jpeg" 
            alt="Naman" 
            className="rounded-circle shadow mb-4" 
            width="150" 
            height="150" 
        />
      <h1 className="display-4 fw-bold">Hi, I'm Naman</h1>
      <p className="lead mb-4">Full Stack Developer | React · Express . Laravel · Flask · Spring</p>
      <a to="/portfolio" className="btn btn-primary btn-lg">View My Work</a>

      <div className="mt-5 d-flex justify-content-center gap-3 flex-wrap">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="40" />
        <img src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg" alt="Laravel" width="40" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" width="40" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" width="40" />
      </div>
    </div>
  );
}

export default Landing;