'use strict'
const self = new Map();

self.set('name', "abuzar").set('age', 22)
    .set('mobile', [9973922757, 6200047574])
    .set('status', 'Single')
    .set('gmail', 'abuzarshabab@gmail.com')
    .set('education', 'Graduated')
self.set('address', 'Darbhanga Bihar');


console.log(self.delete('gmail'));
// self.clear()
// console.log(self);
const secret = ['secret', 'word']
const secret2 = ['secret', 'word']

self.set(secret, "You are beautiful");
self.set(secret2, "You are most  beautiful");

console.log(self)