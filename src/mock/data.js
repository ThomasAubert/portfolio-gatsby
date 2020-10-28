import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thomas Aubert', // e.g: 'Name | Developer'
  lang: 'en-US', // e.g: en, es, fr, jp
  description: 'This is my personal website. You will know more about me and my work, and will be able to contact me directly', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Thomas Aubert',
  subtitle: 'a web developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, I am Thomas. ',
  paragraphTwo: 'I am a former Airline Pilot and Flight instructor with over 5 years experience in high-pressure, performance-driven environments where teamwork and communication are paramount.',
  paragraphThree: 'When my former airline collapsed at the start of the year due to COVID-19, I decided to follow my passion for building and sharing things online and train as a web developer. I have recently been working with React and its frameworks, but also with PHP & MySQL. ',
  paragraphFour: 'My next project will be to learn more Python to understand its use in data sciences and its place in web development.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'flowershop.png',
    title: 'FlowerShop',
    info: 'This is a scalable and responsive e-commerce website featuring a fully functional admin interface from which it is easy to manage products, users and orders. The example uses PayPal as payment method but is easily adaptable to others like Stripe.',
    info2: 'React . Redux . MongoDB . Node.js . PayPal API',
    url: 'https://flowershop-mern.herokuapp.com/',
    repo: 'https://github.com/ThomasAubert/flowershop-mern', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gospace.png',
    title: 'GoSpace',
    info: 'A scalable and responsive brochure site built with React to get familiar with Styled Components and use them efficiently.',
    info2: 'React . Styled-Components',
    url: 'https://gospace-brochure.herokuapp.com/',
    repo: 'https://github.com/ThomasAubert/GoSpace-react-styled', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expensesapp.png',
    title: 'ExpensesApp',
    info: 'An expenses management web app with Google authentification. It allows for the addition, editing or removal of expenses. These can be later sorted  on the your dashboard by date or amount within a particular time frame.',
    info2: 'React . Redux . Firebase . Webpack . Jest/Enzyme . Sass',
    url: 'https://polar-ridge-02454.herokuapp.com/',
    repo: '"https://github.com/ThomasAubert/react-course-expensify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokenext.png',
    title: 'PokeNext',
    info: 'A Next.js web app to explore the React framework and use it to fetch content from an API. Styled using TailwindCSS and set up with PostCSS, it is deployed with Vercel.',
    info2: 'Next.js . TailwindCSS . Poke API . Vercel',
    url: 'https://pokenext-five.vercel.app/',
    repo: 'https://github.com/ThomasAubert/pokenext', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to send me an email',
  btn: 'Get In Touch',
  email: 'taubert.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ThomABT',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/thomasaubert',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thomasaubertprofile',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ThomasAubert',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
