function populateProductList() {
    let productsElement = document.querySelector('#products-list');
    productList.forEach(product => {
        let productsLI = document.createElement('li');
        productsLI.innerHTML = `
            <li><p id="product-id"> ${product['id']} </p>
            <i class="${product['image']} product-image"></i>
            <p id="product-name"> ${product['name']} 
            <span id="product-price"> $${product['price']} </span></p>
            `;
        productsElement.appendChild(productsLI);
    });
}

fetchProducts().then(
    populateProductList()
);