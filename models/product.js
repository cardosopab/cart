class Product {
    constructor(id, name, price, description) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    addToCart() {
      // Code to add the product to the shopping cart
      console.log(`${this.name} added to cart.`);
    }
  
    delete() {
      // Code to delete the product from the system
      console.log(`${this.name} deleted.`);
    }
  }
  
//   export default Product; // Export the Product class
  