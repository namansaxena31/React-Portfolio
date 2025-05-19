import './App.css';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar /> 

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;