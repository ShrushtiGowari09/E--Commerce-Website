const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};
// Select all remove buttons
const removeButtons = document.querySelectorAll('.remove-item');

// Function to remove cart item
function removeCartItem(event) {
    const buttonClicked = event.target;
    const cartRow = buttonClicked.closest('tr'); // Find the nearest table row
    cartRow.remove(); // Remove the row from the table

    // Optionally, update the total or other cart-related calculations here
    updateCartTotal();
}

// Attach event listeners to all remove buttons
removeButtons.forEach(button => {
    button.addEventListener('click', removeCartItem);
});

// Function to update the cart total (optional)
function updateCartTotal() {
    const cartItems = document.querySelectorAll('#cart-items tr');
    let total = 0;

    cartItems.forEach(item => {
        const priceElement = item.querySelector('td:nth-child(4)');
        const quantityElement = item.querySelector('input');
        const price = parseFloat(priceElement.innerText.replace('₹', ''));
        const quantity = quantityElement.value;

        total += price * quantity;
    });

    document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)').innerText = '₹' + total;
    document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)').innerText = '₹' + total;
}
