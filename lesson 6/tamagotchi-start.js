
//Model

class Tamagotchi {
    constructor() {
        //mood is an attribute/property of the class Tamagotchi
        this.mood = "bored"
    }
    hoursSinceYouAreBored() {
        return 0.5
    }
    eat() {
        // If it is hungry then it becomes happy
        if (this.mood == "hungry") {
            this.mood = "happy"
        }
        // If it is happy then its level increases by one
        if (this.mood == "happy") {
            this.increaseLevelBy(1)
            // If it is eating two times in a row when is happy, then it gets bored
            if (this.amountOfTimesThatYouAteInARow() >= 2) {
                this.mood = "bored"
            }
        }
        // If it was bored, there are two cases
        if (this.mood == "bored") {
            if (this.hoursSinceYouAreBored() > 1) {
                // It was bored more than one hour, then it becomes happy
                this.mood = "happy"
            } else {
                // It was bored less than an hour, just log a message saying that the mascot cannot eat right now
                console.log("the mascot cannot eat right now")
            }
        }
    }
}

//We have mascot that eats and plays

//Let's start with the eating behaviour

let pepona = new Tamagotchi()
pepona.eat()
