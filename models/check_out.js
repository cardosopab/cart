
let cartData = JSON.parse(localStorage.getItem('cart')) || [];
let totalString = document.querySelector('#total');
let cartNotification = document.querySelector('#cart-notification');
function checkOutListener() {
    let heroSection =
        document.querySelector('#hero');
    let productsList =
        document.querySelector('#products-list');
    heroSection.addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON') {
            cartNotification.style.display = 'block';
            setTimeout(() => {
                cartNotification.style.display = 'none';
            }, 2000);
            deleteCart();
            productsList.innerHTML = '';
            const emptyCartMessage = document.createElement('h3');
            emptyCartMessage.id = 'empty-notice';
            emptyCartMessage.innerText = "Your cart is empty. Start shopping now!";
            productsList.appendChild(emptyCartMessage);
        }
    });
}

function deleteCart() {
    totalString.innerText = 'Your total is $0';
    localStorage.setItem('cart', JSON.stringify([]));
}
checkOutListener();