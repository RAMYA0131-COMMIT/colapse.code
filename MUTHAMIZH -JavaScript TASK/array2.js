//
let cryptoCurrency = [
    {
        name: "bitcoin",
        shortName:"BTC",
        rank: "1st",
        price: 60000,
        currency: "USDT $"
        
        
    },
    {
        name: "ethrium",
        shortName:"ETH",
        rank: "2nd",
        price: 4000,
        currency:"USDT $"
        
    },
    {
        name: "BINANCE",
        shortName: "BNB",
        rank:"3rd",
        price: 650,
        currency:"USDT $"
        
    }
]
// console.log(cryptoCurrency)

cryptoCurrency.name.map((a) =>
{
    if (a.name == "bitcoin") {
        console.log(a);
    }
})