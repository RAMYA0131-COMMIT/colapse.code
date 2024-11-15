let DiscountInArray = async () =>
    {
        let res =  await fetch('https://dummyjson.com/products');
        let data =await res.json()
        let product = data.products;// console.log(product);
    newdata = [];
    
        let newproduct = product.array.forEach(v => {
            console.log(v.catagery);
            
        }); 
        
        
    }
    
    // DiscountInArray();
    // const fetchcall = async () => {
    //     try {
    //         let apicall = await fetch('https://dummyjson.com/products');
    //         let product = await apicall.json();
    //         let beautyindex = [];
    //         let all_category = [];
    //         let fragrancesindex = [];
    //         let groceriesindex = [];
    //         let furnitureindex = [];
    
    //         let ai = product.products.forEach(element => {
    //             // console.log(element.ca
    
    //             const indexfinder = all_category.findIndex(e =>
    //                 e == element.category
    //             )
    //             console.log(indexfinder);
    //             if (indexfinder === -1) {
    //                 all_category.push(element.category)
    //             }
    
    //         });
    
    //         console.log(all_category);
    
    
    //     } catch (error) {
    //         console.log("your network is very low ");
    
    //     }
    // }
    // fetchcall()