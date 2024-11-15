//task create arrays of object and use map to get above price,
//below price car,filter unavailable cars,
//find fuel type car,filter brand car

const Car = [
    {
        id: 1,
        brandName: "Maruti Suzuki",
        model: "Fronx",
        Price: 500000,
        bodyType: "SUV",
        fuelType: "Diesel",
        seatingCapacity: 5,
        available: false
    },
    {
        id: 2,
        brandName: "Tata",
        model: "Nexon",
        Price: 700000,
        bodyType: "Hatchback",
        fuelType: "Diesel",
        seatingCapacity: 6,
        available: true
    },
    {
        id: 3,
        brandName: "Mahindra",
        model: "Thar",
        Price: 600000,
        bodyType: "SUV",
        fuelType: "Petrol",
        seatingCapacity: 7,
        available: false
    },
    {
        id: 4,
        brandName: "Toyota",
        model: "Land Cruiser",
        Price: 800000,
        bodyType: "Sedan",
        fuelType: "Electric",
        seatingCapacity: 5,
        available: false
    }, {
        id: 5,
        brandName: "Hyundai",
        model: "Tucson",
        Price: 750000,
        bodyType: "SUV",
        fuelType: "Diesel",
        seatingCapacity: 8,
        available: true
    }, {
        id: 6,
        brandName: "BMW",
        model: "5 Series",
        Price: 1000000,
        bodyType: "Hatchback",
        fuelType: "Diesel",
        seatingCapacity: 7,
        available: false
    },
    {
        id: 7,
        brandName: "Tata",
        model: "Safari",
        Price: 830000,
        bodyType: "SUV",
        fuelType: "Diesel",
        seatingCapacity: 8,
        available: true
    },
    {
        id: 8,
        brandName: "Maruti Suzuki",
        model: "Baleno",
        Price: 1087000,
        bodyType: "SUV",
        fuelType: "Petrol & CNG",
        seatingCapacity: 5,
        available: true
    }, {
        id: 9,
        brandName: "Mahindra",
        model: "Scorpio N",
        Price: 600000,
        bodyType: "SUV",
        fuelType: "Diesel",
        seatingCapacity: 8,
        available: true
    },
    {
        id: 10,
        brandName: "Toyota",
        model: "LFortuner Legender",
        Price: 4366000,
        bodyType: "Sedan",
        fuelType: "Electric",
        SeatingCapacity: 7,
        available: false
    },

];
let priceAbove8lakh = [];
let filterPriceAbove = Car.map((Avalue) => {
    if (Avalue.Price > 800000) {
        priceAbove8lakh.push(Avalue);
    }});
console.log("Price Above 8 Lakh",priceAbove8lakh);

let PriceBelow8lakh = [];
let filterPriceBelow = Car.map((Bvalue) => {
    if (Bvalue.Price < 800000) {
        PriceBelow8lakh.push(Bvalue);
    }
});
    console.log("Price Below 8 Lakh",PriceBelow8lakh);
  
    //filter tata cars and push
let TataCars = [];
let filterTata = Car.map((T) => {
    if (T.brandName == "Tata") {
        TataCars.push(T)
    }
});
console.log("Tata Cars", TataCars);

//filter petrol type cars and push
let FilterFuelType = [];
let filterPetrolTypeCar = Car.map((fuel) => {
    if (fuel.fuelType == "Petrol") {
        FilterFuelType.push(fuel)
    }
})
console.log("Petrol Type Cars", FilterFuelType);


let filterUnAvailableCars = [];
let filterCar = Car.map((Value) => {
    if (Value.available != true)
    { filterUnAvailableCars.push(Value)}
})
console.log("Available Car List",filterUnAvailableCars);