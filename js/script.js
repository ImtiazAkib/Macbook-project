function memoryCostCalc(memorySize) {
    const memoryCost = document.getElementById('memo-cost');
    if (memorySize == '8gb') {
        memoryCost.innerText = 0;
    }
    else if (memorySize == '16gb') {
        memoryCost.innerText = 180;
    }
}
document.getElementById('btn-primary-memory').addEventListener('click', function () {

    memoryCostCalc('16gb');

})
document.getElementById('btn-base-memory').addEventListener('click', function () {
    memoryCostCalc('8gb');

})

// storage calculation

