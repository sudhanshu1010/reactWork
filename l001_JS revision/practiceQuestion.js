// function Pet(name){
//     this.name = name;
//     this.getName = () => this.name;
// }

// const cat = new Pet("Fluffy");
// console.log(cat.getName());
// const { getName } = cat;
// console.log(getName());

const object = {
    message: 'Hello, World!', logMessage() {
        console.log(this.message); // What is logged? 
    }
};
setTimeout(object.logMessage, 1000);