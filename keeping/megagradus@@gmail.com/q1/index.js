function calculateSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateProduct(arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}