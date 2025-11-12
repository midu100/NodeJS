// const fs = require('fs');

const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('Hello,Sayma')
})

server.listen(3000, ()=>{
    console.log('Server starting...')
})






















// setTimeout(()=>{
//     fs.appendFile('text.txt','Hello\n',(err,data)=>{
//          console.log(err)
//     })
// },2000)



// fs.readFile('text.txt','utf8', (err,data)=>{
//     console.log(err)
//     console.log(data)
// })


