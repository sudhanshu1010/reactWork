// how to access specific item from a object
// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42,
//     education: {
//         degree: 'Masters',
//         school: {
//             name: 'SPS',
//             location: 'Pitampura'
//         }
//     },
//     friends: ["Falcon", "Bucky"]
// };

// method 1 - 'dot' method
// let location = user.education.school.location;
// console.log(location);

// method 2 
// let {education: {degree}} = user;
// console.log(degree);

// let {education: {school: {name, location}}} = user;
// console.log(name, location);

// a good practice
// let {friends} = user;
// console.log(friends);

// let obj1 = {
//     "name" : "hello"
// }

// obj2 = obj1; // obj2 is directly pointing to the obj1 

// obj2.name = "xyz";

// console.log(obj1);

// // ----------------------------------------

// let obj1 = {
//     "name" : "hello"
// }

// obj2 = {...obj1}; // here creating a copy of obj1 and further changing any property - this is called sparsing - sparsing an object

// obj2.name = "xyz";

// console.log(obj1);


// ----------------------------------------
// let obj1 = {
//     "name" : "sudhanshu",
//     "profession": {
//         "institute" : "gtbit"
//     }
// }

// let obj2 = {...obj1}; // a copy is made for only parents not for any child - or copy is made just at level 1 - shallow copy
// // prefer making a deep cloning or deep copy

// obj2.profession.institute = "pepcoding";

// console.log(obj1);


// let obj1 = {
//     "name" : "sudhanshu",
//     "profession": {
//         "institute" : "gtbit"
//     }
// }

// let obj2 = JSON.parse(JSON.stringify(obj1))
// obj2.profession.institute = "pepcoding";


// console.log(obj1)


let obj1 = {
    "name" : "bhavesh",
    "profession": {
        "company" : "pepcoding"
    }
}
// console.log(JSON.stringify(obj1));
let obj2 = {};

for(let i = 0; i < Object.keys(obj1).length; i++) {
    console.log(typeof(obj1[Object.keys(obj1)[i]]));
    if(typeof(obj1[Object.keys(obj1)[i]]) == "object") {
        obj2[Object.keys(obj1)[i]] = {...obj1[Object.keys(obj1)[i]]}
    } else {
        obj2[Object.keys(obj1)[i]] = obj1[Object.keys(obj1)[i]];
    }
}

obj2.profession.company = "squareboat";

console.log(obj1,obj2);