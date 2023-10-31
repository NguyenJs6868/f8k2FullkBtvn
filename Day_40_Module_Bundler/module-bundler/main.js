import Navigo from 'navigo'
const root = document.getElementById('app');

import {
    Home,
    Products,
    ProductDetail,
    About,
    NotFound,
    Header,
    Footer,
    DefaultLayout
} from './render.js'

const render = (callback) => {
  root.innerHTML = callback();
  console.log('callback,', callback);
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
    '/products': () => {
        render(Products);
    },
    '/produc-detail/:id': () => {
        render(ProductDetail);
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
