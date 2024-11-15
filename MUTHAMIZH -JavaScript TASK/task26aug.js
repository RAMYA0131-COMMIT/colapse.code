// Fetching data from API

let getFindCatagories = async () => {
  try {
        let FilterCategory = [];// Fetch resData from the API    
        let resData = await fetch('https://dummyjson.com/products');//Fetch resData in json format       
        let data = await resData.json();// Get the category from the data resData
        let categoriesValue = data.products.map(value => value.category);
        //console.log(data.products);
       
      for (let i = 0; i < categoriesValue.length; i++) // Loop through the categories to find unique ones 
      {     let indexValue = 0;
          for (let j = i + 1; j < categoriesValue.length; j++) {
              if (categoriesValue[i] === categoriesValue[j]) { indexValue++; }
          }                    
            if (indexValue === 0) { // If no duplicates were found, add the category to the FilterCategory array
              FilterCategory.push(categoriesValue[i]);
          }
      }    
        console.log("Category", FilterCategory);
        document.getElementById('section').innerHTML = `<h1>Category : ${FilterCategory.join(' , ')}</h1>`
    } catch (error) {
        console.log("Error in getFindCatagories ", error);
        document.getElementById('section',error).innerHTML=`<h1>Network problem</h1> `
    }
};
getFindCatagories();



