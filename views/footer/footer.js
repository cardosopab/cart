const footer_section = document.querySelector("#footer");
const footerElement = document.createElement('div');
footerElement.classList.add('site-footer');
footerElement.innerHTML = `
<div class="footer-container">
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: cardosopab@gmail.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: 123 Magic Street, Wizardville</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/views/cart_page/cart_page.html">Cart</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-media-icons">
        <div title="N/A" href="#" class="fa fa-facebook"></div>
        <div title="N/A" href="#" class="fa fa-twitter"></div>
        <div title="N/A" href="#" class="fa fa-instagram"></div>
      </div>
    </div>
  </div>
  <div class="bottom-footer">
    <p>&copy; 2023 Pablo Cardoso. All rights reserved.</p>
  </div>
`;
footer_section.appendChild(footerElement);

footerElement.addEventListener('click', event => {
  let footerElement = event.target;
  console.log(footerElement);
});