const promisefunction = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I have resolved");
        reject("I have rejected")
    },2000)
})

promisefunction.then((result)=>{
    console.log("success:",result)
}).catch((error)=>{
    console.log("error")
})