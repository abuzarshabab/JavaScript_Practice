const movements = [200, 450, -400, 3000, -650, 5500, -588];

const deposits = movements.filter(mov => mov > 0);
const depositsFor = [];

console.log(deposits);

for (const move of movements) {
    if (move > 0)
        depositsFor.push(move);
}
console.log(depositsFor);