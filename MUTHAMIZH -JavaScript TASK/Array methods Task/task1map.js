let DiscountInArray = async () =>
{
    let res =  await fetch('https://dummyjson.com/products');
    let data =await res.json()
    let product = data.products;// console.log(product);
    newdata = [];
    let newproduct = product.map((a) =>
    { a.price = a.price - 2; //a.rating = 0;
        newdata.push(a);
        console.log(newdata);})
}

DiscountInArray();

// let data = [
//     { name: "apple", price: 11 },
//     { name: "banana", price: 16 },
//     { name: "blueberry", price: 6 },
//     { name: "orang", price: 8 }];

// let newdata = data.map((a) => {
//     a.price = a.price -2;    
//     console.log(newdata);
// })
