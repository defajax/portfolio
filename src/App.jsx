import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <main className="bento-container">
        {/* Hero Card */}
        <div className="card hero-card">
          <span className="badge">Available for hire</span>
          <h1>Frontend Developer</h1>
          <p>Building clean, interactive, and user-centric web applications.</p>
        </div>

        {/* Skills Card */}
        <div className="card skills-card">
          <h2>Tech Stack</h2>
          <div className="skills-list">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>Vite</span>
          </div>
        </div>

        {/* Project Card */}
        <div className="card project-card">
          <div className="project-header">
            <h2>Featured Project</h2>
            <span className="project-status">In Progress</span>
          </div>
          <h3>Eye Color Genetics Predictor</h3>
          <p>
            An interactive web application predicting a child&apos;s eye color based on 
            parents&apos; and grandparents&apos; genetics using Mendelian inheritance logic.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>UI/UX</span>
          </div>
          <div className="project-footer">
            <span className="coming-soon">Live Demo Coming Soon →</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;