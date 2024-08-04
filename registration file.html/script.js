// Example script.js
document.addEventListener('DOMContentLoaded', function() {
    const electricityForm = document.getElementById('electricityForm');
    const waterSupplyForm = document.getElementById('waterSupplyForm');
    const phoneRechargeForm = document.getElementById('phoneRechargeForm');
    const licPolicyForm = document.getElementById('licPolicyForm');
    const dishRechargeForm = document.getElementById('dishRechargeForm');

    electricityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('electricityAmount').value;
        // Handle payment or processing here
        console.log(`Paying electricity bill amount: ${amount}`);
        // You can add AJAX or fetch calls here to process payment
    });

    waterSupplyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('waterSupplyAmount').value;
        console.log(`Paying water supply bill amount: ${amount}`);
    });

    phoneRechargeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('phoneRechargeAmount').value;
        console.log(`Recharging phone with amount: ${amount}`);
    });

    licPolicyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('licPolicyAmount').value;
        console.log(`Paying LIC policy premium amount: ${amount}`);
    });

    dishRechargeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('dishRechargeAmount').value;
        console.log(`Recharging Dish TV with amount: ${amount}`);
    });
});
