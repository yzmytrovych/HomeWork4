const number = 3;
let isPrime = true;
if (number === 1) {
    console.log("не простое и не составное число.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} простое число`);
    } else {
        console.log(`${number} не простое число`);
    }
}

let n = 4;
let sum = 0;
 
for (let i = 0; i < n; i++) {
    if (n % i === 0){
       sum += i;
    } 
    if (sum === i) {
        console.log(`${i} досконале число`);
    } else {
        console.log(`${i} недосконале число`);
    }
}