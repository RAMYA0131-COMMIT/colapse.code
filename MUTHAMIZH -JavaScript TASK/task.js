//task 1 map method to discount price -2

// let DiscountInArray = async () => {
//     let res = await fetch('https://dummyjson.com/products');
//     let data = await res.json()
//     let product = data.products;// console.log(product);
//     newdata = [];
//     let newproduct = product.map((a) =>
//     { a.price = a.price - 2; //a.rating = 0;
//         newdata.push(a);
//         console.log(newdata);})
// }
// DiscountInArray();

//task 2 filter method to above 10 and below 10


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

//task 3 foreach method and use findndex to catagory

// let DiscountInArray = async () =>
//     {
//         let res =  await fetch('https://dummyjson.com/products');
//         let data =await res.json()
//         let product = data.products;// console.log(product);
//     newdata = [];
    
//         let newproduct = product.array.forEach(v => {
//             console.log(v.catagery);
            
//         }); 
        
        
//     }
    
//     DiscountInArray();
    

//task 4 concat method to merge above and below 10

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
    

//task 5 every method to check discounted or not

//task 6 includes method to find catagory

// let DiscountInArray = async () =>
//     {
//         let res =  await fetch('https://dummyjson.com/products');
//         let data =await res.json()
//     let product = data.products; console.log(product);
    
//    category = [];
    
//     let newCategory = product.map((a) => {
//         a.category ;

//         console.log(category.push(newCategory));
//      });
//     }
    
//     DiscountInArray();
    