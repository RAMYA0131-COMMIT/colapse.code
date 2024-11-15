let data= new Promise((resolve,reject)=>{
    let a=true;
    if(a){
        resolve("resolved");
    }
    else { 
        reject("got reject"); 
    }
});
console.log(data)