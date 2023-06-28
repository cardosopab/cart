
function productSectionListener() {

    let productSection =
        document.querySelector('#product-section');


    productSection.addEventListener('click', event => {

        if (event.target.tagName === 'I') {
            if (!event.target.classList.contains("main-image")) {
                const len = event.target.classList.length;
                const color = event.target.classList[len - 1];
                const mainImage = productSection.querySelector('.main-image').classList;
                const mainImageLen = mainImage.length;
                const mainColor = mainImage[mainImageLen - 1]
                mainImage.remove(mainColor);
                mainImage.add(color);
            }
        }
    });
}

productSectionListener();