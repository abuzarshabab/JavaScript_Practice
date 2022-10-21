const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('crash', () => {
  console.log('Event crash is occured')
})

eventEmitter.emit('crash')