const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
const even = numbers.filter((n) => n % 2 === 0);

console.log(doubled); // [2, 4, 6, 8]
console.log(even);    // [2, 4]
