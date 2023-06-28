
let cartData = JSON.parse(localStorage.getItem('cart')) || [];
function cartButtonListener() {

    let productSection =
        document.querySelector('#product-section');
    let cartNotification = document.querySelector('#cart-notification');
    productSection.addEventListener('click', event => {
        let item;

        if (event.target.tagName === 'BUTTON') {
            cartNotification.style.display = 'block';
            setTimeout(() => {
                cartNotification.style.display = 'none';
            }, 2000);
            const productId = productSection.querySelector('#product-id').innerText;
            const productName = productSection.querySelector('#product-name').innerText;
            const productPrice = productSection.querySelector('#product-price').innerText;
            console.log(productPrice);
            const image = productSection.querySelector('i').classList.value;
            item = {
                id: productId,
                name: productName,
                price: productPrice,
                image: image.replace('main-image ', ''),
                quantity: 1,
            };
            addToCart(item);

        }
    });
}
function addToCart(item) {
    let exists = -1;
    for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === item.id && cartData[i].image === item.image) {
            console.log('match');
            exists = i;
        }
    }
    console.log(exists);
    let cartBool = exists === -1;
    console.log(cartBool);
    if (cartBool) {


        addToCartData(item);


        updateCartLocalStorage();
    } else {
        cartData[exists].quantity++;
        console.log(cartData[exists].quantity)

        updateCartLocalStorage();
    }
}

function deleteCart() {
    localStorage.setItem('cart', JSON.stringify([]));
}

function addToCartData(item) {

    cartData.push(item);
}

function updateCartLocalStorage() {

    localStorage.setItem('cart', JSON.stringify(cartData));

}
cartButtonListener();