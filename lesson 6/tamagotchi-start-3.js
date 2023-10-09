
//Model

class Tamagotchi {
    constructor() {
        //mood is an attribute/property of the class Tamagotchi
        this.mood = new Bored(this)
    }
    hoursSinceYouAreBored() {
        return 0.5
    }
    eat() {
        //Delegate the responsibility of eating to the mood object
        //"this" is the mascot that needs to eat
        this.mood.makeTheTamagotchiEat()
    }
}

//Abstract class, it won't any instances
class Mood {
    constructor(aTamagotchi) {
        this.theMascot = aTamagotchi
    }
}

class Happy extends Mood {
    makeTheTamagotchiEat() {
    }
}

class Hungry extends Mood {
    makeTheTamagotchiEat() {
    }
}

class Bored extends Mood {
    makeTheTamagotchiEat() {
        // If it was bored, there are two cases
        // if (this.mood == "bored") {
            if (this.theMascot.hoursSinceYouAreBored() > 1) {
                // It was bored more than one hour, then it becomes happy
                this.theMascot.mood = new Happy()
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
