const num = 12

if(num > 10) {
  console.log("large number")
} else {
  console.log("small number")
}

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
  console.log('data received')
})

customEmitter.emit('response')