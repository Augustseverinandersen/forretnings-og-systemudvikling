/* 
Pepita is a swallow and an ornithlogist wants you to build a system to register the activities of Pepita.
Pepita gets energy by eating X grams of bird seeds. The amount of energy is calculated by X * 4.
Pepita uses energy by flying N kilometers. The amount of energy used i calculated by N * 2
*/ 



// Creating the class Bird. Classes are a template for creating objects. 
class Bird {
    // constructor is a method.
    // When a new object of class bird is created the constructor will set energy to 0.
    constructor(){
        this.energy = 0;
    } 
    // gramsEaten is a method with one parameter that calculates energy gained by eating. 
    gramsEaten(x){
        this.energy += x * 4;
    }
    // kmFlown is a method with one parameter that calculates energy used by flying.
    kmFlown(n){
        this.energy -= n * 2;
    }
    // giveMeYourEnergy is a method that returns the current energy level. 
    giveMeYourEnergy(){
        return this.energy;
    }
}

// Declaring a new variable called pepita.
let pepita
// Creating the pepita object based on the class Bird.
pepita = new Bird()

// Sending messages to pepita 
// Writing a message that pepita has flown 2 km.
pepita.kmFlown(2) 
// Writing a message that Pepita has easten 64 grams of birdseeds.
pepita.gramsEaten(64) 
// Delegation. This is pepitas remaining energy level.
pepita.giveMeYourEnergy() 
// Writing to the console what Pepitas energy in joules is.
console.log("Pepitas energy is: " + pepita.giveMeYourEnergy() + " Joules!")