// bakery find

const royalBakery = {
    numberOfItems: { cake: 10, sweets: 10, bread: 5, snacks: 10 },
    numberOfItemsSold: { cakeSold: 3, sweetsSold: 6, breadSold: 4, snacksSold: 8 },
    price: { cakePrice: 100, sweetsPrice: 80, breadPrice: 40, snacksPrice: 30 },
    customer: {
     Tom:"brought 3 Cakes",
     mike:"brought 6 Sweets",
     jake:"brought 4 breads",
     john:"brought 8 Snacks"} };
     // console.log(royalBakery.customer.jake);

const totalItems = royalBakery.numberOfItems.cake+royalBakery.numberOfItems.sweets+royalBakery.numberOfItems.bread+royalBakery.numberOfItems.snacks
const totalItemsSold=royalBakery.numberOfItemsSold.cakeSold+royalBakery.numberOfItemsSold.breadSold+royalBakery.numberOfItemsSold.snacksSold+royalBakery.numberOfItemsSold.sweetsSold
const numberRemainingItems=totalItems-totalItemsSold

console.log("Total Items in Shop", totalItems);
console.log("Total Sold Items", totalItemsSold)
console.log("number of Remaining Item in Shop", numberRemainingItems)
console.log("Per Items Price")
console.log("per cake price",royalBakery.price.cakePrice)
console.log("per bread price",royalBakery.price.breadPrice )
console.log("per sweet price",royalBakery.price.sweetsPrice )
console.log("per snack price",royalBakery.price.snacksPrice )

totalGainCakeSales = royalBakery.price.cakePrice * royalBakery.numberOfItemsSold.cakeSold
totalGainBreadSales = royalBakery.price.breadPrice * royalBakery.numberOfItemsSold.breadSold
totalGainSweetSales = royalBakery.price.sweetsPrice * royalBakery.numberOfItemsSold.sweetsSold
totalGainSnackSales = royalBakery.price.snacksPrice * royalBakery.numberOfItemsSold.snacksSold

console.log("Cake Sales Gain",totalGainCakeSales)

console.log("Bread Sales Gain",totalGainBreadSales)
console.log("sweets Sales Gain",totalGainSweetSales)
console.log("snack Sales Gain",totalGainSnackSales)