const http = require('http')

const server = http.createServer()

//emits request sent
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)