// memory cost calculation
function memoryCostCalc(memoryType) {
    const memoryCost = document.getElementById('memory-cost');
    if (memoryType == 'base') {
        memoryCost.innerText = 0;
    }
    else if (memoryType == 'primary') {
        memoryCost.innerText = 180;
    }
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
