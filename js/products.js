const productGrid = document.getElementById("productGrid");

fetch("data/products.json")
    .then(response => response.json())
    .then(products => {

        products.forEach(product => {

            productGrid.innerHTML += `

            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p class="price">$${product.price}</p>

                <p class="rating">⭐ ${product.rating}</p>

                <span class="discount">${product.discount}</span>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

            `;

        });

    })
    .catch(error => console.error("Error loading products:", error));