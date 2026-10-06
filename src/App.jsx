import './App.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import homeIcon from './assets/home-icon.svg';
import aboutIcon from './assets/about-icon.svg';
import projectsIcon from './assets/projects-icon.svg';

function App() {

  const { t, i18n } = useTranslation(); // Language-change initialization

// Active-session (default - 'home')
  const [activeSection, setActiveSection] = useState('home');

// Scroll event listener to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200; // Small offset from the top of the screen

      // 1. If scroll reaches the bottom (about)
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 10) {
        setActiveSection('about');
        return;
      }

      // 2. In other cases, determine the section based on its position on the screen
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on page load

    return () => window.removeEventListener('scroll', handleScroll);
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
          <a href="https://www.linkedin.com/in/marharyta-urbanovych-19b138440/" target="_blank" rel="noreferrer">IN</a>
          <a href="https://t.me/uthernfornia" target="_blank" rel="noreferrer">TG</a>
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
              href="https://defajax.github.io/JSON-to-AHK/" 
              target="_blank" 
              rel="noreferrer" 
              className="bento-card project-card"
            >
              <div className="card-content">
                <h3>{t('projects.jsontoahk.title')}</h3>
                <p>{t('projects.jsontoahk.desc')}</p>
              </div>
              <div className="card-arrow">↗</div>
            </a>            
          </div>
        </section>
        {/* About Me Section */}
        <section id="about" className="about-section">
          <h2 className="section-title">&lt;{t('about.title')} /&gt;</h2>
          
          <div className="bento-card about-card-block">
            <div className="about-content">
              <p className="about-education"><strong>{t('about.education')}</strong></p>
              <p className="about-text">{t('about.background')}</p>

              <div className="about-group">
                <h3>{t('about.stackTitle')}</h3>
                <div className="skills-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Vite</span>
                  <span>Git</span>
                  <span>Node.js</span>
                </div>
              </div>

              <div className="about-group">
                <h3>{t('about.skillsTitle')}</h3>
                <p className="about-text">{t('about.skillsText')}</p>
              </div>

              <div className="about-group">
                <h3>{t('about.hobbiesTitle')}</h3>
                <p className="about-text">{t('about.hobbiesText')}</p>
              </div>

              <p className="about-open"><strong>{t('about.openTo')}</strong></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;