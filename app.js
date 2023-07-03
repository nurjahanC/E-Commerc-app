// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });


// import { formatPrice, getElement } from '../utils.js';
// const cartItemsDOM = getElement('.cart-items');
// const addToCartDOM = ({ id, name, price, image, amount }) => {
//   const article = document.createElement('article');
//   article.classList.add('cart-item');
//   article.setAttribute('data-id', id);
//   article.innerHTML = `
//     <img src="${image}"
//               class="cart-item-img"
//               alt="${name}"
//             />  
//             <div>
//               <h4 class="cart-item-name">${name}</h4>
//               <p class="cart-item-price">${formatPrice(price)}</p>
//               <button class="cart-item-remove-btn" data-id="${id}">remove</button>
//             </div>
          
//             <div>
//               <button class="cart-item-increase-btn" data-id="${id}">
//                 <i class="fas fa-chevron-up"></i>
//               </button>
//               <p class="cart-item-amount" data-id="${id}">${amount}</p>
//               <button class="cart-item-decrease-btn" data-id="${id}">
//                 <i class="fas fa-chevron-down"></i>
//               </button>
//             </div>
//   `;
//   cartItemsDOM.appendChild(article);
// };

// export default addToCartDOM;

// // cart/addToCartDOM.js end

// // import
// import {
//     getStorageItem,
//     setStorageItem,
//     formatPrice,
//     getElement,
//   } from '../utils.js';
//   import { openCart } from './toggleCart.js';
//   import { findProduct } from '../store.js';
//   import addToCartDOM from './addToCartDOM.js';
//   // set items
  
//   const cartItemCountDOM = getElement('.cart-item-count');
//   const cartItemsDOM = getElement('.cart-items');
//   const cartTotalDOM = getElement('.cart-total');
  
//   let cart = getStorageItem('cart');
  
//   export const addToCart = (id) => {
//     let item = cart.find((cartItem) => cartItem.id === id);
  
//     if (!item) {
//       let product = findProduct(id);
//       // add item to the the
//       product = { ...product, amount: 1 };
//       cart = [...cart, product];
//       // add item to the DOM;
//       addToCartDOM(product);
//     } else {
//       // update values
//       const amount = increaseAmount(id);
//       const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
//       const newAmount = items.find((value) => value.dataset.id === id);
//       newAmount.textContent = amount;
//     }
//     // add one to the item count
//     displayCartItemCount();
//     // display cart totals
//     displayCartTotal();
//     // set cart in local storage
  
//     setStorageItem('cart', cart);
//     //more stuff coming up
//     openCart();
//   };
//   function displayCartItemCount() {
//     const amount = cart.reduce((total, cartItem) => {
//       return (total += cartItem.amount);
//     }, 0);
//     cartItemCountDOM.textContent = amount;
//   }
//   function displayCartTotal() {
//     let total = cart.reduce((total, cartItem) => {
//       return (total += cartItem.price * cartItem.amount);
//     }, 0);
//     cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
//   }
//   function displayCartItemsDOM() {
//     cart.forEach((cartItem) => {
//       addToCartDOM(cartItem);
//     });
//   }
//   function removeItem(id) {
//     cart = cart.filter((cartItem) => cartItem.id !== id);
//   }
//   function increaseAmount(id) {
//     let newAmount;
//     cart = cart.map((cartItem) => {
//       if (cartItem.id === id) {
//         newAmount = cartItem.amount + 1;
//         cartItem = { ...cartItem, amount: newAmount };
//       }
//       return cartItem;
//     });
//     return newAmount;
//   }
//   function decreaseAmount(id) {
//     let newAmount;
//     cart = cart.map((cartItem) => {
//       if (cartItem.id === id) {
//         newAmount = cartItem.amount - 1;
//         cartItem = { ...cartItem, amount: newAmount };
//       }
//       return cartItem;
//     });
//     return newAmount;
//   }
  
//   function setupCartFunctionality() {
//     cartItemsDOM.addEventListener('click', function (e) {
//       const element = e.target;
//       const parent = e.target.parentElement;
//       const id = e.target.dataset.id;
//       const parentID = e.target.parentElement.dataset.id;
//       // remove
//       if (element.classList.contains('cart-item-remove-btn')) {
//         removeItem(id);
//         // parent.parentElement.remove();
//         element.parentElement.parentElement.remove();
//       }
//       // increase
//       if (parent.classList.contains('cart-item-increase-btn')) {
//         const newAmount = increaseAmount(parentID);
//         parent.nextElementSibling.textContent = newAmount;
//       }
//       // decrease
//       if (parent.classList.contains('cart-item-decrease-btn')) {
//         const newAmount = decreaseAmount(parentID);
//         if (newAmount === 0) {
//           removeItem(parentID);
//           parent.parentElement.parentElement.remove();
//         } else {
//           parent.previousElementSibling.textContent = newAmount;
//         }
//       }
//       displayCartItemCount();
//       displayCartTotal();
//       setStorageItem('cart', cart);
//     });
//   }
//   const init = () => {
//     // display amount of cart items
//     displayCartItemCount();
//     // display total
//     displayCartTotal();
//     // add all cart items to the dom
//     displayCartItemsDOM();
//     // setup cart functionality
//     setupCartFunctionality();
//   };
//   init();

// // cart/setupCart.js  end

// import { getElement } from '../utils.js';

// const cartOverlay = getElement('.cart-overlay');
// const closeCartBtn = getElement('.cart-close');
// const toggleCartBtn = getElement('.toggle-cart');

// toggleCartBtn.addEventListener('click', () => {
//   cartOverlay.classList.add('show');
// });
// closeCartBtn.addEventListener('click', () => {
//   cartOverlay.classList.remove('show');
// });

// export const openCart = () => {
//   cartOverlay.classList.add('show');
// };

// // /cart/toggleCart.js


// import { getElement } from '../utils.js';
// import display from '../displayProducts.js';

// const setupCompanies = (store) => {
//   let companies = ['all', ...new Set(store.map((product) => product.company))];
//   const companiesDOM = getElement('.companies');
//   companiesDOM.innerHTML = companies
//     .map((company) => {
//       return ` <button class="company-btn">${company}</button>`;
//     })
//     .join('');
//   companiesDOM.addEventListener('click', function (e) {
//     const element = e.target;
//     if (element.classList.contains('company-btn')) {
//       let newStore = [];
//       if (element.textContent === 'all') {
//         newStore = [...store];
//       } else {
//         newStore = store.filter(
//           (product) => product.company === e.target.textContent
//         );
//       }

//       display(newStore, getElement('.products-container'), true);
//     }
//   });
// };

// export default setupCompanies;

// filters/companies.js  end 




// import { getElement } from '../utils.js';
// import display from '../displayProducts.js';

// const setupPrice = (store) => {
//   const priceInput = getElement('.price-filter');
//   const priceValue = getElement('.price-value');

//   // setup filter
//   let maxPrice = store.map((product) => product.price);
//   maxPrice = Math.max(...maxPrice);
//   maxPrice = Math.ceil(maxPrice / 100);
//   priceInput.value = maxPrice;
//   priceInput.max = maxPrice;
//   priceInput.min = 0;
//   priceValue.textContent = `Value : $${maxPrice}`;

//   priceInput.addEventListener('input', function () {
//     const value = parseInt(priceInput.value);
//     priceValue.textContent = `Value : $${value}`;
//     let newStore = store.filter((product) => product.price / 100 <= value);
//     display(newStore, getElement('.products-container'), true);
//     if (newStore.length < 1) {
//       const products = getElement('.products-container');
//       products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
//     }
//   });
// };

// export default setupPrice;
// // filters/price.js  end






// import { getElement } from '../utils.js';
// import display from '../displayProducts.js';
// const setupSearch = (store) => {
//   const form = getElement('.input-form');
//   const nameInput = getElement('.search-input');
//   form.addEventListener('keyup', function () {
//     const value = nameInput.value;
//     if (value) {
//       const newStore = store.filter((product) => {
//         let { name } = product;
//         name = name.toLowerCase();
//         if (name.startsWith(value)) {
//           return product;
//         }
//       });
//       display(newStore, getElement('.products-container'), true);
//       if (newStore.length < 1) {
//         const products = getElement('.products-container');
//         products.innerHTML = `<h3 class="filter-error">
//        sorry, no products matched your search
//        </h3>`;
//       }
//     } else {
//       display(store, getElement('.products-container'), true);
//     }
//   });
// };

// export default setupSearch;
// // filters/search.js  end




// // global imports
// import '../toggleSidebar.js';
// import '../cart/toggleCart.js';
// import '../cart/setupCart.js';
// // pages/about.js  end

// // global imports
// import '../toggleSidebar.js';
// import '../cart/toggleCart.js';
// import '../cart/setupCart.js';
// // specific
// import { addToCart } from '../cart/setupCart.js';
// import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// // selections
// const loading = getElement('.page-loading');
// const centerDOM = getElement('.single-product-center');
// const pageTitleDOM = getElement('.page-hero-title');
// const imgDOM = getElement('.single-product-img');
// const titleDOM = getElement('.single-product-title');
// const companyDOM = getElement('.single-product-company');
// const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
// const descDOM = getElement('.single-product-desc');
// const cartBtn = getElement('.addToCartBtn');

// // cart product
// let productID;

// // show product when page loads
// window.addEventListener('DOMContentLoaded', async function () {
//   const urlID = window.location.search;

//   try {
//     const response = await fetch(`${singleProductUrl}${urlID}`);
//     if (response.status >= 200 && response.status <= 299) {
//       const product = await response.json();
//       // grab data
//       const { id, fields } = product;
//       productID = id;

//       const { name, company, price, colors, description } = fields;
//       const image = fields.image[0].thumbnails.large.url;
//       // set values

//       document.title = `${name.toUpperCase()} | Comfy`;
//       pageTitleDOM.textContent = `Home / ${name}`;
//       imgDOM.src = image;
//       titleDOM.textContent = name;
//       companyDOM.textContent = `by ${company}`;
//       priceDOM.textContent = formatPrice(price);
//       descDOM.textContent = description;
//       colors.forEach((color) => {
//         const span = document.createElement('span');
//         span.classList.add('product-color');
//         span.style.backgroundColor = `${color}`;
//         colorsDOM.appendChild(span);
//       });
//     } else {
//       console.log(response.status, response.statusText);
//       centerDOM.innerHTML = `
//     <div>
//     <h3 class="error">sorry, something went wrong</h3>
//     <a href="index.html" class="btn">back home</a>
//     </div> 
//      `;
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   loading.style.display = 'none';
// });

// cartBtn.addEventListener('click', function () {
//   addToCart(productID);
// });
// // pages/product.js end




// // global imports
// import '../toggleSidebar.js';
// import '../cart/toggleCart.js';
// import '../cart/setupCart.js';

// //  filter imports
// import setupSearch from '../filters/search.js';
// import setupCompanies from '../filters/companies.js';
// import setupPrice from '../filters/price.js';

// // specific imports
// import { store, setupStore } from '../store.js';
// import display from '../displayProducts.js';
// import { getElement } from '../utils.js';
// // import fetch products
// import fetchProducts from '../fetchProducts.js';

// const init = async () => {
//   const loading = getElement('.page-loading');
//   if (store.length < 1) {
//     const products = await fetchProducts();
//     setupStore(products);
//   }
//   display(store, getElement('.products-container'));

//   setupSearch(store);
//   setupCompanies(store);
//   setupPrice(store);
//   loading.style.display = 'none';
// };

// init();
// // src/pages/products.js  end




// import { formatPrice } from './utils.js';
// import { addToCart } from './cart/setupCart.js';
// const display = (products, element, filters) => {
//   // display products
//   element.innerHTML = products
//     .map((product) => {
//       const { id, name, image, price } = product;
//       return ` <article class="product">
//           <div class="product-container">
//             <img src="${image}" class="product-img img" alt="${name}" />
           
//             <div class="product-icons">
//               <a href="product.html?id=${id}" class="product-icon">
//                 <i class="fas fa-search"></i>
//               </a>
//               <button class="product-cart-btn product-icon" data-id="${id}">
//                 <i class="fas fa-shopping-cart"></i>
//               </button>
//             </div>
//           </div>
//           <footer>
//             <p class="product-name">${name}</p>
//             <h4 class="product-price">${formatPrice(price)}</h4>
//           </footer>
//         </article> `;
//     })
//     .join('');

//   if (filters) return;

//   element.addEventListener('click', function (e) {
//     const parent = e.target.parentElement;
//     if (parent.classList.contains('product-cart-btn')) {
//       addToCart(parent.dataset.id);
//     }
//   });
// };

// export default display;
// // src/displayProducts.js end




// import { allProductsUrl } from './utils.js';

// const fetchProducts = async () => {
//   const response = await fetch(allProductsUrl).catch((err) => console.log(err));
//   if (response) {
//     return response.json();
//   }
//   return response;
// };

// export default fetchProducts;
// // src/fetchProducts.js  end


// import { getStorageItem, setStorageItem } from './utils.js';
// let store = getStorageItem('store');
// const setupStore = (products) => {
//   store = products.map((product) => {
//     const {
//       id,
//       fields: { featured, name, price, company, colors, image: img },
//     } = product;
//     const image = img[0].thumbnails.large.url;
//     return { id, featured, name, price, company, colors, image };
//   });
//   setStorageItem('store', store);
// };

// const findProduct = (id) => {
//   let product = store.find((product) => product.id === id);
//   return product;
// };

// export { store, setupStore, findProduct };
// // src/store.js  end

// import { getElement } from './utils.js';

// const toggleNav = getElement('.toggle-nav');
// const sidebarOverlay = getElement('.sidebar-overlay');
// const closeBtn = getElement('.sidebar-close');

// toggleNav.addEventListener('click', () => {
//   sidebarOverlay.classList.add('show');
// });
// closeBtn.addEventListener('click', () => {
//   sidebarOverlay.classList.remove('show');
// });
// // src/toggleSidebar.js 





// //   ATTENTION!!!!!!!!!!!
// //   I SWITCHED TO PERMANENT DOMAIN
// //   DATA IS THE SAME JUST A DIFFERENT URL,
// //   DOES NOT AFFECT PROJECT FUNCTIONALITY

// const allProductsUrl = 'https://course-api.com/javascript-store-products'
// // temporary single product
// // 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
// const singleProductUrl =
//   'https://course-api.com/javascript-store-single-product'

// const getElement = (selection) => {
//   const element = document.querySelector(selection)
//   if (element) return element
//   throw new Error(`Please check "${selection}" selector, no such element exist`)
// }

// const formatPrice = (price) => {
//   let formattedPrice = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format((price / 100).toFixed(2))
//   return formattedPrice
// }

// const getStorageItem = (item) => {
//   let storageItem = localStorage.getItem(item)
//   if (storageItem) {
//     storageItem = JSON.parse(localStorage.getItem(item))
//   } else {
//     storageItem = []
//   }
//   return storageItem
// }

// const setStorageItem = (name, item) => {
//   localStorage.setItem(name, JSON.stringify(item))
// }

// export {
//   allProductsUrl,
//   singleProductUrl,
//   getElement,
//   formatPrice,
//   getStorageItem,
//   setStorageItem,
// }

// // src/utils.js end