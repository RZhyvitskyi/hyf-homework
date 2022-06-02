console.log('Script loaded');

const products = getAvailableProducts();

console.log(products);

const productsRoot = document.getElementById('hyfBayHelpers');
const searchInput = document.getElementById('search');
const maxPriceInput = document.getElementById('max-price');
const sortInput = document.getElementById('sort-price');
const shipsToInput = document.getElementById('ship-to');
const cartPrice = document.getElementById('total-price');

let productsSorted = products.sort((a, b) => b.price - a.price);
let productFilteredByCountry = productsSorted.filter((item) =>
  item.shipsTo
    .map((country) => country.toLowerCase())
    .includes(shipsToInput.value)
);
let totalPrice = 0;
// Functions ================================================================

const getCountryItem = (countryList) => {
  return countryList.shipsTo
    .map((country) => `<li className="ships-to__item"><p>${country}</p></li>`)
    .join('');
};

const renderListTemplate = (listItem) => {
  return `<li class="product__item" onClick="renderTotalPrice(${
    listItem.price
  })">
                <div className="product_info">
                <h3>${listItem.name}</h3>
                <p>price: ${listItem.price}</p>
                <p>rating: ${listItem.rating}</p>
            </div>
            <div className="product__ships-to">
               <ul className="ships-to">
                    ${getCountryItem(listItem)}
               </ul>    
            </div>
        </li>`;
};

const renderProducts = (productsList) => {
  if (productsList.length) {
    productsRoot.innerHTML = '';
    productsList.forEach((item) => {
      productsRoot.insertAdjacentHTML('afterbegin', renderListTemplate(item));
    });
  } else {
    productsRoot.insertAdjacentHTML(
      'afterbegin',
      '<p class="empty-list">List is empty</p>'
    );
  }
};

const renderTotalPrice = (price) => {
  totalPrice += price;
  cartPrice.innerHTML = totalPrice;
};

const filterByName = (productList, searchName) => {
  return productList.filter((name) => {
    const productName = name.name.toLowerCase();

    return productName.includes(searchName);
  });
};

const filterByMaxPrice = (productList, searchPrice) => {
  return productList.filter((item) => {
    return item.price <= searchPrice;
  });
};

const filterListHandler = () => {
  const searchName = searchInput.value.toLowerCase().trim();
  const maxPrice = maxPriceInput.value.trim();
  let filteredList;

  if (searchName && maxPrice) {
    filteredList = filterByName(productFilteredByCountry, searchName);
    filteredList = filterByMaxPrice(filteredList, maxPrice);

    if (filteredList.length) {
      renderProducts(filteredList);
    } else {
      productsRoot.innerHTML = `<p class="empty-list">Product with price less then '${maxPrice}' and name '${searchName}' is not found</p>`;
    }
  } else if (searchName) {
    filteredList = filterByName(productFilteredByCountry, searchName);

    if (filteredList.length) {
      renderProducts(filteredList);
    } else {
      productsRoot.innerHTML = `<p class="empty-list">Product '${searchName}' is not found</p>`;
    }
  } else if (maxPrice) {
    filteredList = filterByMaxPrice(productFilteredByCountry, maxPrice);

    if (filteredList.length) {
      renderProducts(filteredList);
    } else {
      productsRoot.innerHTML = `<p class="empty-list">Product with price less then '${maxPrice}' is not found</p>`;
    }
  } else {
    filteredList = productFilteredByCountry;
    renderProducts(filteredList);
  }
};

const sortingHandler = () => {
  switch (sortInput.value) {
    case 'cheap':
      productFilteredByCountry.sort((a, b) => b.price - a.price);
      filterListHandler();
      break;
    case 'expensive':
      productFilteredByCountry.sort((a, b) => a.price - b.price);
      filterListHandler();

      break;
    case 'name':
      productFilteredByCountry.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      filterListHandler();
      break;
  }
};

const shipsToHandler = () => {
  productFilteredByCountry = productsSorted.filter((item) =>
    item.shipsTo
      .map((country) => country.toLowerCase())
      .includes(shipsToInput.value)
  );

  filterListHandler();
};

// On page load

renderProducts(productFilteredByCountry);

// Listeners =============================================================
let filteredList = productsSorted;

searchInput.addEventListener('keyup', filterListHandler);
maxPriceInput.addEventListener('keyup', filterListHandler);
sortInput.addEventListener('change', sortingHandler);
shipsToInput.addEventListener('change', shipsToHandler);
productsRoot;
