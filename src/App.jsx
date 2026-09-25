import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Шапка / Hero */}
      <header className="hero">
        <h1>ЗЛАТА ПРИВIТ!!</h1>
        <p>!!!</p>
      </header>

      {/* Секция Навыков */}
      <section className="skills-section">
        <h2>Skills :</h2>
        <div className="skills-grid">
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Git & GitHub</span>
          <span className="skill-tag">Vite</span>
        </div>
      </section>

      {/* Секция Проектов */}
      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="project-card">
          <h3>NONE</h3>
          <p>
            NULL
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
          <span className="project-link">!WOW!</span>
        </div>
      </section>

      {/* Футер */}
      <footer>
        <p>© 2026 defajax React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;