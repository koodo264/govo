document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = productElement.dataset.id;
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
            
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(li);
            
            total += item.price * item.quantity;
        });

        totalElement.textContent = total.toFixed(2);
    }
});
