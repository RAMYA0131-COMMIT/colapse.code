//using async to  make the function asynchronous
//using await
//fetch to url get promise in  return
//error handling  using try catch block


let dummyProduct = async () => {  
    try {
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        console.log(data.products[29].category);

    } catch {
        console.log("Error in dummyProduct");
    }
};
dummyProduct();