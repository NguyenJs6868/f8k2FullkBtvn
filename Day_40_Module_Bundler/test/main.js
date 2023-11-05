import Navigo from 'navigo'
import { Home, About, NotFound } from './render.js';
const root = document.getElementById('app');

const render = (callback) => {
  root.innerHTML = callback();
};

const router = new Navigo('/');

router
  .on({
    '/': () => {
      render(Home);
    },
    '/index.html': () => {
      render(Home);
    },
    '/about': () => {
      render(About);
    },
    '*': () => {
      render(NotFound);
    },
  })
  .notFound(() => {
    render(NotFound);
  })
  .resolve();
