// Initialize quantity and total price
var quantity = 0;
var totalPrice = 0;

// Get elements for displaying quantity and total price
var quantityDisplay = document.getElementById('quantity');
var totalPriceDisplay = document.getElementById('total-price');

// Get all Buy Now buttons
var buyBtn1 = document.getElementById('buy-btn-1');
var buyBtn2 = document.getElementById('buy-btn-2');
var buyBtn3 = document.getElementById('buy-btn-3');
var buyBtn4 = document.getElementById('buy-btn-4');
var buyBtn5 = document.getElementById('buy-btn-5');
var buyBtn6 = document.getElementById('buy-btn-6');
var buyBtn7 = document.getElementById('buy-btn-7');
var buyBtn8 = document.getElementById('buy-btn-8');
var buyBtn9 = document.getElementById('buy-btn-9');

// Function to update cart when a product is bought
function buyProduct(price) {
    quantity += 1;
    totalPrice += price;
    quantityDisplay.textContent = quantity;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

w
buyBtn1.addEventListener('click', function() {
    buyProduct(100); // Product 1 price
});

buyBtn2.addEventListener('click', function() {
    buyProduct(120); // Product 2 price
});

buyBtn3.addEventListener('click', function() {
    buyProduct(150); // Product 3 price
});

buyBtn4.addEventListener('click', function() {
    buyProduct(80);  // Product 4 price
});

buyBtn5.addEventListener('click', function() {
    buyProduct(90);  // Product 5 price
});

buyBtn6.addEventListener('click', function() {
    buyProduct(60);  // Product 6 price
});

buyBtn7.addEventListener('click', function() {
    buyProduct(110); // Product 7 price
});

buyBtn8.addEventListener('click', function() {
    buyProduct(95);  // Product 8 price
});

buyBtn9.addEventListener('click', function() {
    buyProduct(130); // Product 9 price
});
