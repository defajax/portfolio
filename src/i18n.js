import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        projects: "Projects",
        about: "About Me"
      },
      hero: {
        work: "Work with me",
        hello: "Hello, I'm",
        design: "I design and",
        develop: "develop",
        apps: "apps,",
        interactive: "interactive web sites.",
        subtitle: "I also build unique tools, including genetic web calculators and modern UI interfaces.",
        learn: "Learn more",
        name:"Marharyta"
      },
      projects: {
        title: "Projects",
        jsontoahk: {
          title: "JSON-to-AHK Converter",
          desc: "A web application tool to convert JSON data to AutoHotkey scripts."
        }
      },
      about: {
        title: "About Me",
        education: "Education: National University 'Odesa Polytechnic'",
        background: "I have a higher technological education and a strong foundation in analytics and information structuring. My main focus is currently Front-end development. Ready to learn new things and expand my stack :)",
        stackTitle: "Tech Stack:",
        skillsTitle: "Soft & Hard Skills:",
        skillsText: "Advanced data analysis, information structuring (registries, databases), routine automation, attention to detail.",
        hobbiesTitle: "Hobbies:",
        hobbiesText: "A strong passion for OSINT for the soul (legal stalking and investigations...), 2D illustrations, and graphic design.",
        openTo: "Open to job offers for Junior Front-end Developer and OSINT Analyst positions."
      }
    }
  },
  ua: {
    translation: {
      nav: {
        home: "Головна",
        projects: "Проєкти",
        about: "Про мене"
      },
      hero: {
        work: "Співпраця",
        hello: "Привіт, я",
        design: "Я проєктую та",
        develop: "розробляю",
        apps: "додатки,",
        interactive: "інтерактивні веб-сайти.",
        subtitle: "Я також створюю унікальні інструменти, включаючи генетичні веб-калькулятори та сучасні UI інтерфейси.",
        learn: "Дізнатися більше",
        name:"Маргарита"
      },
      projects: {
        title: "Проєкти",
        jsontoahk: {
          title: "JSON-to-AHK Converter",
          desc: "Веб-додаток для конвертації JSON даних у скрипти AutoHotkey."
        }
      },
      about: {
        title: "Про мене",
        education: "Освіта: Національний університет «Одеська політехніка»",
        background: "Маю вищу технологічну освіту та фундамент в аналітиці, структуризації інформації. Зараз мій головний фокус — Front-end розробка. Готова навчатися новому та збільшувати стек :)",
        stackTitle: "Стек:",
        skillsTitle: "Soft & Hard скіли:",
        skillsText: "Просунутий аналіз даних, структуризація інформації (реєстри, бази даних), автоматизація рутини, увага до деталей.",
        hobbiesTitle: "Хобі:",
        hobbiesText: "Маю нестримну пристрасть до OSINT для душі (легальний сталкінг і розслідування...), 2D-ілюстрації та графічного дизайну.",
        openTo: "Відкрита до пропозицій на позицію Junior Front-end Developer та OSINT-аналітика."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;