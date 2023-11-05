const Home = () => `
<h1>Home</h1>
<a href="/about" data-navigo>About</a>
`;

const About = () => `
<h1>About</h1>
<a href="/" data-navigo>Home</a>
`;

const NotFound = () => `
<h1>Not Found</h1>
<a href="/" data-navigo>Home</a>
`;

export { Home, About, NotFound };
