import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Шапка / Hero */}
      <header className="hero">
        <h1>Привет, я Frontend-разработчик</h1>
        <p>Создаю современные, интерактивные веб-приложения и интерфейсы.</p>
      </header>

      {/* Секция Навыков */}
      <section className="skills-section">
        <h2>Мои навыки</h2>
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
        <h2>Мои проекты</h2>
        <div className="project-card">
          <h3>Генетический определитель цвета глаз</h3>
          <p>
            Интерактивное веб-приложение для расчета вероятности цвета глаз будущего ребенка 
            на основе генетических данных родителей и прародителей.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
          <span className="project-link">Скоро здесь появится живое демо!</span>
        </div>
      </section>

      {/* Футер */}
      <footer>
        <p>© 2026 Мое Портфолио. Сделано с помощью React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;