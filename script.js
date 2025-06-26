const gridBtn = document.getElementById('gridViewBtn');
const listBtn = document.getElementById('listViewBtn');
const productList = document.getElementById('productList');

gridBtn.addEventListener('click', () => {
  productList.classList.add('product-list--grid');
  productList.classList.remove('product-list--list');
  gridBtn.classList.add('view-toggle--active');
  listBtn.classList.remove('view-toggle--active');
});

listBtn.addEventListener('click', () => {
  productList.classList.remove('product-list--grid');
  productList.classList.add('product-list--list');
  listBtn.classList.add('view-toggle--active');
  gridBtn.classList.remove('view-toggle--active');
});
