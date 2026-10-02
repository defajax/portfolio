import './App.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import homeIcon from './assets/home-icon.svg';
import aboutIcon from './assets/about-icon.svg';
import projectsIcon from './assets/projects-icon.svg';

function App() {

  const { t, i18n } = useTranslation(); // Language-change initialization

// 1. Active-session (default - 'home')
  const [activeSection, setActiveSection] = useState('home');

  // 2. Scroll event listener to update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Active section is updated when at least 40% of the section is visible
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // 40% of the section must be visible to consider it active
      { threshold: 0.4 } 
    );

    // Select all sections with an id and observe them
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);
  
  // Function for changing the language
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="portfolio-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <div className="avatar-placeholder">
            {/* <img src="..." /> */}
            <span>MU</span>
          </div>
        </div>

        <nav className="nav-menu">
          <a 
            href="#home" 
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          >
            <img src={homeIcon} alt="Home Icon" className="nav-icon" width="20" height="20" />
            {t('nav.home')}
          </a>
          <a 
            href="#projects" 
            className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
          >
            <img src={projectsIcon} alt="Projects Icon" className="nav-icon" width="20" height="20" />
            {t('nav.projects')}
          </a>
          <a 
            href="#about" 
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
          >
            <img src={aboutIcon} alt="About Icon" className="nav-icon" width="20" height="20" />
            {t('nav.about')}
          </a>
        </nav>

        <div className="lang-switch">
          <span 
            className={i18n.language === 'en' ? '' : 'muted'} 
            onClick={() => changeLanguage('en')}
            style={{ cursor: 'pointer' }}
          >
            EN
          </span> 
          {' / '} 
          <span 
            className={i18n.language === 'ua' ? '' : 'muted'} 
            onClick={() => changeLanguage('ua')}
            style={{ cursor: 'pointer' }}
          >
            UA
          </span>
        </div>

        <div className="social-links">
          <a href="https://github.com/defajax" target="_blank" rel="noreferrer">GH</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">IN</a>
          <a href="https://t.me" target="_blank" rel="noreferrer">TG</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <a href="#contact" className="work-btn">
            {t('hero.work')} <span>→</span>
          </a>
        </header>

        <section id="home" className="hero-section">
          <div className="hero-text-block">
            <div className="line">
              <span className="num">01</span>
              <h1>&lt;{t('hero.hello')} <span className="highlight">{t('hero.name')}</span>!&gt;</h1>
            </div>
            <div className="line">
              <span className="num">02</span>
              <h2>&lt;{t('hero.design')} <span className="highlight">{t('hero.develop')}</span> {t('hero.apps')} </h2>
            </div>
            <div className="line">
              <span className="num">03</span>
              <h3>{t('hero.interactive')}&gt;</h3>
            </div>
          </div>

          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>

          <div className="scroll-down">
            <a href="#projects" className="learn-more-btn">
              {t('hero.learn')} <span>↓</span>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">&lt;{t('projects.title')} /&gt;</h2>
          
          <div className="bento-grid">
            {/* Project Card */}
            <a 
              href="https://defajax.github.io/eye-color-calc" 
              target="_blank" 
              rel="noreferrer" 
              className="bento-card project-card"
            >
              <div className="card-content">
                <h3>{t('projects.eyeColor.title')}</h3>
                <p>{t('projects.eyeColor.desc')}</p>
              </div>
              <div className="card-arrow">↗</div>
            </a>            
            {/* In the future, other cards (bento-card) can be added here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;