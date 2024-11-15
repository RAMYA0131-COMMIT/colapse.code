let DiscountInArray = async () => {
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json()
    let product = data.products;

    discounteddata = [];
    let pricedata = product.map((a) => {
        (a.price = a.price - 2);
        discounteddata.push(a);
        
        let check = discounteddata.every((b) => b.price);
        console.log(check);
    })
}

DiscountInArray();
// const fetchcall = async() => {
//     try{
//         let apicall = await fetch('https://dummyjson.com/products');
//         let product = await apicall.json();
//         let above10 =[];
        
        
//          product.products.every((e)=>{
//             if (e.discountpercentage) {
//                 above10.push(e)
                
                
//             }else{
//                 console.log(e);
                
//             }
            
//             console.log(above10)
//            })
//     }catch(error){
//         console.log("your network is very low ");
        
//     }
// }
//fetchcall()