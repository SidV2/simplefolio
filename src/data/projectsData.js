import angularSpaceImg from '../assets/angularspace.webp';
import angularChallengesImg from '../assets/angularchallenges.webp';
import netflixGptImg from '../assets/netflixgptproj.webp';
import crownClothingImg from '../assets/crownclothingproj.webp';

export const projectsData = [
  {
    id: 1,
    title: "Angular Space",
    description: "Angular Space is a community hub for Angular developers to improve their expertise in Angular by contributing towards various open source projects and writing technical articles for the general Angular developer community.",
    liveUrl: "https://www.angularspace.com/",
    githubUrl: null,
    image: angularSpaceImg,
    tags: ["Angular", "Community", "Open Source"]
  },
  {
    id: 2,
    title: "Angular Challenges",
    description: "Angular Challenges is a web application helping candidates become good at front end Angular interviews. It teaches them deep concepts of the framework through real life challenges.",
    liveUrl: "https://angular-challenges.vercel.app/",
    githubUrl: "https://github.com/SidV2/angular-challenges",
    image: angularChallengesImg,
    tags: ["Angular", "Interview", "Learning"]
  },
  {
    id: 3,
    title: "Netflix GPT",
    description: "Netflix Clone with gpt support. Provides you recommendations of movies using generative AI. This is the current project I am working on.",
    liveUrl: null,
    githubUrl: "https://github.com/SidV2/netflix-gpt",
    image: netflixGptImg,
    tags: ["React", "AI", "Clone"]
  },
  {
    id: 4,
    title: "Crown Clothing",
    description: "Simple clothing website developed using ReactJS, Redux Thunk and Saga. Stripe Payments for card related payments and firebase as the backend.",
    liveUrl: "https://crwn-shop.netlify.app/",
    githubUrl: "https://github.com/SidV2/crwn-clothing",
    image: crownClothingImg,
    tags: ["React", "Redux", "E-commerce", "Firebase"]
  }
];