
import { portfolioImages } from './portfolioImages';
export const portfolioData = [
    {
        title: 'MERN Calendar',
        little: 'CRUD application with MERN Stack',
        images: portfolioImages.mernApp,
        technologies: [ 'React', 'React-router', 'Redux', 'Node', 'Express', 'MongoDB', 'Jest', 'Enzyme' ],
        description: 'This app was built using the MERN Stack: React for the User interface, Node.js and Express.js for the backend and server for generate the endpoints and MongoDB for the database. This is a CRUD app with authentication.',
        links: [
            'https://mern-calendar-ncondes.herokuapp.com/',
            'https://github.com/ncondes/mern-calendar-frontend',
        ],
    },
    {
        title: 'Journal App',
        little: 'Journal application built in React',
        images: portfolioImages.journalApp,
        technologies: [ 'React', 'React-router', 'Redux', 'Firebase', 'Firestore', 'Sass', 'Jest', 'Enzyme' ],
        description: 'This app was built in React, using Firebase and Firestore for the authentication, Register and Login implementation, journal CRUD, and using Redux for the logic.',
        links: [
            'https://ecstatic-nightingale-d4d770.netlify.app/',
            'https://github.com/ncondes/react-journal-app',
        ],
    },
    {
        title: 'Heroes App',
        little: 'Heroes application introducing React-router',
        images: portfolioImages.heroesApp,
        technologies: [ 'React', 'React-router', 'Bootstrap', 'Routes protection' ],
        description: 'This app was built in React, implementing React router V6, is an SPA, that display the information of some characters in the home page and clicking through a character then you navigate to a detail page of the hero to see more details, use of private and public routes.',
        links: [
            'https://gifted-perlman-c23280.netlify.app/',
            'https://github.com/ncondes/heroes-app',
        ],
    },
    {
        title: 'Todo App',
        little: 'Todo application introducing React Hooks',
        images: portfolioImages.todoApp,
        technologies: [ 'React', 'Sass', 'Webpack' ],
        description: 'This app was built in React, implementing the basic hooks, and styles in Sass, the user can create and delete todos, filter by state, etc. App with color theme toggle.',
        links: [
            'https://gallant-aryabhata-022705.netlify.app/',
            'https://github.com/ncondes/todo-app',
        ],
    },
    {
        title: 'Countries App',
        little: 'App that require data from an API',
        images: portfolioImages.countriesApp,
        technologies: [ 'React', 'CSS grid', 'Webpack', 'TailwindCSS' ],
        description: 'This app was built in React, get data from an API, and this one is displayed on the screen with some filters that you can use to search a specific country, clicking through a country you can go to a detailed view with more information of the country, also you can toggle the color theme.',
        links: [
            'https://flamboyant-bhabha-c786be.netlify.app/',
            'https://github.com/ncondes/countries-app',
        ],
    },
    {
        title: 'Gif App',
        little: 'Application to get gifs',
        images: portfolioImages.gifApp,
        technologies: [ 'React', 'API', 'CSS' ],
        description: 'This app was built in React, using the giphy API to display different gif on the screen depending on the value of the input field.',
        links: [
            'https://ncondes.github.io/react-gif-expert-app/',
            'https://github.com/ncondes/react-gif-expert-app',
        ],
    },
    {
        title: 'Easybank',
        little: 'Bank Landing Page',
        images: portfolioImages.easybank,
        technologies: [ 'HTML', 'Sass', 'JavaScript' ],
        description: 'This Landing Page was built using HTML, CSS, Sass and JavaScript, implementing mobile first design, CSS flexbox, CSS grid, and some other technologies to design the layout.',
        links: [
            'https://ncondes.github.io/easybank/dist/',
            'https://github.com/ncondes/easybank',
        ],
    },
    {
        title: 'Rick & Morty SPA',
        little: 'SPA with JavaScript vanilla',
        images: portfolioImages.rickAndMorty,
        technologies: [ 'JavaScript', 'SPA', 'Webpack', 'CSS' ],
        description: 'This is a Single Page Applications with routes and components, created with JavaScript vanilla requesting data from the rick and morty API and display it on the screen, also at clicking on a character you navigate through a detail view of the character.',
        links: [
            'https://ncondes.github.io/rick-and-morty-spa-js-vanilla/dist/',
            'https://github.com/ncondes/rick-and-morty-spa-js-vanilla',
        ],
    },
    {
        title: 'Portfolio',
        little: 'Showcasing who I am',
        images: portfolioImages.portfolio,
        technologies: [ 'React', 'TailwindCSS', 'Sass' ],
        description: 'The website to showcase who i am and the projects that I have been working on, some services and contact section.',
        links: [
            'https://www.ncondes.com',
            'https://github.com/ncondes/portfolio',
        ],
    },

]