document.addEventListener('DOMContentLoaded', function () {
    const orders = [
        { orderNumber: 1, coffeeType: 'Latte', size: 'Medium', quantity: 2, deliveryAddress: '123 Main St' },
        { orderNumber: 2, coffeeType: 'Cappuccino', size: 'Large', quantity: 1, deliveryAddress: '456 Oak St' },
        { orderNumber: 3, coffeeType: 'Caffee Mocha', size: 'Small', quantity: 1, deliveryAddress: '461 Oak St' },
        { orderNumber: 4, coffeeType: 'Caffee Frappucino', size: 'Large', quantity: 4, deliveryAddress: '455 Oak St' },
        { orderNumber: 5, coffeeType: 'Cappuccino', size: 'Medium', quantity: 3, deliveryAddress: '987 Oak St' },
        { orderNumber: 6, coffeeType: 'Latte', size: 'Large', quantity: 1, deliveryAddress: '456 Oak St' },
        { orderNumber: 7, coffeeType: 'Filter Coffee', size: 'Large', quantity: 2, deliveryAddress: '908 Main St' },
        { orderNumber: 8, coffeeType: 'Flat White', size: 'Large', quantity: 2, deliveryAddress: '222 Oak St' },
        { orderNumber: 9, coffeeType: 'Cappuccino', size: 'Medium', quantity: 1, deliveryAddress: '111 Eren St' },
        { orderNumber: 10, coffeeType: 'Cold Brew', size: 'Medium', quantity: 3, deliveryAddress: '333 Oak St' },

    ];

    function displayRecentOrders() {
        const orderDisplay = document.getElementById('orderDisplay');
        const recentOrders = orders.slice(-10);

        recentOrders.forEach(order => {
            const orderInfo = `
                <div class="mb-3">
                    <strong>Order Number:</strong> ${order.orderNumber}<br>
                    <strong>Coffee Type:</strong> ${order.coffeeType}<br>
                    <strong>Size:</strong> ${order.size}<br>
                    <strong>Quantity:</strong> ${order.quantity}<br>
                    <strong>Delivery Address:</strong> ${order.deliveryAddress}
                </div>
                <hr>
            `;

            orderDisplay.innerHTML += orderInfo;
        });
    }

    displayRecentOrders();
});
