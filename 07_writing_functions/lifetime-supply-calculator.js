let calculateSupply = function (age, amountPerDay) {
    const maxAge = 99;
    let neededSupply = Math.round(amountPerDay * ((maxAge - age) * 365));
    return 'You will need ' + neededSupply + ' to last you until the ripe old age of ' + maxAge;
}

console.log(calculateSupply(37, 2.13));
console.log(calculateSupply(98, 10));
console.log(calculateSupply(23, 9.29));