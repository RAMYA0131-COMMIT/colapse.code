// let product = [
//     { name: "apple", price: 11 },
//     { name: "banana", price: 16 },
//     { name: "blueberry", price: 6 },
//     { name: "orang", price: 8 }];

// let above = 10;
// let below = 10;
    
// let aboveTen = product.filter(a => a.price > above);
//     console.log("Above $10",aboveTen);
//     let belowTen=product.filter(b => b.price < below);
//     console.log("Below $10", belowTen);

// let DiscountInArray = async () => {
//     let res = await fetch('https://dummyjson.com/products');
//     let data = await res.json()
//     let product = data.products;
//     //console.log(product);
//     let above = 10;
//     let below = 10;
//    let aboveTen= product.filter(a => a.price > above);
//     console.log("Above $10",aboveTen);
//     let belowTen=product.filter(b => b.price < below);
//     console.log("Below $10", belowTen);
    
// };
    
// DiscountInArray();
    
const fetchcall = async() => {
    try{
        let apicall = await fetch('https://dummyjson.com/products');
        let product = await apicall.json();
        let above10 =[];
        let below = [];
        
        
         product.products.filter((e)=>{
            if (e.price>10) {
                above10.push(e)
                // console.log(above10)
                
            }
            if (e.price<10){
                below.push(e)
                console.log(below)
            }
            
           })
    }catch(error){
        console.log("your network is very low ");
        
    }
}
fetchcall()


