// memory cost calculation
function memoryCostCalc(memoryType) {
    const memoryCost = document.getElementById('memory-cost');
    if (memoryType == 'base') {
        memoryCost.innerText = 0;
    }
    else if (memoryType == 'primary') {
        memoryCost.innerText = 180;
    }
    innerTextAll();
}
document.getElementById('btn-primary-memory').addEventListener('click', function () {

    memoryCostCalc('primary');


})
document.getElementById('btn-base-memory').addEventListener('click', function () {
    memoryCostCalc('base');

})

// storage cost calculation
function storageCostCalc(storageType) {
    const storageCost = document.getElementById('storage-cost');
    if (storageType == 'base') {
        storageCost.innerText = 0;
    }
    else if (storageType == 'primary') {
        storageCost.innerText = 100;
    }
    else if (storageType == 'secondary') {
        storageCost.innerText = 180;
    }
    innerTextAll();
}
document.getElementById('btn-base-storage').addEventListener('click', function () {
    storageCostCalc('base');

})
document.getElementById('btn-primary-storage').addEventListener('click', function () {
    storageCostCalc('primary');

})
document.getElementById('btn-secondary-storage').addEventListener('click', function () {
    storageCostCalc('secondary');

})

// shipment calculation
function delveryCost(delivery) {
    const deliveryCost = document.getElementById('delivery-cost');
    if (delivery == 'free') {
        deliveryCost.innerText = 0;
    }
    else if (delivery == 'costly') {
        deliveryCost.innerText = 20;
    }
    innerTextAll();
}
document.getElementById('free-delivery').addEventListener('click', function () {
    delveryCost('free');
})
document.getElementById('costly-delivery').addEventListener('click', function () {
    delveryCost('costly');
})

// Total price calculation
const totalPrice = document.getElementById('total-price');
const lastTotal = document.getElementById('last-total');
function innerTextAll() {
    const memory = document.getElementById('memory-cost');
    const memoryValue = Number(memory.innerText);
    const storage = document.getElementById('storage-cost');
    const storageValue = Number(storage.innerText);
    const deliveryInput = document.getElementById('delivery-cost');
    const deliveryFee = Number(deliveryInput.innerText);
    const grandTotal = 1299 + memoryValue + storageValue + deliveryFee;
    totalPrice.innerText = grandTotal;
    lastTotal.innerText = grandTotal;

}

// promo code section
let lastTotalValue = Number(lastTotal.innerText);
document.getElementById('discount-btn').addEventListener('click', function () {
    const input = document.getElementById('input-text');
    let inputValue = input.value;
    if (inputValue == 'stevekaku') {
        const free = lastTotal.innerText * 0.2;
        lastTotal.innerText = lastTotal.innerText - free;
        input.value = '';
    }
})










