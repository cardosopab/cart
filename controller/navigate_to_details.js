
const suggestedProduct = document.querySelector("#suggested-product");

if (suggestedProduct) {
    suggestedProduct.addEventListener('click', event => {
        const product = event.target.closest('div');
        const productId = product.querySelector('#product-id').innerText;
        navigateTo(productId);
    });
}

function productListListener() {
    // Get the productsList
    const productsList = document.querySelector('#products-list');
    // Add click event
    productsList.addEventListener('click', event => {
        if (event.target.tagName != 'BUTTON') {
            const listItem = event.target.closest('li');
            const productId = listItem.querySelector('#product-id').innerText;
            navigateTo(productId);
        }
    });
}

productListListener();


function navigateTo(productId) {
    const url = `/views/details_page/details_page.html?id=${productId}`;
    window.location.href = url;
}