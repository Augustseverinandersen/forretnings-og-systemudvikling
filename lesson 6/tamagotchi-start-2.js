
//Model

class Tamagotchi {
    constructor() {
        //mood is an attribute/property of the class Tamagotchi
        this.mood = new Hungry()
    }
    hoursSinceYouAreBored() {
        return 0.5
    }
    eat() {
        //Delegate the responsibility of eating to the mood object
        //"this" is the mascot that needs to eat
        this.mood.makeTheTamagotchiEat(this)
    }
}

class Happy {
    makeTheTamagotchiEat(theMascot) {
    }
}

class Hungry {
    makeTheTamagotchiEat(theMascot) {
    }
}

class Bored {
    makeTheTamagotchiEat(theMascot) {
        // If it was bored, there are two cases
        // if (this.mood == "bored") {
            if (theMascot.hoursSinceYouAreBored() > 1) {
                // It was bored more than one hour, then it becomes happy
                theMascot.mood = new Happy()
            } else {
                // It was bored less than an hour, just log a message saying that the mascot cannot eat right now
                console.log("the mascot cannot eat right now")
            }
        // }

    }
}

//We have mascot that eats and plays

//Let's start with the eating behaviour

let pepona = new Tamagotchi()
pepona.eat()

let pikachu = new Tamagotchi()
pikachu.eat()