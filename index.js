const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.url);

  response.write('<h1>Hello world!</h1>')
  response.write('<h1>Hello world!</h1>')
  response.end()
})

server.listen(3000, () =>{
    console.log('Server has been started on port: 3000');
})

