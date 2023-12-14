// Sample item data (can be retrieved from a backend)

const items = [
    { id: 1, name: 'Running Shoes', price: 150.99 },
    { id: 2, name: 'Casual Shoes', price: 150.99 },

    // Add more items here

];

// Initialize cart and total

let cart = [];
let cartTotal = 0;

// Function to display items in the UI

function displayItems() {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

// Function to add items to the cart

function addToCart(itemId) {
    const selectedItem = items.find(item => item.id === itemId);
    cart.push(selectedItem);
    cartTotal += selectedItem.price;
    updateCartUI();
}

// Function to update the cart UI

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = `$${cartTotal.toFixed(2)}`;
}

// Function to simulate checkout (can be connected to backend for real checkout process)

function checkout() {
    alert('Checkout complete!');

    // Reset cart after checkout

    cart = [];
    cartTotal = 0;
    updateCartUI();
}

// Initial setup when the page loads

