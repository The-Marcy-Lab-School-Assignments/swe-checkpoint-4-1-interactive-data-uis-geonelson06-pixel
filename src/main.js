import { getProducts, getProductById, getProductBySearchTerm } from './fetch-helpers.js';
import { renderProducts, renderProductDetails, renderError, hideError } from './dom-helpers.js';

getProducts().then((products) => {
  if (products.error) {
    renderError('Failed to load products.');
  } else {
    hideError();
    renderProducts(products.data);
  }
});

const productsList = document.querySelector('#products-list');
productsList.addEventListener('click', (event) => {
  const li = event.target.closest('li');
  if (!li) return;

  getProductById(li.dataset.productId).then((product) => {
    if (product === null) {
      renderError('Failed to load product details.');
    } else {
      hideError();
      renderProductDetails(product);
    }
  });
});

const form = document.querySelector("#search-form");
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchTerm = form.elements.query.value;

  const { data, error } = await getProductBySearchTerm(searchTerm);
  if (error) {
    renderError(`Failed to find products. Try again later. Error: ${error.message}`);
  }
  else if (data.length === 0) {
    renderError('Could not find products matching that search term.');
  }
  else {
    let products = data;

    hideError();
    renderProducts(products);
  }
});