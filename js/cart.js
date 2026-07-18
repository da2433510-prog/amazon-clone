function addToCart(id){

alert("Product ID " + id + " Added to Cart");

}
// ================= CART =================

// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in navbar
function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add Product
function addToCart(id) {

    // Check if product already exists
    const exists = cart.find(item => item.id === id);

    if (exists) {

        alert("Product already in cart.");

        return;

    }

    cart.push({
        id: id,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Product Added Successfully!");

}

// Initialize
updateCartCount();