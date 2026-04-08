const arr = createArray(1, 100);
console.log(arr);

const largest = getLargest(arr);
console.log(largest);

const avg = getAvg(arr);
console.log(avg);

const arr2 = createArray(10, 200);
console.log(arr2);
const slicedArr2 = getLargest(arr2);
console.log(slicedArr2);
const avgArr2 = getAvg(slicedArr2);
console.log(avgArr2);


function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function createArray(min, max) {
    let arr = [];
    for(let i=0; i<20; i++){
        arr.push(randomNumber(min, max));   
    }
    return arr;
}

function getLargest(arr) {
    const sorted = arr.sort(function(a, b) {return b - a});
    return sorted.slice(0, 10);
}

function getAvg(arr) {
    const total = arr.reduce(function(total, value){return total + value});
    return total / arr.length;
}
