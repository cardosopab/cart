document.addEventListener('DOMContentLoaded', () => {
    // let productList = JSON.parse(localStorage.getItem('productList')) || [];
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    let product;
    let productSection =
        document.querySelector('#product-section');
    for (let i = 0; i < productList.length; i++) {
        let itemId = parseInt(productList[i].id);
        let productBool = itemId === productId;

        console.log("Details page id: ", productBool);
        if (productBool) {
            product = productList[i];
            productSection.innerHTML = `
<div id='image-column'>
    <p id="product-id"> ${product['id']} </p>
    <p id="product-name"> ${product['name']} </p>
    <i class="${product['image']} product-image main-image white"></i>
    <div id="details-options">
        
    </div>
</div>
<div id="details-column">
    <p id="product-name"> ${product['name']} </p>
    <p> $<span id="product-price">${product['price']}</span></p>
    <button id="add-to-cart"> Add product </button>
</div>
    `;
            // Loading 4 color options
            let colors = [
                "white", "red", "green", "blue",
            ];
            let detailsOptions =
                document.querySelector("#details-options");
            for (let i = 0; i < 4; i++) {
                let option = document.createElement('i');
                let classNames = product['image'].split(' ');
                classNames.forEach(className => {
                    option.classList.add(className);
                });
                option.classList.add('product-image');
                option.classList.add('small');
                option.classList.add(colors[i]);
                detailsOptions.appendChild(option);
            }
            console.log(detailsOptions);
            break;
        }
    }
});