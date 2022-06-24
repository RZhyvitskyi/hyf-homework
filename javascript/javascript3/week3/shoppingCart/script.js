import ShoppingCart from './classes/ShoppingCart.js';
import Product from './classes/Product.js';
import Search from './classes/Search.js';

const shoppingList = document.getElementById('shopping-list');
const userName = document.getElementById('user-name');
const totalPrice = document.getElementById('total-price');
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list');
const productPopup = document.getElementById('product-popup');

const shoppingCart = new ShoppingCart(shoppingList);
const productSearchDB = new Search(searchList);

let productToAdd;

(async () => {
  const userInfo = await shoppingCart.getUser(1);
  userName.innerHTML = `... <span class="user__name">${userInfo.name}</span>`;

  const getProducts = await fetch('./productsList.json');
  const productsData = await getProducts.json();

  const cartProductsList = productsData.products.map(
    (product) => new Product(product)
  );

  cartProductsList.forEach((product) => shoppingCart.addProduct(product));
  shoppingCart.renderProducts();
  totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;

  // Functions --------------------------------------------------------------------------

  const searchProduct = async (e) => {
    const searchValue = searchInput.value.toLowerCase().trim();

    if (searchValue) {
      const filteredProducts = await productSearchDB.searchProduct(searchValue);
      productSearchDB.renderSearchedProducts(filteredProducts);
      searchList.classList.add('search__list_active');
    } else {
      searchList.classList.remove('search__list_active');
    }
  };

  const closeSearchList = () => {
    searchList.classList.remove('search__list_active');
  };

  const windowListener = (e) => {
    const parentTarget = e.target.parentElement;

    if (parentTarget.classList.contains('product__img')) {
      const productId = +parentTarget.dataset.img;

      productToAdd = shoppingCart.renderProductInfo(productId, productPopup);
      productPopup.classList.add('popup_active');
    } else if (parentTarget.classList.contains('search__item')) {
      const productId = parentTarget.dataset.search;

      productToAdd = productSearchDB.renderAndReturnProductPopup(
        productId,
        productPopup
      );
      productPopup.classList.add('popup_active');
      closeSearchList();
    } else if (!parentTarget.classList.contains('search__item')) {
      closeSearchList();
    }
  };

  const popupListener = (e) => {
    if (
      (e.target.classList.contains('product__popup') &&
        productPopup.classList.contains('popup_active')) ||
      e.target.parentElement.classList.contains('btn_close')
    ) {
      productPopup.classList.remove('popup_active');
    } else if (e.target.classList.contains('btn_add')) {
      const newProduct = new Product({ ...productToAdd, amount: 0 });
      shoppingCart.addProduct(newProduct);
      shoppingCart.renderProducts();
      changeProductAmount(newProduct, 'increaseAmount');
      productSearchDB.renderAddedProduct(newProduct, productPopup);
      setTimeout(() => {
        productPopup.classList.remove('popup_active');
      }, 2000);
    }
  };

  const changeProductAmount = (productToChange, changingAction) => {
    const amountInput = document.querySelector(
      `[data-input="${productToChange.id}"]`
    );
    const priceOutput = document.querySelector(
      `[data-price="${productToChange.id}"]`
    );

    const productId = productToChange.id;
    const product = shoppingCart[changingAction](productId);
    amountInput.value = product.amount;
    priceOutput.innerHTML = `${product.amount * product.price} DKK`;
    totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;
  };

  const shoppingListListener = (e) => {
    const parentTarget = e.target.parentElement;

    if (parentTarget.classList.contains('btn_delete')) {
      shoppingCart.removeProduct(+parentTarget.dataset.id);
      shoppingCart.renderProducts();
      totalPrice.innerHTML = `Total price: ${shoppingCart.getTotal()}`;
    } else if (parentTarget.classList.contains('arrow-left')) {
      changeProductAmount(parentTarget.dataset, 'decreaseAmount');
    } else if (parentTarget.classList.contains('arrow-right')) {
      changeProductAmount(parentTarget.dataset, 'increaseAmount');
    }
  };

  // Listeners ----------------------------------------------------------------
  searchInput.addEventListener('keyup', searchProduct);
  window.addEventListener('click', windowListener);
  productPopup.addEventListener('click', popupListener);
  shoppingList.addEventListener('click', shoppingListListener);
})();
