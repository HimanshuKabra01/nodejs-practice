const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('This is the home page')
  }
  if(req.url === '/about') {
    res.end('Here is the brief about our history')
  }

  res.end(`
   <h1>Oops!</h1> 
  <p>We don't have the page that you are looking for </p>
  <a href="/"> back home </a>
  `)
})

server.listen(5000)