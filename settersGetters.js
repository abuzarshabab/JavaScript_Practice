// 2. Classes are first-class citizen.


const account = {
    owner: 'Deepak Patel',
    movement: [200, 530, 120, 300],
    get latest() {
        return this.movement.slice().pop();

    },
    set latest(mov) {
        this.movement.push(mov);
        console.log(this.movement);
    }
}


console.log(account.latest);
account.latest = 234;
console.log(account.latest);
