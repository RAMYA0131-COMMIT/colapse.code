// const royalBakery =
// {
//     numberOfItems: { cake: 10, sweets: 10, bread: 5, snacks: 10 },
    
//     numberOfItemsSold: { cakeSold: 3, sweetsSold: 6, breadSold: 4, snacksSold: 8 },

//     price: { cakePrice: 100, sweetsPrice: 80, breadPrice: 40, snacksPrice: 30 },

//     customer: {
//      Tom:"brought 3 Cakes",
//      mike:"brought 6 Sweets",
//      jake:"brought 4 breads",
//      john:"brought 8 Snacks"},
// };
// const totalItems = royalBakery.numberOfItems.cake +
//     royalBakery.numberOfItems.sweets +
//     royalBakery.numberOfItems.bread +
//     royalBakery.numberOfItems.snacks

// const totalItemsSold=
// royalBakery.numberOfItemsSold.cakeSold+
// royalBakery.numberOfItemsSold.breadSold+
// royalBakery.numberOfItemsSold.snacksSold+
// royalBakery.numberOfItemsSold.sweetsSold

// const numberRemainingItems=totalItems-totalItemsSold

// console.log("Total Items in Shop", totalItems);
// console.log("Total Sold Items", totalItemsSold)
// console.log("number of Remaining Item in Shop", numberRemainingItems)


 

//customer and how much they spend and each
//console.log("Per Items Price")
//console.log("per cake price",royalBakery.price.cakePrice)
//console.log("per bread price",royalBakery.price.breadPrice )
//console.log("per sweet price",royalBakery.price.sweetsPrice )
//console.log("per snack price",royalBakery.price.snacksPrice )

//totalGainCakeSales = royalBakery.price.cakePrice * royalBakery.numberOfItemsSold.cakeSold
//console.log("cake sales gain", totalGainCakeSales)
//totalGainbreadSales = royalBakery.price.breadPricePrice * royalBakery.numberOfItemsSold.breadSold
//console.log("total gain from sale", totalGainCakeSales)
//totalGainCakeSales = royalBakery.price.cakePrice * royalBakery.numberOfItemsSold.cakeSold
//console.log("total gain from sale", totalGainCakeSales)
//totalGainCakeSales = royalBakery.price.cakePrice * royalBakery.numberOfItemsSold.cakeSold
//console.log("total gain from sale", totalGainCakeSales)


//+ royalBakery.price.breadPrice + royalBakery.price.sweetsPrice + royalBakery.snacksPrice


const Doctordoomsbakery = {
    items :{
        sweets :{
            laddu : 10,
            Gulab_jamun : 20,
            Jalebi : 10,
            Mysore_pak : 10,
        },
        cakes : {
            black_forest1kg : 2,
            white_forest1kg : 2,
            plain_cake : 5,
        },
        customer1 : {person:30}
    },
}
 
let totalitems = Doctordoomsbakery.items.sweets.laddu+ Doctordoomsbakery.items.sweets.Gulab_jamun+ Doctordoomsbakery.items.sweets.Jalebi + Doctordoomsbakery.items.sweets.Mysore_pak;
let totalcakes = Doctordoomsbakery.items.cakes.black_forest1kg + Doctordoomsbakery.items.cakes.plain_cake + Doctordoomsbakery.items.cakes.white_forest1kg
let total=totalcakes+totalitems;

let remainingItems=total-Doctordoomsbakery.items.customer1.person;

console.log(remainingItems)