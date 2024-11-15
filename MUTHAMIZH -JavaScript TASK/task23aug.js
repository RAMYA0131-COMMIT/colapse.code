// a special day for boy he want spend day with this gf
// he want propose her in end of  day if he satisfy with her spending


const specialDay = [
    {   id:1,
        shopName: "GirlFashion Shop",
        productWePurchase: [
            { jean: 600, watch: 1200, handbag: 800, jewellery: 2000 }],
        productPrice:4600
    },
    {   id:2,
        shopName: "Restaurant",
        productWePurchase: [
            { muttonBiriyani: 500, StrawberryIceCream: 180, Desert: 200 }],
        productPrice:880
    },
    {   id:3,
        shopName: "Amusement Park",
        productWePurchase: [
            { ticket: 350 }],
        productPrice:350
        
    },{   id:4,
        shopName: "Movie Theater",
        productWePurchase: [
            { MovieTicket: 250, snacks: 100, popcorn: 100 }],
        productPrice:450
}];

console.table(specialDay);
// console.table(specialDay[0].productWePurchase[0]);
// console.table(specialDay[1].productWePurchase[0]);
// console.table(specialDay[2].productWePurchase[0]);
// console.table(specialDay[3].productWePurchase[0]);

let id1cost = specialDay[0].productWePurchase[0].jean + specialDay[0].productWePurchase[0].watch + specialDay[0].productWePurchase[0].handbag + specialDay[0].productWePurchase[0].jewellery;
let id2cost = specialDay[1].productWePurchase[0].muttonBiriyani + specialDay[1].productWePurchase[0].StrawberryIceCream + specialDay[1].productWePurchase[0].Desert;
let id3cost = specialDay[2].productWePurchase[0].ticket;
let id4cost = specialDay[3].productWePurchase[0].MovieTicket + specialDay[3].productWePurchase[0].snacks + specialDay[3].productWePurchase[0].popcorn;

console.log("GirlFashion Shop",id1cost);
console.log("Restaurant",id2cost);
console.log("Amusement Park",id3cost);
console.log("Movie Theater", id4cost);

let budget = 6500;
let totalSpend = [];
let totalIdSpend = id1cost + id2cost + id3cost + id4cost;
console.log("Total Spend Money", totalIdSpend);


if (totalSpend > budget) {
    console.log("💔Breack Up"," Because Girl is spending to much ");
}
else if (totalSpend < budget){
    console.log(`❤ Love Succese , 😁😂 but don't you think she is spending too much`);
};