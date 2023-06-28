function displayCartItems() {
    let total = 0;
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const totalElement = document.querySelector("#total");
    const suggestedProduct = document.querySelector("#suggested-product");
    const productsList = document.querySelector("#products-list");
    const productIndex = Math.floor(Math.random() * productList.length);
    suggestedProduct.innerHTML = `
      <p id="product-id"> ${productList[productIndex].id} </p>
      <i class="${productList[productIndex].image} product-image"></i>`;
  
    productsList.innerHTML = "";
  
    if (cartData.length === 0) {
      const emptyCartMessage = document.createElement('h3');
      emptyCartMessage.id = 'empty-notice';
      emptyCartMessage.innerText = "Your cart is empty. Start shopping now!";
      productsList.appendChild(emptyCartMessage);
    } else {
      cartData.forEach((item) => {
        total += parseFloat(item.price) * parseFloat(item.quantity);
        const itemLi = document.createElement('li');
        itemLi.innerHTML = `
          <li><p id="product-id"> ${item['id']} </p>
          <p id="product-name"> ${item['name']} </p>
          <i class="${item['image']}"></i>
          <p id="product-price"> $${item['price']} </p>
          <button class="custom-spinner">-</button>
          <input class='quantity-value' type="number" value=${item['quantity']} >
          <button class="custom-spinner">+</button>
        `;
        productsList.appendChild(itemLi);
      });
    }
    
    totalElement.innerText = `Your total is $${total}`;
  }
  
  displayCartItems();
  