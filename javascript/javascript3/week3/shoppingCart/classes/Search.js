export default class Search {
  constructor(searchResultField, currency) {
    this.searchResultField = searchResultField;
    this.searchedList = [];
    this.currency = currency;
  }

  async searchProduct(productName) {
    const productDBRequest = await fetch('./productDB.json');
    const productDB = await productDBRequest.json();

    this.searchedList = productDB.products.filter((item) =>
      item.name.toLowerCase().includes(productName)
    );

    return this.searchedList;
  }

  renderSearchedProducts(productList) {
    if (productList.length === 0) {
      this.searchResultField.innerHTML = `<li class="search__error"><p>No products found</p></li>`;
      return;
    }

    const searchList = productList.map((product) => {
      return `<li class="search__item" data-search="${product.id}">
        <p class="search__name">${product.name}</p>
      </li>`;
    });

    this.searchResultField.innerHTML = searchList.join('');
  }

  renderAndReturnProductPopup(productId, productPopup) {
    const productIndex = this.searchedList.findIndex(
      (item) => item.id == productId
    );
    const product = this.searchedList[productIndex];
    const myCurrency = this.currency;
    const priceAfterCurrencyCheck = parseFloat(
      (product.price * myCurrency.coefficient).toFixed(1)
    );

    productPopup.innerHTML = `<div class="container popup__container">
      <button class="btn_close">
        <img src="./img/icons/close.png">
      </button>
      <h3>${product.name}</h3>
      <div class="popup__img">
        <img src="./img/${product.name}.jpg" alt="${product.name}">
      </div>
      <p class="popup__description">${product.description}</p>
      <p class="popup__price">${priceAfterCurrencyCheck} ${myCurrency.currency}</p>
      <button class="btn_add" data-popupId="${product.id}">Add to cart</button>
    </div>`;

    return product;
  }

  renderAddedProduct(product, productPopup) {
    productPopup.innerHTML = `<div class="container popup__container popup_added">
      <h3>${product.name} is added to your shopping cart</h3> 
    </div>`;
  }
}
