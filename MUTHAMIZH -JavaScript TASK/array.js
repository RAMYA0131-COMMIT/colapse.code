//arrays
//group of related data items or similer data types
//syntax
//let arr = [
    //elements];
//let blindArray = [1, "name", true, 10, false, "course"];    //no value 
//map using .map((call back using this name))

let whytap = [
    {
        id: 1,
        course: "fullstack developer",
        price: 10000,
        place: "Chennai",
        onsite: true,
        placementAvailable: "Yes"
    

    }, {
        id: 2,
        course: "digital marketing",
        price: 20000,
        place: "Hydrabad",
        onsite: false,
        placementAvailable: "No"
    }, {
        id: 3,
        course: "Ethical hacking",
        price: 30000,
        place: "Goa",
        onsite: true,
        placementAvailable: "No"
    
    }, {
        id: 4,
        course: "Tally",
        price: 5000,
        place: "Delhi",
        onsite: false,
        placementAvailable: "yes"
        
    }
];

//console.log(whytap);
//let totalCourse = whytap.length;
//console.log(`total course :-${totalCourse}`);


// whytap.map((a) => {
//     console.log(a);
//      if (a.price > 10000) {   this using map to find price above 10000
//          console.log(a);
//          return (a);}
//  })

// let FilterOnsite = whytap.map((a) => {   this if use in map to find false
//     if (a.onsite == false) {
//         console.log(a);
//     }
// });

// let FilterOnsite = whytap.map((a) => {
//     if (a.onsite == true) {                         this using map to find true
//         console.log(a);
//     }
// });

// let FilterPlace = whytap.map((a) => {
//     if (a.place == "Goa") {                          find the specific place
//         console.log(a);
//     }
// });


let siteTrue = [];
let siteFalse = [];
const FilterOnsite = whytap.map((p) => {
    if (p.onsite == true) {
        siteTrue.push(p)
    }
    if (p.onsite == false) {
        siteFalse.push(p)
    }
});

console.log("ON_SITE", siteTrue);
console.log("OFF-SITE", siteFalse);

let availablePlace = [];  