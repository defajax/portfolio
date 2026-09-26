import './App.css';

function App() {
  return (
    <div className="portfolio-layout">
      {/* Боковая панель (Sidebar) */}
      <aside className="sidebar">
        <div className="profile-section">
          <div className="avatar-placeholder">
            {/* Вместо букв FD вы позже сможете вставить сюда свою фото через тег <img src="..." /> */}
            <span>MU</span>
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#home" className="nav-item active">
            <span className="icon">🏠</span> Home
          </a>
          <a href="#projects" className="nav-item">
            <span className="icon">📂</span> Projects
          </a>
          <a href="#about" className="nav-item">
            <span className="icon">👤</span> About Me
          </a>
        </nav>

        <div className="lang-switch">
          <span>EN</span> / <span className="muted">UA</span>
        </div>

        <div className="social-links">
          <a href="https://github.com/defajax" target="_blank" rel="noreferrer">GH</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">IN</a>
          <a href="https://t.me" target="_blank" rel="noreferrer">TG</a>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="main-content">
        <header className="top-bar">
          <a href="#contact" className="work-btn">
            Work with me <span>→</span>
          </a>
        </header>

        <section className="hero-section">
          <div className="hero-text-block">
            <div className="line">
              <span className="num">01</span>
              <h1>&lt;Hello, I&apos;m <span className="highlight">ayashko</span>!&gt;</h1>
            </div>
            <div className="line">
              <span className="num">02</span>
              <h2>&lt;I design and <span className="highlight">develop</span> apps.&gt;</h2>
            </div>
            <div className="line">
              <span className="num">03</span>
              <h3>interactive web sites.&gt;</h3>
            </div>
          </div>

          <p className="hero-subtitle">
            I also build unique tools, including genetic web calculators and modern UI interfaces.
          </p>

          <div className="scroll-down">
            <a href="#projects" className="learn-more-btn">
              Learn more <span>↓</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;