const GenerateNumber=(n)=>{
    if(n !==1 && n !==2){
        return"Enter Valid Number"
    }
    for(let j=0; n<=100; n=n+2){
        console.log(n);
    }
}
console.lof(GenerateNumber(1))

//1,2,current value +2 add 
//1,2,not enter it's return enter valid number
