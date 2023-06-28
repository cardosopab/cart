let productList = JSON.parse(localStorage.getItem('productList')) || [];

async function fetchProducts() {
  try {
    const response = await fetch('/models/products.json');
    productList = await response.json();
    localStorage.setItem('productList', JSON.stringify(productList));
    // populateProductList();
  } catch (error) {
    console.error('Error:', error);
  }
}

// fetchProducts();