// August Severin Andersen - solution for assignment two.

// Creating class formation. This is the parent class for class Wagon and Class Locomotive.
class Formation {
  constructor() {
    // Creating two empty arrays, to store locomotives and wagons.
    this.locomotives = [];
    this.wagons = [];
  }
  // Creativing a method to add a locomotive to the array locomotives.
  addLocomotive(locomotive) {
    // "this." means the chosen locomotive. 
    this.locomotives.push(locomotive);
  }
  // Creating a method to add a wagon to the array wagons.
  addWagon(wagon) {
    // "this." is used on both passengerWagons and freightWagons.
    this.wagons.push(wagon);
  }

// Task 1
  // This method calculates the amount of passengers in a formation, by using a method from class PassengerWagon.
  totalNumberOfPassengers() {
    // Using the higher order function "reduce".
    return this.wagons.reduce((passengerCount, wagon) => {
      // Checking to see if the currenct wagon is a object of the class PassengerWagon.
      if (wagon instanceof PassengerWagon) {
        // If it is, it uses the method "amountOfPassengers" to get the amount of passengers in the current passengerWagon.
        return passengerCount + wagon.amountOfPassengers();
      } else {
        // If the current wagon is not an instance of the class PassengerWagon, it returns the passengerCount.
        return passengerCount;
      }
    }, 0);
    // After running through all passengerWagons, it returns the total count.
  }
  

// Task 2
  // This method uses the higher order function "filter", which creates a new array of wagons that weigh over 2500. 
  // The length of the new array is then counted using ".length", and returned.
  lightWeightWagon() { 
    return this.wagons.filter((wagon) => wagon.maximumWeight() < 2500).length
  }

// Task 3
  // This method finds the locomotive with the lowest maximum speed in a formation.
  maximumSpeed() { // works
    // Initializing a variable with the value of the first locomotives speed in the array locomotives.
    let minSpeed = this.locomotives[0].speed;
    // A for Each loop that runs through each locomotive in the array locomotives.
    this.locomotives.forEach((locomotive) => {
      // It checks to see if the speed of the locomotive is less than the variable minSpeed.
        if (locomotive.speed < minSpeed){
          // If it is, then the minSpeed variable is over written with the new minimum speed.
            minSpeed = locomotive.speed;
        }     
    });
    // Returning the variable minSpeed. Which holds the lowest maximum speed of the locomotives.
    return minSpeed;
  }

// Task 4
  // This method checks if a formation is efficient.
  isEfficient() { 
    // By using the higher order function every. It checks if all locomotives in the formation can pull five times their own weight. 
    // To get the pull of a locomotive I am using a method from the class Locomotive.
    return this.locomotives.every((locomotive) => locomotive.maximumPull() > 5 * locomotive.weight);
  }

// Task 5
  // This method checks if a formation is moveable (Has more pull power than weight).
  isMoveable() { 
    // I start by calculating the weight of each wagon, using the higher order function reduce.
    let weight = this.wagons.reduce((total, wagon) => total + wagon.maximumWeight(), 0);
    // Then I calculate the total maximum pull power, using the higher order function reduce..
    let formationPull = this.locomotives.reduce((total, locomotive) => total + locomotive.maximumPull(), 0);
    // Lastly, I return a boolean. 
    return formationPull > weight;
  }
  
// Task 6
  // This method returns the remainingThrust of each formation.
  remainingThrust() { 
    // I start by using reduce, to get the maximum weight 
    let weight = this.wagons.reduce((total, wagon) => total + wagon.maximumWeight(), 0);
    // Then I use reduce to get the maximumPull.
    let formationPull = this.locomotives.reduce((total, locomotive) => total + locomotive.maximumPull(), 0);
    // Lastly, I return pull minus weight.
    return formationPull - weight;
  }
};


/* This is the class Wagon. It extends Formation, which creates an inheritence between Wagon and Formation.
This class is used to store the classes PassengerWagon and FreightWagon */
class Wagon extends Formation {
  constructor(){
    super()
  }
}

// This is the class Locomotive. This class is the blueprint for my locomotives.
class Locomotive extends Formation{
  // The constructor holds the arguments for the locomotives. 
    constructor(weight, pullForce, speed) {
      super();
      // For the current locomotive its parameter weight = the constructors weight. 
      this.weight = weight;
      this.pullForce = pullForce;
      this.speed = speed;
    }

    // This method is used in the class Formation. 
    maximumPull() {
      // This method takes the current locomotives pullForce minus weigth to get the maximumPull. 
      return this.pullForce - this.weight;
    }
  };

  // This is the class for passengerWagons, it inherits from the class Wagon. 
  class PassengerWagon extends Wagon {
    // The constructor holds the arguments for the passengerWagons.
    constructor(length, width) {
      // Super referes to the parent class. Gets the parent classes constructor methods and properties when called in the constructor.
      super();
      this.length = length;
      this.width = width;
    };
    // This method calculates the amount of passengers in a passenger wagon.
    amountOfPassengers() {
      // The amount of passengers is calculated by using an if statement. 
      // If the width of the current passenger wagon is less then 2.5, then the length of the current wagon is multiplied by 8.
        if (this.width < 2.5){
          return this.length * 8;
      // If the current width is over 2.5 then the current length is mutliplied by 10
      } else{
          return this.length * 10;
      };
    };

    // The last method in the class calculates the weight of the passengerwagon by multiplying the amount of passengers with 80.
    maximumWeight(){
      return this.amountOfPassengers() * 80;
    }
  };
  
  // This is the class for freightWagons, it inherits from the class Wagon. 
  class FreightWagon extends Wagon {
    // The constructor holds the only argument for freightwagons.
    constructor(maximumLoad) {
      super()
      this.maximumLoad = maximumLoad;
    }
    // This method gets the maximum weight of the current freight wagon, by adding 160 to the current freight wagons parameter maximum load.
    maximumWeight(){
      return this.maximumLoad + 160;
    }
  };
  
  // This is the class for the depot. 
  class Depot {
    constructor() {
      // An empty array to store formations.
      this.formations = [];
      // An empty array to store spareLocomotives.
      this.spareLocomotives = [];
    }
    // This method adds a formation to the empty array - formations.
    addFormation(formation) {
      this.formations.push(formation);
    }
    // This method adds a spareLocomotive to the empty array - spareLocomotives.
    addSpareLocomotive(spareLocomotive){
      this.spareLocomotives.push(spareLocomotive);
    }

// Task 7
    // This method finds the heavest wagon in each formation.
    heaviestWagons() { 
      // Initializing an empty array, to store heaviest wagons
      let heaviestWagons = [];
      // A for each the iterates through each formation in the depot.
      this.formations.forEach((formation)=>{
        // A variable with the value zero. It is placed here so the for each new formation the value goes back to zero.
        let heaviestWagon = 0;
        // for each wagon in the array wagons in the formation.
        formation.wagons.forEach((wagon) =>{ // Accessing the array wagons not class wagons.
          // If the wagon weighs more then the variable heaviest wagon.
          if (wagon.maximumWeight()> heaviestWagon){
            // It should over write the variable 
            heaviestWagon = wagon.maximumWeight();
          }
        });
        // When the iteration of a formation is finished, the value of the variable is pushed into the array "heaviestWagons".
        heaviestWagons.push(heaviestWagon);
      });
      return heaviestWagons;
    
    }
// Task 8
    // This method is used to see if any formation is over 20 units, or weighs more than 10,000kg. 
    experiencedDriver() {
      // Using the higher order function "some", to see if any of the formations in the depot is over 20 unites in length.
      // Some returns true of one formation is over 20 unites in length. 
      let count = this.formations.some((formation) => formation.locomotives.length + formation.wagons.length  > 20);
      // Using "some" to see if any of the formations weigh more than 10,000 kg.
      let weight = this.formations.some((formation)=> {
        // I start by using "reduce" to get the total weight of the locomotives.
        let locomotiveWeight = formation.locomotives.reduce((total, locomotive) => total + locomotive.weight, 0);
        // Then I use "reduce" to get the total weight of the wagons.
        let wagonWeight = formation.wagons.reduce((total, wagon) => total + wagon.maximumWeight(), 0);
        // I return the a boolean if the total weight of the locomotives plus wagons is more than 10,000kg.
        return locomotiveWeight + wagonWeight > 10000;
      })
      // This if statement lets me know the reason for why an experienced driver is needed if it is needed.
      if (count === true){
        return "A formation in this depot has over 20 units, it needs an experienced driver";
      } else if (weight === true){
        return "A formation in this depot weights over 10,000kg! It needs an experienced driver";
      }else{
        return "This depot does not need an experienced driver";
      }
    }
  // Task 9
    // This method adds a locomotive to a formation if it is missing thrust.
    addLocomotiveToFormation() {
      // For each formation in the depot, check if the formation is moveable.
      this.formations.forEach((formation)=>{
        // "isMoveable" is a method from the class Formation. 
        if(!formation.isMoveable()){
          // If the formation is not moveable, get the remaining thrust.
          // "remainingThrust" is a method from the class Formation.
          let missingThrust = formation.remainingThrust();
          // Console logging the missing thrust, for clarity.
          console.log("Current thrust " + missingThrust);
          // Using "filter" to find a spareLocomotive that has a maximum pull equal to or greater then the missing thrust of the formation.
          // "filter" creates a new array, which holds all the locomotives that fulfill the querry.
          let suitableLocomotives = this.spareLocomotives.filter((spareLocomotive) => spareLocomotive.maximumPull() >= missingThrust);          
          // Console logging the length of the new array of spare locomotives, for clarity.
          console.log("Amount of suitable spare locomotives: " + suitableLocomotives.length);
          // Adding the first locomotive in the array to the formation with missing thrust. 
          formation.addLocomotive(suitableLocomotives[0]);
          // Console logging the new thrust of the formation. 
          console.log("Locomotive added - Remaning Thrust: " + formation.remainingThrust());
        // If no formation has missing thrust
        } else {
          return "No formations are missing thrust.";
        }
      })
  }
}
  





// Formation one:
// Creating an object formation with the class Formation.
let formation1 = new Formation();
// Creating locomotive objects with the class Locomotive, and the arguments:  weight, pullForce, speed.
let locomotive1 = new Locomotive(1000, 12000, 80);
let locomotive1_1 = new Locomotive(2400, 11000, 70)
// creating passengerwagon objects with the class PassengerWagon, and the arguments: length, width.
let passengerWagon1 = new PassengerWagon(12, 2.6);
let passengerWagon1_1 = new PassengerWagon(8, 2)
// Creating freightWagon objects with the class FreightWagon, and the arguments: maximumLoad. 
let freightWagon1 = new FreightWagon(5000);
let freightWagon1_1 = new FreightWagon(1000)

// Using the method "addLocomotive" from the class Formation to add the locomotive objects.
formation1.addLocomotive(locomotive1);
formation1.addLocomotive(locomotive1_1);
// Using the method "addWagon" from the class Wagon to add the passengerWagon and freightWagon objects.
formation1.addWagon(passengerWagon1);
formation1.addWagon(passengerWagon1_1);
formation1.addWagon(freightWagon1);
formation1.addWagon(freightWagon1_1);

// Formation two:
let formation2 = new Formation();
let locomotive2 = new Locomotive(1200, 15000, 70);
let passengerWagon2 = new PassengerWagon(8, 2.5);
let freightWagon2 = new FreightWagon(8, 6000);

formation2.addLocomotive(locomotive2);
formation2.addWagon(passengerWagon2);
formation2.addWagon(freightWagon2);


// Depot
// Creating a object depot with the class Depot.
let depot = new Depot();
// Adding formation1 and formation2 to the object depot as arrays.
depot.addFormation(formation1);
depot.addFormation(formation2);
// Creating a new object called spareLocomotives1 with the class Locomotive.
let spareLocomotives1 = new Locomotive(1000, 10000, 80);
// Using the method "addSpareLocomotive" to add the spareLocomotives to the array in the class Depot.
depot.addSpareLocomotive(spareLocomotives1);

  
// Output 
// Creating an array to store the two formations.
let trains = [formation1, formation2];
  // A for loop, that loops through the array trains, and console.logs for each formation in the array.
  trains.forEach((train, index) => {
    console.log(`\nFormation ${index + 1} Solution to tasks:`); // Template literal is used to execute code in a string.
    console.log(`1. This formation can transport ${train.totalNumberOfPassengers()} people!`);
    console.log(`2. Amount of lightweight ${train.lightWeightWagon()} wagons!`);
    console.log(`3. The maximum speed of this formation is ${train.maximumSpeed()}km/h!`);
    console.log(`4. Is this formation effienct? ${train.isEfficient()} `);
    console.log(`5. Can this formation move? ${train.isMoveable()} `);
    console.log(`6. Amount of thrust left: ${train.remainingThrust()} `);
});

// Depot solutions
console.log("\nDepot Solutions: ")
console.log("7. The heaviest wagons weigh: " + depot.heaviestWagons() + " kg");
console.log("8.", depot.experiencedDriver());
console.log("\n9.")
depot.addLocomotiveToFormation();  
