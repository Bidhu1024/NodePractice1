const { readFile, writeFile } = require('fs')

readFile('./t1.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    readFile('./t2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./newfile1.txt','Here is the new file from the async function','utf8',(err,result)=>{
            if(err){
                console.log(err);

                return
            }
            console.log(result);
        })
    })
})