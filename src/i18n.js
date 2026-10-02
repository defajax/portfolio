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
        eyeColor: {
        title: "Eye Color Calculator",
        desc: "A web application tool to calculate a child's eye color based on genetic inputs from parents and grandparents."
  }
  
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
        eyeColor: {
        title: "Калькулятор кольору очей",
        desc: "Веб-додаток для розрахунку кольору очей дитини на основі генетичних даних батьків та прабатьків."
  }
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