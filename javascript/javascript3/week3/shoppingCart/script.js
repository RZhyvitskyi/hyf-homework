import ShoppingCart from './classes/ShoppingCart.js';
import Product from './classes/Product.js';

const shoppingList = document.getElementById('shopping-list');
const userName = document.getElementById('user-name');
const totalPrice = document.getElementById('total-price');
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const blanketOnSearch = document.getElementById('blanket');

const shoppingCart = new ShoppingCart(shoppingList, searchList);

(async () => {
  const userInfo = await shoppingCart.getUser(1);
  userName.innerHTML = `... <span class="user__name">${userInfo.name}</span>`;

  const getProducts = await fetch('./productsList.json');
  const productsData = await getProducts.json();

  const productsList = productsData.products.map(
    (product) => new Product(product)
  );

  productsList.forEach((product) => shoppingCart.addProduct(product));
  shoppingCart.renderProducts();
  totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;

  const searchProduct = async () => {
    const searchValue = searchInput.value.toLowerCase().trim();
    blanketOnSearch.classList.add('blanket_active');

    if (searchValue) {
      const filteredProducts = await shoppingCart.searchProduct(searchValue);
      shoppingCart.renderSearchedProducts(filteredProducts);
      searchList.classList.add('search__list_active');
    } else {
      searchList.classList.remove('search__list_active');
      blanketOnSearch.classList.remove('blanket_active');
    }
  };

  const closeSearchList = () => {
    searchList.classList.remove('search__list_active');
    blanketOnSearch.classList.remove('blanket_active');
  };

  searchInput.addEventListener('keyup', searchProduct);
  searchInput.addEventListener('focusout', closeSearchList);

  // I'm so sorry for this code, just give me to make it on ReactJS.
  shoppingList.addEventListener('click', (e) => {
    const parentTarget = e.target.parentElement;

    if (parentTarget.classList.contains('btn-delete')) {
      shoppingCart.removeProduct(+parentTarget.dataset.id);
      shoppingCart.renderProducts();
      totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;
    } else if (parentTarget.classList.contains('arrow-left')) {
      const amountInput = document.querySelector(
        `[data-input="${parentTarget.dataset.id}"]`
      );
      const priceOutput = document.querySelector(
        `[data-price="${parentTarget.dataset.id}"]`
      );

      const productId = parentTarget.dataset.id;
      const product = shoppingCart.decreaseAmount(productId);
      amountInput.value = product.amount;
      priceOutput.innerHTML = `${product.amount * product.price} DKK`;
      totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;
    } else if (parentTarget.classList.contains('arrow-right')) {
      const amountInput = document.querySelector(
        `[data-input="${parentTarget.dataset.id}"]`
      );
      const priceOutput = document.querySelector(
        `[data-price="${parentTarget.dataset.id}"]`
      );

      const productId = parentTarget.dataset.id;
      const product = shoppingCart.increaseAmount(productId);
      amountInput.value = product.amount;
      priceOutput.innerHTML = `${product.amount * product.price} DKK`;
      totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;
    }
  });
})();
