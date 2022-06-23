export default class ShoppingCart {
  constructor(renderField, searchResultField) {
    this.products = [];
    this.renderField = renderField;
    this.searchResultField = searchResultField;
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((item) => item.id !== productId);
  }

  async searchProduct(productName) {
    const productDBRequest = await fetch('./productDB.json');
    const productDB = await productDBRequest.json();

    return productDB.products.filter((item) =>
      item.name.toLowerCase().includes(productName)
    );
  }

  getTotal() {
    return this.products.reduce(
      (total, product) => total + product.price * product.amount,
      0
    );
  }

  renderProducts(productsArray = this.products) {
    this.renderField.innerHTML = '';

    const emptyList = `<li class="product__item product_error"><p>Shopping card is empty</p></li>`;

    if (productsArray.length === 0) {
      return (this.renderField.innerHTML = emptyList);
    }

    const productsHtmlList = productsArray.map((product) => {
      return `<li class="product__item">
        <div class="product__img">
          <img src="./img/${product.id}.jpg" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <div class="product__amount">
          <div class="arrow-left" data-id="${product.id}">
            <img src="./img/icons/left-arrow.png" alt="left-arrow">
          </div>
          <input class="amount__input" type="number" value="${product.amount}" data-input="${product.id}" readonly="readonly">
          <div class="arrow-right" data-id="${product.id}">
            <img src="./img/icons/right-arrow.png" alt="right-arrow">
          </div>
        </div>
        <p data-price="${product.id}">${product.price} DKK</p>
        <button data-id="${product.id}" class="btn btn-delete">
          <img src="./img/icons/delete.png" alt="delete">
        </button>
      </li>`;
    });

    this.renderField.innerHTML = productsHtmlList.join('');
  }

  renderSearchedProducts(productList) {
    if (productList.length === 0) {
      this.searchResultField.innerHTML = `<li class="search__error"><p>No products found<p></li>`;
      return;
    }

    const searchList = productList.map((product) => {
      return `<li class="search__item" data-searchId="${product.id}">
        <p class="search__name">${product.name}</p>
      </li>`;
    });

    this.searchResultField.innerHTML = searchList.join('');
  }

  async getUser(user) {
    const apiRequest = await fetch(
      `https://jsonplaceholder.typicode.com/users/${user}`
    );
    return await apiRequest.json();
  }

  increaseAmount(productId) {
    const productIndex = this.products.findIndex(
      (item) => item.id == productId
    );

    this.products[productIndex].amount += 1;

    return this.products[productIndex];
  }

  decreaseAmount(productId) {
    const productIndex = this.products.findIndex(
      (item) => item.id == productId
    );

    if (this.products[productIndex].amount === 0) {
      return this.products[productIndex];
    }

    this.products[productIndex].amount -= 1;

    return this.products[productIndex];
  }
}
