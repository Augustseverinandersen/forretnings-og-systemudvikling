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
    // kmFlown is a method with one parameter (distance) that calculates the amount of energy used.
    kmFlown(distance){
        this.energy -= distance * 2;
    }
    // giveMeYourEnergy is a method that returns the current energy level. 
    giveMeYourEnergy(){
        return this.energy;
    }
}

// an empty array to store pepitas visited cities


// Creating class Swallow that inherits from class Brid
class Swallow extends Bird{
    constructor(){
        // Super referes to the parent class. gets the parents constructor methods and properties if called in the constructor 
        super();
        this.citiesVisited = []; 
    }
    // New method with two parameters. 
    visitCity(city, distance) {
        // - the energy with distance * 2
        this.energy -= distance *2 
        this.citiesVisited.push(city);
    }
    cityRegistry(){
        return this.citiesVisited;
    }

}



// Declaring a new variable called pepita.
let pepita;
// Creating the pepita object based on the class Swallow and the parent class Bird.
pepita = new Swallow();


// Sending messages to pepita 
// Writing a message that Pepita has easten 64 grams of birdseeds.
pepita.gramsEaten(100); 
// Message to Pepita
pepita.visitCity("Aarhus", 1000);
pepita.visitCity("Copenhagen", 100);


// Writing to the console what Pepitas energy in joules is.
console.log("Pepitas energy is: " + pepita.giveMeYourEnergy() + " Joules!");
console.log(pepita.cityRegistry())