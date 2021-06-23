// class name should start with a capital letter - below person starts with capital P
class Person {
    Institute = "hellow";
    constructor(name){
        this.name = name;
        // this.Institute = "Pepcoding";
    }
    // a method to set details of a person
    setDetails(name, occupation){
        // this.name = name;
        this.occupation = occupation;
    }
}

// made a new object of person class
let obj1 = new Person();

obj1.setDetails("Sudhanshu", "Student");

// adding a new key value pair
obj1["Institute"] = "Gtbit";

console.log(obj1);

// creating a new object with same class and assigning values to it
let obj2 = new Person();
obj2.setDetails("xyz", "abc")
console.log(obj2);