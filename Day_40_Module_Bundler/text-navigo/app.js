// import Navigo from './navigo'; // When using ES modules.

const router = new Navigo('/');
console.log('router', router);

const root = document.querySelector('#root');

const setContent = (page) => {
	console.log('page: ', page);
	root.innerHTML = page();
}

// router.on('/home', function () {
// 	render('<h1>Home</h1>')
// });


export const Home = () => {
	return `<a href="about" data-navigo>About</a>`;
};

export const About = () => {
	return `<a href="home" data-navigo>Home</a>`;
};


router
  .on({
    // 'products/:id': function () {
    //   setContent('Products');
    // },
				'home': function () {
						setContent(Home)
				},
    'about': function () {
      setContent(About);
    },
    '*': function () {
      setContent(Home)
    }
  })
  .resolve();