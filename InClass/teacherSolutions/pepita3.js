class City {
    constructor(name) {
        this.name = name
    }
    distanceTo(anotherCity) {
        return 10000
    }
}

class Bird {
    constructor(cityOfBirth) {
        this.energy = 0
        this.visitedCities = []
        this.currentCity = cityOfBirth
    }
    fly(kilometers) {
        let flyEnergy = kilometers * 2
        if ( this.energy >= flyEnergy ) {
            this.energy -= flyEnergy
        }
    }
    eat(grams) {
        this.energy += grams * 4
    }
    visit(destinationCity) {
        // let kms = map.distanceFrom(this.currentCity,destinationCity)
        let kms = this.currentCity.distanceTo(destinationCity)
        this.fly(kms)
        this.visitedCities.push(destinationCity)
        this.currentCity = destinationCity
    }
}

class Hummingbird extends Bird {
    fly(kilometers) {
        let flyEnergy = kilometers * 6
        if ( this.energy >= flyEnergy ) {
            this.energy -= flyEnergy
        }
    }
}

let buenosAires = new City("Buenos Aires")
let pepita = new Bird(buenosAires)

pepita.eat(5)
console.log("hey, the energy of pepita after eating is " + pepita.energy)
pepita.fly(10)
console.log("hey, the energy of pepita after flying is " + pepita.energy)

pepita.eat(10)
pepita.energy = 666
console.log("hey, the energy of pepita after everything " + pepita.energy)

let amsterdam = new City("AmsterDAMMM")
console.log("Pepita is in " + pepita.currentCity.name)
pepita.visit(amsterdam)
console.log("Pepita now is in "+ pepita.currentCity.name)
console.log("How many cities did pepita visit? " + pepita.visitedCities.length)

let tweety = new Hummingbird(amsterdam)
console.log("Hi tweet, what's your energy? " + tweety.energy)