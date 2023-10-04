// Creating class Formation. This is the parent class.
class Formation{
    // Creating constructor method with three arguments
    constructor(locomotives, passengerwagons, freightWagons){
        // Assigning the arguments. When a formation is created, it must have these three arguments.  
        this.locomotives = locomotives;
        this.passengerwagons = passengerwagons;
        this.freightWagons = freightWagons;
    };
    // Creating a method to calculate the number of passengers in a formation. 
    totalNumberOfPassengers(){
        // The method uses the higher order function reduce, and a method from the class Passengerwagon, amountOfPassenger(). 
        return this.passengerwagons.reduce((numOfPassengers, passengerwagon) => numOfPassengers + passengerwagon.amountOfPassengers(), 0);
    };
    // Creating a method to calculate the amount of light weight wagons in a formation.
    lightWeightWagon(){
        // Using the higher order function filter to find the passenger/freight wagons that weigh less than 2500. 
        // I am using a method from the class Passengerwagon to find the passenger wagons weight. I am using a method from the class FreightWagon to find the freight wagons weight.
        // Using ".length" to count the amount of passenger wagons weighing less than 2500.
        let passengerWeight = this.passengerwagons.filter((passengerwagon) => passengerwagon.maximumWeight() < 2500).length;
        let freightWeight = this.freightWagons.filter((freightWagon) => freightWagon.loadWithGaurds() < 2500).length;
        // Returning the sum of the length of passenger/freight wagons weighing less than 2500.
        return passengerWeight + freightWeight
    };
    maximumSpeed(){ // works 
        let minSpeed = locomotives[0].speed;
        this.locomotives.forEach((locomotive) => {
            if (locomotive.speed < minSpeed){
                minSpeed = locomotive.speed;
            }     
        });
        return minSpeed;
    };
    isEfficient(){ // works
        let effiency = this.locomotives.every((locomotive) => locomotive.maximumPull() > 5 * locomotive.weight)
        if (effiency === false){
            return "This formation is not efficient!"
        }else{
            return "This formation is efficient!"
        };
    };
    isMoveable(){ // works but see if there is a better way of doing so 
        let passengerwagonWeight = this.passengerwagons.reduce((total, passengerwagon) => total + passengerwagon.maximumWeight(), 0);
        let freightwagonWeight = this.freightWagons.reduce((total, freightWagon) => total + freightWagon.loadWithGaurds(), 0);
        let formationPull = this.locomotives.reduce((total, locomotive) => total + locomotive.maximumPull(), 0);
        if (formationPull > (passengerwagonWeight + freightwagonWeight)){
            return "This formation can move!";
        } else {
            return "Missing pull! Can not move"
        };
    
    };
    missingThrust(){ // works but see if their is a better way of doing so 
        let passengerwagonWeight = this.passengerwagons.reduce((total, passengerwagon) => total + passengerwagon.maximumWeight(), 0);
        let freightwagonWeight = this.freightWagons.reduce((total, freightWagon) => total + freightWagon.loadWithGaurds(), 0);
        let formationPull = this.locomotives.reduce((total, locomotive) => total + locomotive.maximumPull(), 0);
        let thrust = formationPull - (passengerwagonWeight + freightwagonWeight);
        if (thrust > 0){
            return thrust + " " + "thrust left!"
        }else {
            return thrust + " " + "thrust missing!"
        }

    }
}

// Works one on one 
class PassengerWagon extends Formation{
    constructor({length, width}){ // Why does putting curly brackets around help.
        super(); // Must have super I do not know why
        this.length = length;
        this.width = width;
    };
    amountOfPassengers(){
        if (this.width < 2.5){
            return this.length * 8;
        } else{
            return this.length * 10;
        }
    };

    maximumWeight(){
        return this.amountOfPassengers() * 80;
    };

}

// Works one on one
class Locomotive extends Formation{
    constructor({weight, pullForce, speed}){
        super();
        this.weight = weight;
        this.pullForce = pullForce;
        this.speed = speed; 
    }
    maximumPull(){
        return this.pullForce - this.weight;
    }
}

// Works with one on one
class FreightWagon extends Formation{
    constructor({maximumLoad}){
        super();
        this.maximumLoad = maximumLoad;
    };
    loadWithGaurds(){
        return this.maximumLoad + 160;
    }
}




class Depot{
    constructor(passengerwagons, freightWagons, locomotives, formations, spareLocomotives){
        this.passengerwagons = passengerwagons;
        this.freightWagons = freightWagons;
        this.locomotives = locomotives;
        this.formations = formations;
        this.spareLocomotives = spareLocomotives;


    };
    heaviestWagons(){ // maybe works but can not see output
        let heaviest = 0;

        let passengerwagonWeight = 0;
        let freightwagonWeight = 0;

        this.passengerwagons.forEach((passengerwagon) => { // look into if you want to make parameter wagon 
            if (passengerwagon.maximumWeight() > passengerwagonWeight){ // then you have to rename the maximumweight and loadwithguards
                passengerwagonWeight = passengerwagon.maximumWeight();
            }     
        });

        
        this.freightWagons.forEach((freightWagon) => {
            if (freightWagon.loadWithGaurds() > freightwagonWeight){
                freightwagonWeight = freightWagon.loadWithGaurds();
                
            }     
        });


        if (passengerwagonWeight > freightwagonWeight){
            heaviest = passengerwagonWeight + "Kg Passenger Wagon"
        }else {
            heaviest = freightwagonWeight + "Kg Freight Wagon"
        };
   
        return heaviest;

    };
    experiencedDriver(){ // Works
        // first count length of each part of the train 
        let count = this.passengerwagons.length + this.freightWagons.length + this.locomotives.length;
        // then summarize weight of each part of the train 
        let passengerwagonWeight = this.passengerwagons.reduce((total, passengerwagon) => total + passengerwagon.maximumWeight(), 0);
        let freightwagonWeight = this.freightWagons.reduce((total, freightWagon) => total + freightWagon.loadWithGaurds(), 0);
        let locomotiveWeight = this.locomotives.reduce((total, locomotive) => total + locomotive.weight, 0);
        let weight = passengerwagonWeight + freightwagonWeight + locomotiveWeight;
        // Return a boolean.
        if (count > 20){
            return "Over 20 units in this formation! Needs an experienced driver."
        }else if(weight > 10000){
            return "This formation weighs over 10,000 kg, it needs an experienced driver!"
        }else {
            return "This formation does not exceed the amount of units nor weight to need an experienced driver!"
        }
    };

    addTrain(){
        this.formations.push(spareLocomotives)
    }
    addLocomotive(){

// get thrust of depot trains
        let passengerwagonWeight = this.passengerwagons.reduce((total, passengerwagon) => total + passengerwagon.maximumWeight(), 0);
        let freightwagonWeight = this.freightWagons.reduce((total, freightWagon) => total + freightWagon.loadWithGaurds(), 0);
        let formationPull = this.locomotives.reduce((total, locomotive) => total + locomotive.maximumPull(), 0);
        let thrust = formationPull - (passengerwagonWeight + freightwagonWeight);
// Calculate pull force of each spare locomotive 
        if(thrust > 0){
            return "hello"
        }else{
            spareLocomotives.forEach((spareLocomotive) => {
               if(spareLocomotive.pullForce > thrust){
                spareLocomotive.addTrain;
               }
            })

        };



// calculating thrust of sparelocomotives

    };
};









// Formation 1
let passengerwagons = [
    new PassengerWagon({length: 10, width: 2.6, formation: 1}),
    new PassengerWagon({length: 8, width: 2, formation: 2})
    
];

let freightWagons =[
    new FreightWagon({maximumLoad: 1000}),
    new FreightWagon({maximumLoad: 5000})
];

let locomotives = [
    new Locomotive({weight: 800, pullForce: 11000, speed: 90}),
    new Locomotive({weight: 1200, pullForce: 19000, speed: 70})
];

let train1 = new Formation(locomotives, passengerwagons, freightWagons);


// Formation 2
let passengerwagons2 = [
    new PassengerWagon({length: 12, width: 3})
];

let freightWagons2 =[
    new FreightWagon({maximumLoad: 3000}),
    new FreightWagon({maximumLoad: 2000})
];

let locomotives2 = [
    new Locomotive({weight: 1000, pullForce: 12000, speed: 80}),
    new Locomotive({weight: 2000, pullForce: 10000, speed: 100}),

];

let train2 = new Formation(locomotives2, passengerwagons2, freightWagons2);



// Answers 
let trains = [train1, train2];







let spareLocomotives =[
    new Locomotive({weight: 1000, pullForce: 12000, speed: 90}),
    new Locomotive({weight: 2000, pullForce: 13000, speed: 80}),
    new Locomotive({weight: 1500, pullForce: 10000, speed: 60})
]


let depotPassengerWagons1 = [
    new PassengerWagon({length: 9, width: 2.6}),
    new PassengerWagon({length: 8, width: 2})

];

let depotFreightWagons1 = [
    new FreightWagon({maximumLoad: 2000}),
    new FreightWagon({maximumLoad: 4000})

];

let depotLocomotives1 = [
    new Locomotive({weight: 1000, pullForce: 1000, speed: 90}),
    new Locomotive({weight: 1500, pullForce: 1000, speed: 100})

]

let depotTrain1 = new Depot(depotPassengerWagons1, depotFreightWagons1, depotLocomotives1) // Should it be new Depot or new Formation. If it is formation how will it access depot methods.




let depotPassengerWagons2 = [
    new PassengerWagon({length: 5, width: 3})
]
let depotFreightWagons2 = [
    new FreightWagon({maximumLoad: 2500}),
    new FreightWagon({maximumLoad: 1000}) 
]
let depotLocomotives2 = [
    new Locomotive({weight: 1800, pullForce: 15000, speed: 80}),
    new Locomotive({weight: 9000, pullForce: 21000, speed: 60})   
]


let depotTrain2 = new Depot(depotPassengerWagons2, depotFreightWagons2, depotLocomotives2)

let depotTrains = [depotTrain1, depotTrain2]








trains.forEach((train, index) => {
    console.log(`\nFormation ${index + 1} Solution to tasks:`); // Template literal
    console.log(`1. This formation can transport ${train.totalNumberOfPassengers()} people!`);
    console.log(`2. Amount of lightweight ${train.lightWeightWagon()} wagons!`);
    console.log(`3. The maximum spped of this formation is ${train.maximumSpeed()}km/h!`);
    console.log(`4. ${train.isEfficient()} `);
    console.log(`5. ${train.isMoveable()} `);
    console.log(`6. ${train.missingThrust()} `);

});

depotTrains.forEach((depotTrain, index) => {
    console.log(`\nDepot-Formation ${index + 1} Solution to tasks:`); // Template literal - Python F-string
    console.log(`7. The heaviest wagon, in this formation, is a ${depotTrain.heaviestWagons()}`)
    console.log(`8. ${depotTrain.experiencedDriver()} `);
    
});
console.log(depotTrain1)
console.log(depotTrain1.addLocomotive())
console.log(depotTrain1)