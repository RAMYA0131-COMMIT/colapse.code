let DiscountInArray = async () => {
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json()
    let product = data.products;
    //console.log(product);

    let above = 10;
    let below = 10;
   let aboveTen= product.filter(a => a.price > above);
    let belowTen = product.filter(b => b.price < below);
    
    let marge = aboveTen.concat(belowTen);
    console.log("marge Data",marge);
};
    
DiscountInArray();
    
// const fetchcall = async() => {
//     try{
//         let apicall = await fetch('https://dummyjson.com/products');
//         let product = await apicall.json();
//         let above10 =[];
//         let below = [];
        
        
//          product.products.filter((e)=>{
//             if (e.price>10) {
//                 above10.push(e)
//                 // console.log(above10)
                
//             }
//             if (e.price<10){
//                 below.push(e)
//                 console.log(below)
//             }
            
//            })

//            let merge = above10.concat(below)
//            console.log(merge);
           
//     }catch(error){
//         console.log("your network is very low ");
        
//     }
// }
// fetchcall()