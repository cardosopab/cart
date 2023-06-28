const cartList = document.querySelector("#products-list");

cartList.addEventListener("click", event => {
    var productClicked = event.target;
    if (productClicked.tagName === 'BUTTON') {
        const product = event.target.parentNode;
        const productId = product.querySelector('#product-id').textContent;
        const productImage = product.querySelector('i').classList.value;
        const totalElement = document.querySelector('#total');
        const inputElement = product.querySelector(".quantity-value")
        let numberInput = product.querySelector(".quantity-value").value;
        let total = 0;

        if (productClicked.innerText === '+') {
            numberInput++;
            inputElement.stepUp();

            console.log(numberInput)
        } else {
            numberInput--;
            inputElement.stepDown();
            console.log(numberInput)
        } if (numberInput === 0) {
            product.remove();
            cartData = cartData.filter(item => item.id.trim() !== productId.trim() && item.image.trim() !== productImage.trim());
        }
        for (var i = 0; i < cartData.length; i++) {
            if (cartData[i].id.trim() == productId.trim() && cartData[i].image.trim() == productImage.trim()) {
                console.log(numberInput);
                cartData[i].quantity = numberInput;
                total += parseFloat(cartData[i].price) * parseFloat(numberInput);
            } else {
                total += parseFloat(cartData[i].price) * parseFloat(cartData[i].quantity);
            }
        }
        updateCartLocalStorage();
        totalElement.textContent = `Your total is $${total}`;
    }
});

function updateCartLocalStorage() {

    localStorage.setItem('cart', JSON.stringify(cartData));

}