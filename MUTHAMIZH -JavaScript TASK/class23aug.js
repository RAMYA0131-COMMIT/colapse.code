// for loop
const tv = [
    {
        name: "sun TV",
        id: 1,
        available: true
    }, {
        name: "ZEE TV",
        id: 2,
        available: true
    }, {
        name: "Vijay TV",
        id: 3,
        available: false
    }, {
        name: "color tv",
        id: 4,
        available: false
    }
];
//filter
let filter2 = tv.filter(A => A.available === true);
console.log(filter2);

let false1 = tv.filter(value => value.available != true);
console.log(false1);

//for loop//
let truevalue = [];
let falsevalue = [];
//sir code so dont match mine
for (let i = 0; i < tv.length; i++)
{ let channel = tv[i];
    if (channel.available == true) {
        true1.push(channel);
    }
    if (channel.available == false) {
        false1.push(channel);
    }
}
console.log("true",truevalue);
console.log("false",falsevalue);





