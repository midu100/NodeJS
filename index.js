const fs = require('fs');

setTimeout(()=>{
    fs.appendFile('text.txt','Hello\n',(err,data)=>{
         console.log(err)
    })
},2000)



fs.readFile('text.txt','utf8', (err,data)=>{
    console.log(err)
    console.log(data)
})


