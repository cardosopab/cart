const hero = document.querySelector("#hero");
const navElement = document.createElement('nav');
navElement.classList.add('navbar');
navElement.innerHTML = `
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/views/cart_page/cart_page.html">Cart</a></li>
</ul>
`;
hero.appendChild(navElement);