const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.write('Welcome to our page')
    
   }
   if(req.url === '/about'){
    res.write('this is the about us page')
    
   }
   res.end(`<h1> Oops this page is not found</h1>`)
   
})

server.listen(5001)                                                      