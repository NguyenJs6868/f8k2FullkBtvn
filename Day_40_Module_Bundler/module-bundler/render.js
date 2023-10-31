const Home = () => `
    <h1>Home</h1>
    <a href="/about" data-navigo>About</a>
`;

const Products = () => {
    return `
	<h1>Products</h1>
	<a href="/about" data-navigo>About</a>
	`
};

const ProductDetail = () => {
  return `
  <h1>ProductDetail</h1>
  `
};

const About = () => {
    return `
    <h1>About</h1>
    <a href="/" data-navigo>Home</a>
`
}
;

const NotFound = () => {
    return `
    <h1>Not Found</h1>
    <a href="/" data-navigo>Home</a>
    `
};

// component

const Header = () => {
   return `
   <h1>Header</h1>
   <a href="/" data-navigo>Home</a>
   `
};

const Footer = () => {
    return `<h1>footer</h1>`
};

const DefaultLayout = () => {
    return `
    <header class="header">
      <span class="title">HEADER</span>
    </header>


    <main class="content-app">
      <div class="left-side-bar">
        <span class="title">Menu</span>
        <ul>
          <li><a href="">Trang Chủ</a></li>
          <li><a href="">Giới thiệu</a></li>
          <li><a href="">Trang Chủ</a></li>
        </ul>
      </div>

      <div class="right-content">
        <div class="title">Chi tiết sản phẩm</div>
        <button class="back">Back</button>

      </div>
    </main>


    <footer class="footer">
      <span class="title">FOOTER</span>
    </footer>

    `;
}

export {
    Home,
    Products,
    ProductDetail,
    About,
    NotFound,
    Header,
    Footer,
    DefaultLayout,
 };